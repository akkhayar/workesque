import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#5B837E",
				},
				light: {
					900: "#FFFFFF",
				},
			},
			fontFamily: {
				raleway: ["var(--font-raleway)"],
			},
		},
	},
	plugins: [],
};
export default config;
