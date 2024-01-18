"use client";

import {
	Collapsible,
	CollapsibleTrigger,
	CollapsibleContent,
} from "@/components/ui/collapsible";
import clsx from "clsx";
import Link from "next/link";

import { useState } from "react";

interface CustomCollapsibleProps {
	title: string;
	links: { href: string; title: string }[];
}

const CustomCollapsible = ({ title, links }: CustomCollapsibleProps) => {
	const [open, setOpen] = useState(false);

	return (
		<Collapsible onOpenChange={() => setOpen(!open)}>
			<CollapsibleTrigger>
				<div className="flex items-center gap-[10px] text-[12px] text-[#06352F] font-medium">
					<div
						className={clsx(
							"transition duration-300",
							open ? "rotate-90" : "rotate-0"
						)}>
						{">"}
					</div>
					<p className="flex items-center gap-1 overflow-ellipsis">{title}</p>
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
				<div className="mx-5 space-y-1 text-[12px] font-medium">
					{links.map((link, i) => (
						<Link
							key={i}
							href={link.href}
							className="w-full px-[15px] py-[5px] hover:bg-[#E1F6F4] text-[#06352F] block">
							{link.title}
						</Link>
					))}
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
};
export default CustomCollapsible;
