import * as React from "react";

import { cn } from "@/lib/utils";

export interface NavInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const NavInput = React.forwardRef<HTMLInputElement, NavInputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<div className="relative">
				<input
					type={type}
					className={cn(
						"flex h-[30px] w-[500px] rounded-[5px] border border-input bg-background px-3 py-2 text-sm outline-1 outline-white bg-[#0B6A5E] focus:bg-white focus:outline-1 focus:outlie-[#0B6A5E] peer",
						className
					)}
					ref={ref}
					{...props}
				/>
				<label className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center peer-focus:hidden gap-1">
					<div className="h-[12px] w-[12px] bg-gray-300"></div>
					<p className="text-white text-[12px]">Search</p>
				</label>
			</div>
		);
	}
);
NavInput.displayName = "Input";

export { NavInput };
