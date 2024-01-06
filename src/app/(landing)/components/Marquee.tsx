"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Marquee = () => {
	const marquee = useRef(null);

	// useGSAP(() => {
	// 	gsap.to(marquee.current, {
	// 		x: "-100%",
	// 		ease: "linear",
	// 		duration: 10,
	// 		stagger: 0.5,
	// 		repeat: -1,
	// 		scrollTrigger: {
	// 			trigger: marquee.current,
	// 			start: "-300%",
	// 			end: "100%",
	// 			markers: true,
	// 		},
	// 	});
	// });

	return (
		<div className="w-full py-[20px]">
			<div className="w-full" ref={marquee}>
				<p className="font-semibold text-[96px] text-center">
					FOR UNIFIED OPERATIONS & TEAMS
				</p>
				{/* <p className="font-semibold text-[96px] overflow-hidden text-center flex shrink-0 mr-20">
					FOR UNIFIED OPERATIONS & TEAMS
				</p>
				<p className="font-semibold text-[96px] overflow-hidden text-center flex shrink-0 mr-20">
					FOR UNIFIED OPERATIONS & TEAMS
				</p>
				<p className="font-semibold text-[96px] overflow-hidden text-center flex shrink-0 mr-20">
					FOR UNIFIED OPERATIONS & TEAMS
				</p> */}
			</div>
		</div>
	);
};
export default Marquee;
