"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
	const text = useRef(null);
	useGSAP(() => {
		gsap.from(
			text.current,

			{
				x: "8%",
				duration: 1,
				ease: "linear",
				scrollTrigger: {
					trigger: text.current,
					start: "-700px top",
					end: "-100px",
					scrub: true,
					// markers: true,
					toggleActions: "play none reverse none",
				},
			}
		);
	});
	return (
		<div className="w-[1400px] relative z-1 overflow-hidden mx-auto">
			<p
				className="font-semibold text-[96px] text-left z-2 -translate-x-[20%] origin-right mx-auto text-nowrap"
				ref={text}>
				FOR UNIFIED OPERATIONS & TEAMS
			</p>
		</div>
	);
};
export default TextReveal;
