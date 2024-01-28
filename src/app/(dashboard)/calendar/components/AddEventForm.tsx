"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import TimeSelector from "./TimeSelector";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
	title: z.string().min(2, {
		message: "Please give the event a title.",
	}),
	tag: z.string().min(2, {
		message: "Select a tag.",
	}),
	role: z.array(z.string()).optional(),
	description: z.string().min(2, {
		message: "Please give the event a description.",
	}),
});

const AddEventForm = () => {
	const items = [
		{
			id: "Administrator",
			label: "Administrator",
		},
		{
			id: "YBS Contributor",
			label: "YBS Contributor",
		},
	];

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			tag: "",
			role: [],
			description: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 relative">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Untitled"
									{...field}
									className="focus:right-0 border-none px-0 text-[24px]"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="tag"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<RadioGroup
									className="flex"
									onValueChange={field.onChange}
									defaultValue="event">
									<div className="flex items-center">
										<RadioGroupItem value="event" id="r1" className="peer hidden" />
										<Label
											htmlFor="r1"
											className="peer-aria-checked:bg-[#E7F0EF] px-[10px] py-[5px] transition-colors duration-150 rounded-[5px] text-[12px] font-medium cursor-pointer">
											Event
										</Label>
									</div>
									<div className="flex items-center">
										<RadioGroupItem value="meeting" id="r2" className="peer hidden" />
										<Label
											htmlFor="r2"
											className="peer-aria-checked:bg-[#E7F0EF] px-[10px] py-[5px] transition-colors duration-150 rounded-[5px] text-[12px] font-medium cursor-pointer">
											Meeting
										</Label>
									</div>
									<div className="flex items-center">
										<RadioGroupItem value="note" id="r3" className="peer hidden" />
										<Label
											htmlFor="r3"
											className="peer-aria-checked:bg-[#E7F0EF] px-[10px] py-[5px] transition-colors duration-150 rounded-[5px] text-[12px] font-medium cursor-pointer">
											Note
										</Label>
									</div>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<TimeSelector />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="role"
					render={() => (
						<FormItem>
							<div className="mb-2">
								<FormLabel className="text-[12px] font-semibold">
									Notify Roles
								</FormLabel>
							</div>
							{items.map((item) => (
								<FormField
									key={item.id}
									control={form.control}
									name="role"
									render={({ field }) => {
										return (
											<FormItem
												key={item.id}
												className="flex flex-row items-start space-x-3 space-y-0">
												<FormControl>
													<Checkbox
														checked={field.value?.includes(item.id)}
														onCheckedChange={(checked) => {
															return checked
																? field.onChange([...(field.value as string[]), item.id])
																: field.onChange(
																		field.value?.filter((value) => value !== item.id)
																  );
														}}
													/>
												</FormControl>
												<FormLabel className="text-[12px] text-[#343434] font-medium">
													{item.label}
												</FormLabel>
											</FormItem>
										);
									}}
								/>
							))}
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Description"
									{...field}
									className="focus:right-0 border-none px-0 text-[12px] font-medium"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-end w-full">
					<Button
						type="submit"
						variant="none"
						className="rounded-[6px] bg-[#DDF4F4] border border-[#3E6E68] text-[#343434] text-[12px] font-medium px-[25px]">
						Save
					</Button>
				</div>
			</form>
		</Form>
	);
};
export default AddEventForm;
