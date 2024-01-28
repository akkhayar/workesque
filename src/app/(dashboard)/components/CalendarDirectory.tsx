import { ScrollArea } from "@radix-ui/react-scroll-area";
import EventCommand from "./ui/event-command";

const CalendarDirectory = () => {
	return (
		<div className="w-full h-full border p-[20px] flex flex-col bg-[#F7F8F9] overflow-hidden">
			<p className="text-[20px] mb-[25px]">Calendar</p>
			<div className="flex flex-col w-full flex-grow">
				<EventCommand />
			</div>
		</div>
	);
};
export default CalendarDirectory;
