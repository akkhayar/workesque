"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { dummyDatas } from "@/utils/dummyData";
import { GripHorizontal, MoreVertical } from "lucide-react";
import { useState } from "react";
import {
	DndContext,
	DragEndEvent,
	DragOverEvent,
	DragOverlay,
	DragStartEvent,
	KeyboardSensor,
	PointerSensor,
	UniqueIdentifier,
	closestCorners,
	useDroppable,
	useSensor,
	useSensors,
} from "@dnd-kit/core";

import {
	SortableContext,
	arrayMove,
	sortableKeyboardCoordinates,
	useSortable,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";

import AddTaskForm from "./AddTaskForm";

interface ItemsState {
	root: string[];
	container1: string[];
	container2: string[];
	container3: string[];
	container4: never[]; // Assuming container4 should be an empty array
	[key: string]: string[];
}

const Kaban = () => {
	const [items, setItems] = useState<ItemsState>({
		root: Array(5)
			.fill("")
			.map((e, i) => `Task A${i}`),
		container1: Array(3)
			.fill("")
			.map((e, i) => `Task B${i}`),
		container2: Array(4)
			.fill("")
			.map((e, i) => `Task C${i}`),
		container3: Array(2)
			.fill("")
			.map((e, i) => `Task D${i}`),
		container4: [],
	});
	const [activeId, setActiveId] = useState<UniqueIdentifier | null>();

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	function findContainer(id: UniqueIdentifier) {
		if (id in items) {
			return id;
		}

		return Object.keys(items).find((key) => (items as any)[key].includes(id));
	}

	function handleDragStart(event: DragStartEvent) {
		const { active } = event;
		const { id } = active;

		setActiveId(id);
	}

	function handleDragOver(event: DragOverEvent) {
		const { active, over } = event;
		const { id } = active;
		const { id: overId } = over;

		// Find the containers
		const activeContainer = findContainer(id);
		const overContainer = findContainer(overId);

		if (!activeContainer || !overContainer || activeContainer === overContainer) {
			return;
		}

		setItems((prev: ItemsState) => {
			const activeItems = prev[activeContainer];
			const overItems = prev[overContainer];

			// Find the indexes for the items
			const activeIndex = activeItems.indexOf(id);
			const overIndex = overItems.indexOf(overId);

			let newIndex;
			if (overId in prev) {
				// We're at the root droppable of a container
				newIndex = overItems.length + 1;
			} else {
				const isBelowLastItem = over && overIndex === overItems.length - 1;

				const modifier = isBelowLastItem ? 1 : 0;

				newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
			}

			return {
				...prev,
				[activeContainer]: [
					...prev[activeContainer].filter((item) => item !== active.id),
				],
				[overContainer]: [
					...prev[overContainer].slice(0, newIndex),
					items[activeContainer][activeIndex],
					...prev[overContainer].slice(newIndex, prev[overContainer].length),
				],
			};
		});
	}

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;
		const { id } = active;
		const { id: overId } = over;

		const activeContainer = findContainer(id);
		const overContainer = findContainer(overId);

		if (!activeContainer || !overContainer || activeContainer !== overContainer) {
			return;
		}

		const activeIndex = items[activeContainer].indexOf(active.id);
		const overIndex = items[overContainer].indexOf(overId);

		if (activeIndex !== overIndex) {
			setItems((items) => ({
				...items,
				[overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
			}));
		}

		setActiveId(null);
	}

	return (
		<ScrollArea className="w-full h-full mt-5">
			<div className="grid grid-cols-5 gap-8 w-full">
				<DndContext
					sensors={sensors}
					collisionDetection={closestCorners}
					onDragStart={handleDragStart}
					onDragOver={handleDragOver}
					onDragEnd={handleDragEnd}>
					<Column id="root" items={items.root} />
					<Column id="container1" items={items.container1} />
					<Column id="container2" items={items.container2} />
					<Column id="container3" items={items.container3} />
					<Column id="container4" items={items.container4} />

					<DragOverlay>{activeId ? <Task item={activeId} /> : null}</DragOverlay>
				</DndContext>
			</div>
		</ScrollArea>
	);
};

// export interface TaskProps {
// 	id: UniqueIdentifier;
// 	title: string;
// 	tasks?: Tasks[];
// }

// export interface Tasks {
// 	id: UniqueIdentifier;
// 	tags: string[];
// 	title: string;
// 	description: string;
// 	deadline: string;
// 	assignee: string;
// 	assignor: string;
// }

const Column = ({ id, items }: { id: string; items: UniqueIdentifier[] }) => {
	const [open, setOpen] = useState(false);

	const { setNodeRef } = useDroppable({
		id,
		// data: { type: "container", accepts: data.tasks?.map((data) => data.id) },
	});

	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center">
				<p>{id}</p>
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
				<SortableContext
					id={id!}
					items={items}
					strategy={verticalListSortingStrategy}>
					{items?.map((item) => (
						<Task key={item} item={item} />
					))}
				</SortableContext>
			</div>
		</div>
	);
};

const Task = ({ item }: { item?: UniqueIdentifier }) => {
	const {
		attributes,
		setNodeRef,
		listeners,
		transform,
		transition,
		isDragging,
	} = useSortable({ id: item! });

	return (
		<div
			className={clsx(
				isDragging && "bg-opacity-5",
				"px-[10px] pb-[10px] flex flex-col bg-white border border-[#85B5AF] rounded-[7px] mb-5"
			)}
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
				{/* {task!.tags.map((tag) => (
					<div key={tag} className="px-4 py-1 text-[10px] rounded-full bg-green-300">
						{tag}
					</div>
				))} */}

				<div className="px-4 py-1 text-[10px] rounded-full bg-green-300">UI</div>
			</div>

			<div className="mt-2">
				<p className="font-medium text-[12px]">{item}</p>
				<p className="text-[10px] text-[#888888]">Eat Sleep Repeat</p>
				<p className="text-[10px] text-[#A12C2C]">January 20th, 1965</p>
			</div>

			<div className="mt-4">
				<p className="text-[10px] text-[#343434]">Assigned to: John Snow</p>
				<p className="text-[10px] text-[#343434]">Assigned by: Patrick</p>
			</div>
		</div>
	);
};

export default Kaban;
