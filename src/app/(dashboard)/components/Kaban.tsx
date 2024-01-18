"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { dummyDatas } from "@/utils/dummyData";
import { GripHorizontal, MoreVertical } from "lucide-react";
import { useState } from "react";
import {
	DndContext,
	DragEndEvent,
	DragMoveEvent,
	DragOverEvent,
	DragOverlay,
	DragStartEvent,
	KeyboardSensor,
	PointerSensor,
	UniqueIdentifier,
	closestCorners,
	defaultAnnouncements,
	useDraggable,
	useDroppable,
	useSensor,
	useSensors,
} from "@dnd-kit/core";

import {
	SortableContext,
	sortableKeyboardCoordinates,
	useSortable,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import AddTaskForm from "./AddTaskForm";

const Kaban = () => {
	const [data, setData] = useState(dummyDatas);

	const [activeId, setActiveId] = useState<UniqueIdentifier>();

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const handleDragStart = (e: DragStartEvent) => {};
	const handleDragOver = (e: DragOverEvent) => {};
	const handleDragEnd = (e: DragEndEvent) => {};

	return (
		<ScrollArea className="w-full h-full mt-5">
			<div className="grid grid-cols-5 gap-8 w-full">
				<DndContext
					sensors={sensors}
					collisionDetection={closestCorners}
					onDragStart={handleDragStart}
					onDragOver={handleDragOver}
					onDragEnd={handleDragEnd}>
					<SortableContext
						items={data.flatMap((column) => column.tasks!.map((task) => task.id))}
						strategy={verticalListSortingStrategy}>
						{data.map((columnData, index) => (
							<Column key={index} data={columnData} />
						))}
					</SortableContext>
				</DndContext>
			</div>
		</ScrollArea>
	);
};

export interface TaskProps {
	id: UniqueIdentifier;
	title: string;
	tasks?: Tasks[];
}

export interface Tasks {
	id: UniqueIdentifier;
	tags: string[];
	title: string;
	description: string;
	deadline: string;
	assignee: string;
	assignor: string;
}

const Column = ({ data }: { data: TaskProps }) => {
	const [open, setOpen] = useState(false);

	const { setNodeRef } = useDroppable({
		id: data.id,
		// data: { type: "container", accepts: data.tasks?.map((data) => data.id) },
	});

	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center">
				<p>{data.title}</p>
				<MoreVertical />
			</div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>
					<div className="bg-white w-full py-[5px] rounded-[3px] border border-[#54978E] mt-[15px] text-[#06352F]">
						+ Add Task
					</div>
				</DialogTrigger>
				<DialogContent className="min-w-[1000px]">
					<DialogHeader>
						<AddTaskForm setOpen={setOpen} />
					</DialogHeader>
				</DialogContent>
			</Dialog>

			<div
				className="mt-[15px] w-full h-[500px] flex flex-col gap-5"
				ref={setNodeRef}>
				<SortableContext items={data.tasks!} strategy={verticalListSortingStrategy}>
					{data.tasks!.map((task, index) => (
						<Task key={task.id} task={task} />
					))}
				</SortableContext>
			</div>
		</div>
	);
};

const Task = ({ task }: { task: Tasks }) => {
	const {
		attributes,
		setNodeRef,
		listeners,
		transform,
		transition,
		isDragging,
	} = useSortable({ id: task.id, data: { type: "task", task } });

	return (
		<div
			className="px-[10px] pb-[10px] flex flex-col bg-white border border-[#85B5AF] rounded-[7px] mb-5"
			ref={setNodeRef}
			{...attributes}
			style={{
				transition,
				transform: CSS.Translate.toString(transform),
			}}>
			<div
				className={clsx(
					"w-full flex-center my-2 p-2 rounded-[7px] transition duration-150",
					isDragging && "bg-gray-300 bg-opacity-20"
				)}>
				<GripHorizontal size={16} {...listeners} />
			</div>

			<div className="flex gap-2 items-center flex-wrap">
				{task.tags.map((tag) => (
					<div key={tag} className="px-4 py-1 rounded-full bg-green-300">
						{tag}
					</div>
				))}
			</div>

			<div className="mt-2">
				<p className="font-medium text-[12px]">{task.title}</p>
				<p className="text-[10px] text-[#888888]">{task.description}</p>
				<p className="text-[10px] text-[#A12C2C]">{task.deadline}</p>
			</div>

			<div className="mt-4">
				<p className="text-[10px] text-[#343434]">Assigned to: {task.assignor}</p>
				<p className="text-[10px] text-[#343434]">Assigned by: {task.assignee}</p>
			</div>
		</div>
	);
};

export default Kaban;
