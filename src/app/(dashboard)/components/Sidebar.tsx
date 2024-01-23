import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import ProjectDirectory from "./ProjectDirectory";
import { ChevronsLeft } from "lucide-react";
import Image from "next/image";
import { useDirectoryStore } from "@/context/store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import CalendarDirectory from "./CalendarDirectory";

const Sidebar = ({
	isCollapse,
	setIsCollapse,
}: {
	isCollapse: boolean;
	setIsCollapse: Dispatch<SetStateAction<boolean>>;
}) => {
	const path = useDirectoryStore((state) => state.path);
	const setPath = useDirectoryStore((state) => state.setPath);

	const router = useRouter();

	const renderDirectory = (path: string) => {
		switch (path) {
			case "project":
				return <ProjectDirectory />;
			case "calendar":
				return <CalendarDirectory />;
		}
	};

	return (
		<div
			className={clsx(
				"h-full transition-all duration-300 overflow-hidden flex flex-col",
				isCollapse ? "min-w-[75px] max-w-[75px]" : "min-w-[331px] max-w-[331px]"
			)}>
			<div className="flex justify-between items-center border-r border-b border-[#E9E9E9] h-[75px]">
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

				<ChevronsLeft
					onClick={() => setIsCollapse(!isCollapse)}
					className={clsx(
						"w-5 h-full cursor-pointer border-l",
						isCollapse && "hidden"
					)}
				/>
			</div>

			<div className="h-full w-full flex">
				<div className="min-w-[75px] h-full border-b border-[#E9E9E9]">
					<div className="w-full flex-start flex-col gap-10 pt-[20px] border-r h-full">
						<button
							onClick={() => {
								router.push("/project");
								setPath("project");
							}}
							className="w-[32px] h-[32px] flex-center">
							<Image
								src="/assets/icons/file.svg"
								height={24}
								width={24}
								alt="File Icon"
							/>
						</button>
						<button
							onClick={() => {
								router.push("/calendar");
								setPath("calendar");
							}}
							className="w-[32px] h-[32px] flex-center">
							<Image
								src="/assets/icons/calendar.svg"
								height={24}
								width={24}
								alt="Calendar Icon"
							/>
						</button>
					</div>
				</div>
				<div
					className={clsx(
						"w-full h-full overflow-hidden relative duration-3000 transition-all",
						isCollapse ? "hidden opacity-0" : "opacity-100"
					)}>
					{renderDirectory(path)}
				</div>
			</div>
		</div>
	);
};
export default Sidebar;
