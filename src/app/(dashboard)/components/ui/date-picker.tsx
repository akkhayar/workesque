"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({ onChange }: { onChange: (e: Date) => void }) {
	const [date, setDate] = React.useState<Date>();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"h-[40px] w-[200px] border border-[#B6D2CF] bg-[#F7F7F7] rounded-[10px] text-[#06352F] justify-between text-left font-normal",
						!date && "text-muted-foreground"
					)}>
					{date ? format(date, "PPP") : <span>Pick a date</span>}
					<CalendarIcon className="mr-2 h-4 w-4 text-[#06352F]" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={(e) => {
						setDate(e);
						onChange(e!);
					}}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
