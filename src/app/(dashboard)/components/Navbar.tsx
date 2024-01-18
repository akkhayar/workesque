"use client";

import Link from "next/link";
import { NavInput } from "./ui/nav-input";
import { useRouter } from "next/navigation";

const Navbar = () => {
	const router = useRouter();

	return (
		<div className="flex justify-between items-center px-[24px] p-[14px] bg-[#0B6A5E]">
			<Link href="/project" className="text-[20px] text-white font-medium">
				WORKESQUE
			</Link>
			<div className="flex gap-4 items-center">
				<div className="flex gap-2">
					<button onClick={() => router.back()}>Back</button>
					<button onClick={() => router.forward()}>Forward</button>
				</div>
				<NavInput type="text" autoComplete="off" />
			</div>
			<div className="flex items-center gap-5">
				<div className="h-[24px] w-[24px] bg-gray-300"></div>
				<div className="h-[24px] w-[24px] bg-gray-300"></div>
				<div className="h-[24px] w-[24px] bg-gray-300"></div>
			</div>
		</div>
	);
};
export default Navbar;
