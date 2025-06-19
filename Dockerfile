FROM oven/bun:1 AS base
WORKDIR /usr/src/app

ARG VITE_PORT
ENV VITE_PORT=$VITE_PORT
RUN test -n "$VITE_PORT" || (echo "VITE_PORT  not set" && false)

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN bun run build

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/dist ./dist

# run the app
RUN echo '#!/bin/sh' > entrypoint.sh && \
    echo 'bunx serve -l $VITE_PORT -s dist' >> entrypoint.sh && \
    chmod +x entrypoint.sh

USER bun
EXPOSE $VITE_PORT
ENTRYPOINT [ "./entrypoint.sh" ]