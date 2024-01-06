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
				"landing-primary": "#F7F7F7",
				"landing-pink": "#DE96FF",
			},
			boxShadow: {
				button: "0px 0px 20px 0px #00000040",
			},
			textColor: {
				dark: "#343434",
			},
			fontFamily: {
				raleway: ["var(--font-raleway)"],
				recursive: ["var(--font-recursive)"],
				staatliches: ["var(--font-staatliches)"],
			},
		},
	},
	plugins: [],
};
