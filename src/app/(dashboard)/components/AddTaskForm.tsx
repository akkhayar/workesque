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
} from "./ui/add-task-select";
import { DatePicker } from "./ui/date-picker";
import { Plus } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Add a task",
  }),
  assignor: z.string().min(2, {
    message: "Select at least one to assign to",
  }),
  startDate: z.coerce.date(),
  deadline: z.coerce.date(),
  description: z.string().optional(),
  fileLink: z.string().min(2, {
    message: "We need a link to your file",
  }),
  comment: z.string().optional(),
});

const AddTaskForm = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      assignor: "",
      startDate: new Date(),
      deadline: new Date(),
      description: "",
      fileLink: "",
      comment: "",
    },
  });

  function onSubmit(values: z.z.infer<typeof formSchema>) {
    console.log(values);
    setOpen(false);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-[18px] relative"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-0 text-[32px] p-0"
                  placeholder="Untitled Task"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="assignor"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel className="w-[100px] text-[#06352F] text-[14px]">
                  Assign To:
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="focus:outline-none focus:ring-0">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel className="w-[100px] text-[#06352F] text-[14px]">
                  Start Date:
                </FormLabel>
                <FormControl>
                  <DatePicker onChange={field.onChange} />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel className="w-[100px] text-[#06352F] text-[14px]">
                  Deadline:
                </FormLabel>
                <FormControl>
                  <DatePicker onChange={field.onChange} />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="button"
          variant="none"
          className="border border-[#54978E] rounded-full text-[#54978E] bg-[#F7F7F7]"
        >
          # add tags
        </Button>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-0 text-[12px] p-0 placeholder:text-[#06352F]"
                  placeholder="Add a description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="button"
          variant="none"
          className="flex-center p-0 text-[#54978E]"
        >
          <span className="mr-2 bg-[#E7F0EF] p-[10px] rounded-full">
            <Plus size={10} />
          </span>
          Add subtask
        </Button>
        <div className="rounded-full w-full h-[1px] bg-gray-200"></div>

        <FormField
          control={form.control}
          name="fileLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link to files</FormLabel>
              <FormControl>
                <div className="flex gap-2 items-center">
                  <Input
                    className="w-[272px] h-[33px] bg-[#F7F7F7] border-[#B6D2CF] rounded-[8px]"
                    {...field}
                  />
                  <Button
                    variant="none"
                    type="button"
                    className="bg-[#E7F0EF] text-[#54978E] p-[10px] rounded-full h-fit"
                  >
                    <Plus size={10} />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comments</FormLabel>
              <FormControl>
                <Textarea
                  className="w-[272px] min-h-[64px] bg-[#F7F7F7] border-[#B6D2CF] rounded-[8px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant="none"
          type="submit"
          className="absolute right-0 bottom-0 w-[138px] h-[46px] border border-[#3E6E68] text-[#3E6E68] bg-[#DDF4F4] rounded-[10px]"
        >
          Create Task
        </Button>
      </form>
    </Form>
  );
};
export default AddTaskForm;
