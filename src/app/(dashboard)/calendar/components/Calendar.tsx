import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCalendarStore } from "@/context/store";
import { cn } from "@/lib/utils";
import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	formatISO,
	getMonth,
	isSameDay,
	isSameMonth,
	isToday,
	startOfMonth,
	startOfToday,
	startOfWeek,
} from "date-fns";
import { useState } from "react";

const Calendar = () => {
	const month = useCalendarStore((state) => state.month);
	const today = startOfToday(); // Get the date of today
	const newDays = eachDayOfInterval({
		start: startOfWeek(startOfMonth(month)),
		end: endOfWeek(endOfMonth(month)),
	});

	const [date, setDate] = useState(today);

	const events = [
		{ date: new Date(2024, 0, 15), title: "Project Kickoff" },
		{ date: new Date(2024, 2, 5), title: "Client Presentation" },
		{ date: new Date(2024, 4, 20), title: "Team Building Retreat" },
		{ date: new Date(2024, 6, 10), title: "Product Launch" },
		{ date: new Date(2024, 8, 8), title: "Quarterly Review" },
		{ date: new Date(2024, 10, 1), title: "Tech Conference" },
		{ date: new Date(2024, 1, 14), title: "Design Sprint" },
		{ date: new Date(2024, 3, 28), title: "Budget Planning" },
		{ date: new Date(2024, 7, 18), title: "Marketing Campaign" },
		{ date: new Date(2024, 9, 5), title: "Customer Feedback Session" },
	];

	console.log(events);

	return (
		<div className="flex flex-col w-full">
			<p className="font-medium text-[32px] text-center uppercase">
				{format(month, "MMMM yyyy")}
			</p>

			<div className="w-full grid grid-cols-7 justify-items-center mt-[32px] border-b">
				<div className="w-full col-span-7 flex items-center justify-between font-bold text-[20px]">
					<div className="w-full text-center">SUN</div>
					<div className="w-full text-center">MON</div>
					<div className="w-full text-center">TUE</div>
					<div className="w-full text-center">WED</div>
					<div className="w-full text-center">THURS</div>
					<div className="w-full text-center">FRI</div>
					<div className="w-full text-center">SAT</div>
				</div>

				{newDays.map((day) => (
					<div
						key={day.toString()}
						className="h-[120px] w-full flex flex-col items-center group">
						<button
							className={cn(
								"text-gray-300 min-w-[35px] min-h-[35px] rounded-full hover:bg-gray-100 flex-center",
								isSameMonth(day, month) && "text-black",
								isToday(day) && "bg-[#F2FBFA]"
							)}>
							{format(day, "d")}
						</button>

						<button className="min-w-[24px] max-h-[24px] bg-[#EEEEEE] rounded-full flex-center opacity-0 group-hover:opacity-100">
							+
						</button>

						<ScrollArea className="w-full">
							{events
								.filter((event) => isSameDay(event.date, day))
								.map((event, i) => (
									<div className="w-full h-full flex flex-col gap-5 items-start" key={i}>
										<div className="flex w-full items-center gap-1 justify-start">
											<p className="px-1 rounded-[2px] bg-yellow-300 flex-center gap-1">
												<span className="min-h-[5px] block min-w-[5px] rounded-full bg-white"></span>
												{format(event.date, "k:mm")}
											</p>
											<p className="underline overflow-ellipsis text-[12px] font-light">
												{event.title}
											</p>
										</div>
									</div>
								))}
						</ScrollArea>
					</div>
				))}
			</div>

			<div className="w-full flex flex-col p-[10px]">
				<div className="bg-[#E7F0EF] flex-center w-fit px-[20px] py-[10px] mb-[20px]">
					<p className="text-[20px] font-bold text-[#343434]">
						{format(date, "MMMM d, yyyy")}
					</p>
				</div>

				<div className="grid grid-cols-4 gap-[30px]">
					<div className="flex flex-col gap-[15px]">
						<div className="flex items-center gap-[15px]">
							<div className="flex-center px-[10px] py-[5px] bg-[#F0E7E7] w-fit">
								<p>Event</p>
							</div>
							<p>1</p>
						</div>

						<div className="w-full p-[10px] rounded-[7px] border border-[#B5B5B5] shadow-calendar-card flex gap-2">
							<Checkbox id="event1" />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="event1"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
									Guidelines
								</label>
								<p className="text-sm text-muted-foreground">01:00 PM</p>
								<p className="text-sm text-muted-foreground">
									some description about the event.
								</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-[15px]">
						<div className="flex items-center gap-[15px]">
							<div className="flex-center px-[10px] py-[5px] bg-[#F0E7ED] w-fit">
								<p>Meetings</p>
							</div>
							<p>1</p>
						</div>

						<div className="w-full p-[10px] rounded-[7px] border border-[#B5B5B5] shadow-calendar-card flex gap-2">
							<Checkbox id="event1" />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="event1"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-checked:line-through">
									Guidelines
								</label>
								<p className="text-sm text-muted-foreground">01:00 PM</p>
								<p className="text-sm text-muted-foreground">
									some description about the event.
								</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-[15px]">
						<div className="flex items-center gap-[15px]">
							<div className="flex-center px-[10px] py-[5px] bg-[#EAF0E7] w-fit">
								<p>Notes</p>
							</div>
							<p>1</p>
						</div>

						<div className="w-full p-[10px] rounded-[7px] border border-[#B5B5B5] shadow-calendar-card flex gap-2">
							<Checkbox id="event1" />
							<div className="grid gap-1.5 leading-none">
								<label
									htmlFor="event1"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
									Guidelines
								</label>
								<p className="text-sm text-muted-foreground">01:00 PM</p>
								<p className="text-sm text-muted-foreground">
									some description about the event.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Calendar;
