"use client";

import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";

const GlobalSearch = () => {
	const handleInputChange = () => {};
	return (
		<div className="relative w-full max-w-[600px] max-lg:hidden">
			<div className="relative flex min-h-[36px] grow items-center gap-1 rounded-lg px-4 border border-white">
				<Image
					src={"/assets/icons/search.svg"}
					alt="search"
					width={24}
					height={24}
					className="invert cursor-pointer"
				/>
				<Input
					type="text"
					placeholder="Search"
					value={""}
					onChange={handleInputChange}
					className="small-regular border-none outline-none bg-primary-100 focus:outline-none placeholder"
				/>
			</div>
		</div>
	);
};

export default GlobalSearch;
