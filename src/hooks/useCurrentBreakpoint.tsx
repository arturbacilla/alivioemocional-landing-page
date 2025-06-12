import defaultTheme from "tailwindcss/defaultTheme";
import { useEffect, useState } from "react";

export const breakpoints: Record<string, number> = {};
for (const prop in defaultTheme.screens) {
	const value = defaultTheme.screens[prop as keyof typeof defaultTheme.screens];
	if (typeof value === "string") {
		if (value.endsWith("rem")) {
			const rem = Number.parseFloat(value.replace("rem", ""));
			breakpoints[prop] = rem * 16;
		} else if (value.endsWith("px")) {
			breakpoints[prop] = Number.parseInt(value.replace("px", ""));
		} else {
			breakpoints[prop] = Number.parseInt(value);
		}
	}
}

const sortedBreakpoints = Object.entries(breakpoints).sort(([, a], [, b]) => a - b);

type BreakpointKey = keyof typeof breakpoints;

export default (): BreakpointKey | null => {
	const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointKey | null>(null);
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const currentWidth = window.innerWidth;
		const handleResize = () => {
			const currentBp = sortedBreakpoints.filter(([, size]) => currentWidth && currentWidth > size).at(-1);

			setCurrentBreakpoint(currentBp?.[0] ?? null);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [window.innerWidth, window.innerHeight]);

	return currentBreakpoint;
};
