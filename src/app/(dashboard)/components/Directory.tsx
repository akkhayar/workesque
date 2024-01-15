import Link from "next/link";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "./ui/department-select";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Directory = () => {
	return (
		<div className="w-full h-full bg-[#F7F8F9] border p-[20px]">
			<div className="">
				<p className="font-bold text-[14px] text-[#355F59] mb-[10px]">DEPARTMENT</p>
				<Select>
					<SelectTrigger className="">
						<SelectValue placeholder="akkhayar" />
					</SelectTrigger>
					<SelectContent className="">
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
						<SelectItem value="system">System</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="mt-[20px]">
				<div className="flex justify-between text-[#355F59]">
					<p className="font-bold text-[12px]">FOLDERS</p>
					<button className="text-[24px] h-[24px] w-[24px] flex-center">+</button>
				</div>

				<div className="py-[10px] overflow-hidden w-full space-y-[14px]">
					<Collapsible>
						<CollapsibleTrigger>
							<div className="flex items-center gap-[10px] text-[12px] text-[#06352F] font-medium">
								<div>{"<"}</div>
								<p className="flex items-center gap-1 overflow-ellipsis">
									YBS Directory
								</p>
							</div>
						</CollapsibleTrigger>
						<CollapsibleContent className="data-[state=open]:animate-slideDown data-[state=close]:animate-slideUp overflow-hidden">
							<div className="mx-5 space-y-1 text-[12px] font-medium">
								<Link
									href="/"
									className="w-full px-[15px] py-[5px] hover:bg-[#E1F6F4] text-[#06352F] block">
									Documentation
								</Link>
								<Link
									href="/"
									className="w-full px-[15px] py-[5px] hover:bg-[#E1F6F4] text-[#06352F] block">
									Task
								</Link>
							</div>
						</CollapsibleContent>
					</Collapsible>

					<Collapsible>
						<CollapsibleTrigger>
							<div className="flex items-center gap-[10px] text-[12px] text-[#06352F] font-medium">
								<div>{"<"}</div>
								<p className="flex items-center gap-1 overflow-ellipsis">Literaturmo</p>
							</div>
						</CollapsibleTrigger>
						<CollapsibleContent className="data-[state=open]:animate-slideDown data-[state=close]:animate-slideUp overflow-hidden">
							<div className="mx-5 space-y-1 text-[12px] font-medium">
								<Link
									href="/"
									className="w-full px-[15px] py-[5px] hover:bg-[#E1F6F4] text-[#06352F] block">
									Documentation
								</Link>
								<Link
									href="/"
									className="w-full px-[15px] py-[5px] hover:bg-[#E1F6F4] text-[#06352F] block">
									Task
								</Link>
							</div>
						</CollapsibleContent>
					</Collapsible>
				</div>
			</div>
		</div>
	);
};
export default Directory;
