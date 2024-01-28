"use client";

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { useState } from "react";

const EventCommand = () => {
	const events = [
		{
			time: "1/6 - [10:00 AM]",
			title: "Organizational Meeting",
		},
		{
			time: "1/6 - [10:00 AM]",
			title: "Revision",
		},
		{
			time: "1/6 - [10:00 AM]",
			title: "Final Design",
		},
	];

	const [filteredItem, setFilteredItem] = useState(events);

	return (
		<Command
			className="flex h-full w-full bg-transparent"
			filter={(value, search) => {
				if (value.includes(search)) return 1;
				return 0;
			}}>
			<p className="font-bold text-[12px] text-[#355F59] mb-[5px]">Events</p>
			<CommandInput className="bg-[#E7F0EF] w-[150px] h-[24px] px-2 text-[12px]" />
			<CommandList className="">
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup>
					<div className="flex flex-col gap-2">
						{filteredItem.map((item, i) => (
							<CommandItem
								key={i}
								className="hover:bg-transparent aria-selected:bg-transparent text-[12px] text-[#06352F]">
								<div className="flex flex-col">
									<p className="font-semibold">{item.time}</p>
									<p className="">{item.title}</p>
								</div>
							</CommandItem>
						))}
					</div>
				</CommandGroup>
			</CommandList>
		</Command>
	);
};
export default EventCommand;
