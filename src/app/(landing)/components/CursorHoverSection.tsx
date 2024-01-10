"use client";

import clsx from "clsx";
import { useState } from "react";

const CursorHoverSection = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);

	const updateMousePosition = (e: React.MouseEvent<HTMLDivElement>) => {
		setPosition({ x: e.clientX, y: e.clientY });
	};

	return (
		<section
			className="cursor-section px-[50px] pb-[275px] relative"
			onMouseMove={updateMousePosition}>
			<div
				className={clsx(
					"cursor flex justify-center items-center w-[180px] h-[180px]  bg-[#00FFFF] rounded-full absolute -translate-x-1/2 transition transform duration-1000",
					isHovered
						? "flex scale-100 -translate-y-[200px]"
						: "scale-0 -translate-y-[100px]"
				)}
				style={{ top: position.y, left: position.x }}>
				<svg
					width="57"
					height="56"
					viewBox="0 0 57 56"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M2.16076 47.4645C0.208134 49.4171 0.208134 52.5829 2.16076 54.5355C4.11338 56.4882 7.2792 56.4882 9.23182 54.5355L2.16076 47.4645ZM56.6963 5C56.6963 2.23857 54.4577 -2.8905e-06 51.6963 -2.8905e-06L6.69629 -1.93099e-07C3.93487 -1.93099e-07 1.69629 2.23857 1.69629 5C1.69629 7.76142 3.93487 10 6.69629 10L46.6963 10L46.6963 50C46.6963 52.7614 48.9349 55 51.6963 55C54.4577 55 56.6963 52.7614 56.6963 50L56.6963 5ZM9.23182 54.5355L55.2318 8.53553L48.1608 1.46447L2.16076 47.4645L9.23182 54.5355Z"
						fill="black"
					/>
				</svg>
			</div>

			<p
				className="cursor-text w-[886px] text-center mx-auto text-[96px] text-[#065547] font-semibold hover:cursor-none"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				Why settle for less when that can be{" "}
				<span className="font-normal">changed</span>?
			</p>
		</section>
	);
};
export default CursorHoverSection;
