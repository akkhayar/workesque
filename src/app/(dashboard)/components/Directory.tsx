import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "./ui/department-select";
import { ScrollArea } from "@/components/ui/scroll-area";

import CustomCollapsible from "./ui/custom-collapsible";

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

				{/* <div className="py-[10px] overflow-hidden w-full space-y-[14px] h-full"> */}
				<div className="h-[300px] relative w-full">
					<ScrollArea className="h-full w-full absolute top-0 left-0">
						<CustomCollapsible
							title="YBS Directory"
							links={[
								{ href: "/", title: "Documentation" },
								{ href: "/", title: "Task" },
							]}
						/>
						<CustomCollapsible
							title="YBS Directory"
							links={[
								{ href: "/", title: "Documentation" },
								{ href: "/", title: "Task" },
							]}
						/>
					</ScrollArea>
				</div>

				{/* </div> */}
			</div>
		</div>
	);
};
export default Directory;
