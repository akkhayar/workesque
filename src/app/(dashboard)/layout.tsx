"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
	const [isCollapse, setIsCollapse] = useState(false);

	return (
		<main className="w-full h-screen flex flex-col">
			<Navbar />
			<div className="flex h-full">
				<Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
				<section className="w-full h-full flex flex-col">{children}</section>
			</div>
		</main>
	);
};
export default ProjectLayout;
