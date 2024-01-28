import { Dispatch, SetStateAction } from "react";
import ProjectDirectory from "./ProjectDirectory";
import { ChevronsLeft } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import CalendarDirectory from "./CalendarDirectory";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar = ({
	isCollapse,
	setIsCollapse,
}: {
	isCollapse: boolean;
	setIsCollapse: Dispatch<SetStateAction<boolean>>;
}) => {
	// const path = useDirectoryStore((state) => state.path);
	// const setPath = useDirectoryStore((state) => state.setPath);

	const pathName = usePathname();
	const router = useRouter();

	const renderDirectory = (path: string) => {
		switch (path) {
			case "/project":
				return <ProjectDirectory />;
			case "/calendar":
				return <CalendarDirectory />;
		}
	};

	return (
		<div
			className={cn(
				"h-full transition-all duration-300 overflow-hidden flex flex-col",
				isCollapse ? "min-w-[75px] max-w-[75px]" : "min-w-[331px] max-w-[331px]"
			)}>
			<div className="flex justify-between items-center border-r border-b border-[#E9E9E9] min-h-[75px]">
				<div className="flex">
					<div className="min-w-[75px] p-[16px] flex-center">
						<div
							className="w-[32px] h-[32px] rounded-full bg-gray-300"
							onClick={() => setIsCollapse(!isCollapse)}></div>
					</div>

					<div className="flex gap-[12px] items-center justify-center">
						<div
							className={cn(
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
					className={cn(
						"w-5 h-full cursor-pointer border-l",
						isCollapse && "hidden"
					)}
				/>
			</div>

			<div className="h-full w-full flex">
				<div className="min-w-[75px] h-full border-b border-[#E9E9E9]">
					<div className="w-full flex-start flex-col gap-10 pt-[20px] border-r h-full">
						<Link href="/project" className="w-[32px] h-[32px] flex-center">
							<Image
								src="/assets/icons/file.svg"
								height={24}
								width={24}
								alt="File Icon"
							/>
						</Link>
						<Link href="/calendar" className="w-[32px] h-[32px] flex-center">
							<Image
								src="/assets/icons/calendar.svg"
								height={24}
								width={24}
								alt="Calendar Icon"
							/>
						</Link>
					</div>
				</div>
				<div
					className={cn(
						"w-full h-full overflow-hidden relative transition-all duration-100",
						isCollapse ? "opacity-0" : "opacity-100 delay-100"
					)}>
					{renderDirectory(pathName)}
				</div>
			</div>
		</div>
	);
};
export default Sidebar;
