"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
	const [isCollapse, setIsCollapse] = useState(false);

	return (
		<div className="h-screen w-full overflow-hidden">
			<Navbar />
			<div className="h-full w-full flex">
				<Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
				{children}
			</div>
		</div>
	);
};
export default ProjectLayout;
