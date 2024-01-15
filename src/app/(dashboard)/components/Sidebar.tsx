import clsx from "clsx";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import Directory from "./Directory";

const Sidebar = ({
	isCollapse,
	setIsCollapse,
}: {
	isCollapse: boolean;
	setIsCollapse: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div
			className={clsx(
				"h-full overflow-hidden transition-all duration-300",
				isCollapse ? "w-[75px]" : "w-[331px]"
			)}>
			<div className="flex justify-between items-center border-r border-b border-[#E9E9E9]">
				<div className="flex">
					<div className="min-w-[75px] p-[16px] flex-center">
						<div
							className="w-[32px] h-[32px] rounded-full bg-gray-300"
							onClick={() => setIsCollapse(!isCollapse)}></div>
					</div>

					<div className="flex gap-[12px] items-center justify-center">
						<div
							className={clsx(
								"flex flex-col",
								isCollapse ? "opacity-0 hidden" : "opacity-100"
							)}>
							<p className="font-medium text-nowrap">Akkhayar | akkhayar</p>
							<p className="font-medium text-[12px] text-nowrap">
								Software • 42 members
							</p>
						</div>
					</div>
				</div>

				<button
					className={clsx(isCollapse && "hidden")}
					onClick={() => setIsCollapse(!isCollapse)}>
					Collapse
				</button>
			</div>

			<div className="h-full w-full flex">
				<div className="min-w-[75px] h-full border-b border-[#E9E9E9]">
					<div className="w-full flex-start flex-col gap-10 pt-[20px] border-r h-full">
						<Link
							href="/project/default"
							className="w-[32px] h-[32px] bg-gray-300"></Link>
						<Link
							href="/project/default"
							className="w-[32px] h-[32px] bg-gray-300"></Link>
					</div>
				</div>
				<Directory />
			</div>
		</div>
	);
};
export default Sidebar;
