"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Calendar from "./components/Calendar";
import { useCalendarStore } from "@/context/store";
import {
	eachMonthOfInterval,
	endOfYear,
	format,
	startOfToday,
	startOfYear,
} from "date-fns";

// const months = [
// 	{ value: "january", title: "January" },
// 	{ value: "february", title: "February" },
// 	{ value: "march", title: "March" },
// 	{ value: "april", title: "April" },
// 	{ value: "may", title: "May" },
// 	{ value: "june", title: "June" },
// 	{ value: "july", title: "July" },
// 	{ value: "august", title: "August" },
// 	{ value: "september", title: "September" },
// 	{ value: "october", title: "October" },
// 	{ value: "november", title: "November" },
// 	{ value: "december", title: "December" },
// ];

const monthsOfThisYear = eachMonthOfInterval({
	start: startOfYear(startOfToday()),
	end: endOfYear(startOfToday()),
});

const months = monthsOfThisYear.map((month) => {
	return {
		value: month.toString(),
		title: format(month, "MMMM"),
	};
});

// console.log(month);

const CalendarPage = () => {
	const setMonth = useCalendarStore((state) => state.setMonth);

	return (
		<ScrollArea className="w-full">
			<div className="w-full flex-grow">
				<div className="w-full min-h-[75px] border-b px-[20px] flex-between">
					<p className="font-medium text-[20px]">Calendar</p>
					<div className="flex items-center gap-5">
						<Select onValueChange={setMonth}>
							<SelectTrigger className="w-[150px] rounded-[8px] focus:ring-0 border-[#E9E9E9]">
								<SelectValue placeholder="Month" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Month</SelectLabel>
									{months.map((month) => (
										<SelectItem key={month.value} value={month.value}>
											{month.title}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>

						<Select>
							<SelectTrigger className="w-[150px] rounded-[8px] focus:ring-0 border-[#E9E9E9]">
								<SelectValue placeholder="Personal" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Personal</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="orange">Orange</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>

				<Calendar />
			</div>
		</ScrollArea>
	);
};
export default CalendarPage;
