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
				x: "100%",
				duration: 1,
				ease: "circ.inOut",
				scrollTrigger: {
					trigger: text.current,
					start: "-700px top",
					end: "-100px",
					toggleActions: "play none reverse none",
				},
			}
		);
	});
	return (
		<div className="w-full relative z-1 overflow-hidden">
			<p
				className="font-semibold text-[96px] text-center z-2 translate-x-0"
				ref={text}>
				FOR UNIFIED OPERATIONS & TEAMS
			</p>
		</div>
	);
};
export default TextReveal;
