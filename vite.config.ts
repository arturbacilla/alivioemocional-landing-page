import path from "node:path";
import { defineConfig, loadEnv, type ConfigEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import tailwindcss from "@tailwindcss/vite";
import biomePlugin from "vite-plugin-biome";

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
	const cwd = process.cwd();
	const env = { ...loadEnv(mode, cwd, "VITE_") };

	return {
		plugins: [react(), tailwindcss(), biomePlugin(), ViteImageOptimizer()],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
		server: {
			host: true,
			port: Number(env.VITE_PORT ?? 5173),
		},
	};
});
