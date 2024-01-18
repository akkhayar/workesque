import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Kaban from "./Kaban";

const TasksSection = () => {
	return (
		<div className="w-full h-full rounded-[10px] bg-[#F7F8F9] border border-[#E9E9E9] p-[20px]">
			<Tabs defaultValue="kaban" className="w-full flex-grow flex flex-col">
				<TabsList className="w-full self-start p-0 m-0">
					<TabsTrigger value="kaban">Kaban</TabsTrigger>
					<TabsTrigger value="table">Table</TabsTrigger>
					<TabsTrigger value="timeline">Timeline</TabsTrigger>
				</TabsList>

				<TabsContent value="kaban" className="w-full flex-grow">
					<Kaban />
				</TabsContent>

				<TabsContent value="table" className="w-full flex-grow px-[20px] pb-[20px]">
					<div className="w-full h-full rounded-[10px] bg-[#F7F8F9] border border-[#E9E9E9]">
						Table
					</div>
				</TabsContent>
				<TabsContent
					value="timeline"
					className="w-full flex-grow px-[20px] pb-[20px]">
					<div className="w-full h-full rounded-[10px] bg-[#F7F8F9] border border-[#E9E9E9]">
						Timeline
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
};
export default TasksSection;
