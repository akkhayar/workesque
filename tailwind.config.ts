import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#0B6A5E",
				},
				light: {
					900: "#FFFFFF",
				},
				"decorative-text-green": "#98A24D",
				"landing-primary": "#FBFDF0",
				"landing-pink": "#DE96FF",
			},
			textColor: {
				dark: "#343434",
			},
			fontFamily: {
				raleway: ["var(--font-raleway)"],
				recursive: ["var(--font-recursive)"],
			},
		},
		colors: {
			"landing-primary": "#FBFDF0",
		},
	},
	plugins: [],
};
