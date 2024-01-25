import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import AddEventForm from "./AddEventForm";

const AddEventPopup = () => {
	return (
		<Popover>
			<PopoverTrigger>
				<div className="min-w-[24px] max-h-[24px] bg-[#EEEEEE] rounded-full flex-center opacity-0 group-hover:opacity-100">
					+
				</div>
			</PopoverTrigger>
			<PopoverContent className="rounded-[16px] shadow-calendar-card w-[350px]">
				<AddEventForm />
			</PopoverContent>
		</Popover>
	);
};
export default AddEventPopup;
