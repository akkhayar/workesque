"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
	const text = useRef(null);
	useGSAP(() => {
		gsap.fromTo(
			text.current,

			{
				y: 200,
			},
			{
				y: 0,
				duration: 1.3,
				ease: "circ.inOut",
				scrollTrigger: {
					trigger: text.current,
					start: "-600px top",
					markers: true,
				},
			}
		);
	});
	return (
		<div className="w-full relative z-1 overflow-hidden">
			<p className="font-semibold text-[96px] text-center z-2" ref={text}>
				FOR UNIFIED OPERATIONS & TEAMS
			</p>
		</div>
	);
};
export default TextReveal;
