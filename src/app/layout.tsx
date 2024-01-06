import type { Metadata } from "next";
import { Raleway, Recursive, Staatliches } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-raleway",
});

const recursive = Recursive({
	subsets: ["latin"],
	variable: "--font-recursive",
});

const staatliches = Staatliches({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-staatliches",
});

export const metadata: Metadata = {
	title: "Workesque | Next-Gen Project Management Freeware",
	description:
		"Project Workesque is an innovative and user-centric project management freeware designed to streamline and enhance project collaboration. The primary objective of this project is to develop a versatile and robust platform that caters to the diverse needs of project teams, with a specific focus on seamless integration capabilities with third-party tools and services.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${raleway.variable} ${recursive.variable} ${staatliches.variable}`}>
				{children}
			</body>
		</html>
	);
}
