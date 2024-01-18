import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoreHorizontal } from "lucide-react";
import TasksSection from "../components/TasksSection";

const ProjectPage = () => {
	return (
		<>
			<div className="h-[75px] w-full border-b p-[20px] flex items-center gap-[12px]">
				<p className="text-[20px] font-medium">Literaturamo</p>
				<MoreHorizontal className="cursor-pointer" />
			</div>
			<div className="w-full flex-grow flex">
				<Tabs defaultValue="account" className="w-full flex-grow flex flex-col">
					<TabsList className="w-full self-start">
						<TabsTrigger value="account">Tasks</TabsTrigger>
						<TabsTrigger value="password">People</TabsTrigger>
					</TabsList>

					<TabsContent
						value="account"
						className="w-full flex-grow px-[20px] pb-[20px]">
						<TasksSection />
					</TabsContent>

					<TabsContent
						value="password"
						className="w-full flex-grow px-[20px] pb-[20px]">
						<div className="w-full h-full rounded-[10px] bg-[#F7F8F9] border border-[#E9E9E9]">
							People
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</>
	);
};
export default ProjectPage;
