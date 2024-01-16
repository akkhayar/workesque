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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import TagsInput from "react-tagsinput";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import "@/styles/tag.css";
import { Separator } from "@/components/ui/separator";
import ComboBox from "./ui/combo-box";
import { useRouter } from "next/navigation";

const formSchema = z.object({
	projectName: z.string().min(2).max(50),
	projectType: z.string().min(2).max(50),
	description: z.string().optional(),
	tags: z.string().optional().array(),
	projectLink: z.string().min(2).max(50),
});

const NewProjectForm = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			projectName: "",
			projectType: "",
			description: "",
			tags: ["Keyword"],
			projectLink: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
		router.push("/project");
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-5 p-[15px] pb-[100px]">
				<FormField
					control={form.control}
					name="projectName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Project Name</FormLabel>
							<FormControl>
								<Input
									placeholder="build-the-wall- 👱🧱"
									{...field}
									className="h-[60px] max-w-[325px]"
								/>
							</FormControl>
							<FormDescription>
								This is the name of your project. It can be changed every 30 days.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="projectType"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Project Type</FormLabel>
							<FormControl>
								<ComboBox onValueChange={field.onChange} />
								{/* <Select onValueChange={field.onChange} defaultValue={field.value}>
									<SelectTrigger className="w-[250px] h-[60px] focus:outline-none focus:ring-0">
										<SelectValue placeholder="Theme" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="light">Light</SelectItem>
										<SelectItem value="dark">Dark</SelectItem>
										<SelectItem value="system">System</SelectItem>
									</SelectContent>
								</Select> */}
							</FormControl>
							<FormDescription>Choose your project type.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder="make American great again 👱🧱"
									{...field}
									className="max-w-[520px] focus:outline-none focus:ring-0 focus-within:ring-0"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="tags"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Tags
								<TooltipProvider delayDuration={0}>
									<Tooltip>
										<TooltipTrigger>
											<p className="ml-2 w-[15px] h-[15px] text-bold border rounded-full text-gray-500 font-bold border-gray-500">
												!
											</p>
										</TooltipTrigger>
										<TooltipContent>
											<p>Press Enter key to add tags</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</FormLabel>
							<FormControl>
								<TagsInput value={field.value} onChange={field.onChange} />
							</FormControl>
							<FormDescription>
								Tags will be use to group projects together.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Separator />

				<FormField
					control={form.control}
					name="projectLink"
					render={({ field }) => (
						<FormItem>
							<p className="text-[24px] font-bold">Add project drive</p>
							<p className="text-[20px] py-[26px]">
								Go to your drive and add this service account to the folder you want to
								use for your project: <br />
								<b>main-694@project-management-405211.iam.gserviceaccount.com</b>
							</p>
							<FormControl>
								<Input {...field} className="h-[48px] max-w-[1000px]" />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="pt-10">
					<Button
						type="submit"
						className="rounded-[10px] border-[1.5px] border-[#3E6E68] bg-[#DDF4F4] text-black hover:bg-[#3E6E68] hover:border-[#DDF4F4] hover:text-white px-[32px] py-[14px]">
						Create Project
					</Button>
				</div>
			</form>
		</Form>
	);
};
export default NewProjectForm;
