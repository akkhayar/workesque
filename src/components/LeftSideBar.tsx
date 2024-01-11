"use client";

import Image from "next/image";
import React from "react";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";

const LeftSideBar = () => {
	return (
		<section className="sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r-2 pt-20 bg-light-100 lg:w-[366px]">
			<div className=" w-full flex justify-between gap-5 border-b-2 pb-5 px-6 pt-5 bg-light-900">
				<Image
					src={"/assets/images/user.svg"}
					alt="profile"
					width={38}
					height={38}
					className="object-contain cursor-pointer"
				/>
				<div className="flex flex-col flex-wrap">
					<h2 className="h3-normal">Akkhayar | akkhayar</h2>
					<p className="small-regular">
						Software <span>42 member</span>
					</p>
				</div>
				<Image
					src={"/assets/icons/left.svg"}
					alt="toggle"
					width={24}
					height={24}
					className="object-contain cursor-pointer"
				/>
			</div>
			<div className="flex h-full">
				<div className="sticky -left-1 top-0 flex h-full flex-col justify-between overflow-y-auto border-r-2 p-6 bg-light-900 lg:w-[95px]">
					<div className="flex flex-col gap-7">
						<Image
							src={"/assets/icons/stack.svg"}
							alt="toggle"
							width={35}
							height={35}
							className="object-contain cursor-pointer"
						/>
						<Image
							src={"/assets/icons/time.svg"}
							alt="toggle"
							width={35}
							height={35}
							className="object-contain cursor-pointer"
						/>
					</div>
					<div className="flex flex-col gap-7">
						<Image
							src={"/assets/icons/setting.svg"}
							alt="toggle"
							width={35}
							height={35}
							className="object-contain cursor-pointer"
						/>
						<Image
							src={"/assets/icons/question.svg"}
							alt="toggle"
							width={35}
							height={35}
							className="object-contain cursor-pointer"
						/>
					</div>
				</div>
				<div className=" w-full pt-3 px-5 gap-3 flex flex-col">
					<h4 className="text-primary-100 base-bold uppercase">Department</h4>
					<Menubar className="bg-primary-900 w-full shadow-md">
						<MenubarMenu>
							<MenubarTrigger className="flex justify-between gap-40">
								File
								<Image
									src={"/assets/icons/drop-down-arrow.svg"}
									alt="dropdown"
									width={14}
									height={14}
									className="object-contain cursor-pointer"
								/>
							</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>
									New Tab <MenubarShortcut>⌘T</MenubarShortcut>
								</MenubarItem>
								<MenubarItem>New Window</MenubarItem>
								<MenubarSeparator />
							</MenubarContent>
						</MenubarMenu>
					</Menubar>
				</div>
			</div>
		</section>
	);
};

export default LeftSideBar;
