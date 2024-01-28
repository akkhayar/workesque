import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCalendarStore } from "@/context/store";
import { cn } from "@/lib/utils";
import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	isSameDay,
	isSameMonth,
	isToday,
	startOfMonth,
	startOfToday,
	startOfWeek,
} from "date-fns";
import { useState } from "react";
import AddEventPopup from "./AddEventPopup";

interface GroupedEvent {
	tag: string;
	events: Array<{ date: Date; title: string; description: string }>;
}

interface Event {
	date: Date;
	title: string;
	tag: string;
	description: string;
}

const Calendar = () => {
	const month = useCalendarStore((state) => state.month);
	const today = startOfToday(); // Get the date of today
	const newDays = eachDayOfInterval({
		start: startOfWeek(startOfMonth(month)),
		end: endOfWeek(endOfMonth(month)),
	});

	const [date, setDate] = useState(today);

	const events = [
		{
			date: new Date(2024, 0, 15),
			title: "Project Kickoff",
			tag: "Meeting",
			description:
				"The official start of a new project marked by a crucial meeting.",
		},
		{
			date: new Date(2024, 0, 15),
			title: "Project Kickoff",
			tag: "Note",
			description:
				"A noteworthy moment related to project initiation documented in a note.",
		},
		{
			date: new Date(2024, 1, 5),
			title: "Team Building",
			tag: "Meeting",
			description:
				"A meeting focused on enhancing team collaboration and cohesion.",
		},
		{
			date: new Date(2024, 2, 10),
			title: "Quarterly Review",
			tag: "Note",
			description: "A detailed review and documentation of quarterly progress.",
		},
		{
			date: new Date(2024, 3, 20),
			title: "Product Launch",
			tag: "Event",
			description: "The grand introduction of a new product to the market.",
		},
		{
			date: new Date(2024, 4, 8),
			title: "Brainstorming Session",
			tag: "Meeting",
			description:
				"A collaborative meeting to generate creative ideas and solutions.",
		},
		{
			date: new Date(2024, 5, 15),
			title: "Client Presentation",
			tag: "Event",
			description:
				"A special event showcasing a presentation for a valued client.",
		},
		{
			date: new Date(2024, 6, 3),
			title: "Workshop",
			tag: "Event",
			description:
				"An interactive session aimed at skill development or knowledge sharing.",
		},
		{
			date: new Date(2024, 7, 22),
			title: "Training Session",
			tag: "Meeting",
			description: "A meeting designed to provide education or skill enhancement.",
		},
		{
			date: new Date(2024, 8, 12),
			title: "Product Demo",
			tag: "Meeting",
			description: "A presentation demonstrating the features of a product.",
		},
		{
			date: new Date(2024, 9, 7),
			title: "Strategic Planning",
			tag: "Note",
			description: "Documentation of strategic plans for the future.",
		},
		{
			date: new Date(2024, 10, 18),
			title: "Team Retreat",
			tag: "Event",
			description:
				"A special event where the team takes a break for bonding and relaxation.",
		},
		{
			date: new Date(2024, 11, 9),
			title: "Holiday Party",
			tag: "Note",
			description:
				"Documentation of a festive holiday celebration within the organization.",
		},
		{
			date: new Date(2024, 1, 28),
			title: "Product Update",
			tag: "Note",
			description: "A documented update on the progress or changes to a product.",
		},
		{
			date: new Date(2024, 3, 5),
			title: "Customer Feedback Session",
			tag: "Note",
			description: "A note capturing valuable feedback from customers.",
		},
		{
			date: new Date(2024, 5, 10),
			title: "Company Anniversary Celebration",
			tag: "Note",
			description:
				"A special note marking the celebration of the company's anniversary.",
		},
		{
			date: new Date(2024, 7, 15),
			title: "Team Lunch",
			tag: "Event",
			description: "A casual event where the team gathers for a meal.",
		},
		{
			date: new Date(2024, 9, 20),
			title: "Marketing Campaign Launch",
			tag: "Note",
			description: "Documentation of the launch of a marketing campaign.",
		},
		{
			date: new Date(2024, 10, 8),
			title: "Training Workshop",
			tag: "Meeting",
			description: "A meeting focused on hands-on training and learning.",
		},
		{
			date: new Date(2024, 11, 22),
			title: "End-of-Year Review",
			tag: "Meeting",
			description:
				"A meeting to reflect on the achievements and challenges of the year.",
		},
		{
			date: new Date(2024, 11, 31),
			title: "New Year's Eve Party",
			tag: "Event",
			description:
				"An exciting event to bid farewell to the current year and welcome the new one, filled with joy, laughter, and celebration.",
		},
	];

	function getEventsByTag(events: Event[]): GroupedEvent[] {
		const groupedEvents = events.reduce(
			(acc: Record<string, GroupedEvent>, event) => {
				const { tag, date, title, description } = event;
				const eventWithoutTag = { date: new Date(date), title, description };

				if (!acc[tag]) {
					acc[tag] = { tag: tag, events: [] };
				}

				acc[tag].events.push(eventWithoutTag);

				return acc;
			},
			{}
		);

		return Object.values(groupedEvents);
	}

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
							)}
							onClick={() => setDate(day)}>
							{format(day, "d")}
						</button>

						<AddEventPopup />

						<ScrollArea className="w-full">
							{events
								.filter((event) => isSameDay(event.date, day))
								.map((event, i) => {
									return (
										<div
											className="w-full h-full flex flex-col gap-5 items-start mb-[5px]"
											key={i}>
											<div className="flex w-full items-center gap-1 justify-start">
												<p className="px-1 rounded-[2px] bg-yellow-300 flex-center gap-1 inline text-nowrap">
													<span className="min-h-[5px] block min-w-[5px] rounded-full bg-white"></span>
													{format(event.date, "hh:mm a")}
												</p>
												<p className="underline overflow-ellipsis text-[12px] font-light text-nowrap">
													{event.title}
												</p>
											</div>
										</div>
									);
								})}
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

				{events.filter((event) => isSameDay(event.date, date)).length < 1 ? (
					<div className="w-full flex-center h-[100px]">No event found</div>
				) : (
					<div className="grid grid-cols-4 gap-[30px]">
						{getEventsByTag(
							events.filter((event) => isSameDay(event.date, date))
						).map((event, i) => {
							return (
								<div className="flex flex-col gap-[15px]" key={i}>
									<div className="flex items-center gap-[15px]">
										<div className="flex-center px-[10px] py-[5px] bg-[#F0E7E7] w-fit">
											<p>{event.tag}</p>
										</div>
										<p>{event.events.length}</p>
									</div>

									{event.events.map((event, i) => (
										<div
											className="w-full p-[10px] rounded-[7px] border border-[#B5B5B5] shadow-calendar-card flex gap-2"
											key={i}>
											<div className="grid gap-1.5 leading-none">
												<div className="flex items-center gap-2">
													<Checkbox id="event1" className="peer" />
													<label
														htmlFor="event1"
														className="text-sm font-medium peer-aria-checked:line-through leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
														{event.title}
													</label>
												</div>

												<p className="text-sm text-muted-foreground">
													{format(event.date, "hh:mm a")}
												</p>
												<p className="text-sm text-muted-foreground">{event.description}</p>
											</div>
										</div>
									))}
								</div>
							);
						})}
					</div>
				)}

				{/* <div className="flex flex-col gap-[15px]">
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
					</div> */}
			</div>
		</div>
	);
};
export default Calendar;
