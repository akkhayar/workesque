"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = () => {
	const section = useRef(null);
	const square = useRef(null);
	const [index, setIndex] = useState(0);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section.current,
				start: "top top",
				end: `+=300%`,
				pin: true,
				scrub: true,
				// markers: true,
			},
		});

		tl
			.to(
				square.current,
				{ x: "100", y: "200", onUpdate: () => setIndex(0) },
				"+=1"
			)
			.to(square.current, { x: "-200", onUpdate: () => setIndex(1) }, "+=1")
			.to(square.current, { x: "100", onUpdate: () => setIndex(2) }, "+=1");
	});

	return (
		<section
			className="bg-landing-primary w-full flex justify-start"
			ref={section}>
			<div className="w-full min-h-screen flex flex-col rounded-[40px] relative overflow-hidden bg-landing-pink px-[50px] py-[60px]">
				<div className="w-full flex gap-5">
					<div className="w-[40%]">
						<p className="text-dark font-recursive font-black text-[68px] leading-[82px]">
							COMPLETE DATA <br />
							CONTROL
						</p>
						<p className="text-dark font-recursive leading-[28px] text-[20xp] w-[45ch]">
							From design precision to reliable performance, we prioritize high
							standards to ensure a seamless user experience.
						</p>
						<button className="landing-button text-[24px] mt-[26px]">JOIN NOW</button>
					</div>
					<div className="flex-center w-[60%] min-h-[700px]">
						<div className="border-[7px] rounded-[10px] border-black w-[700px] h-[500px] bg-white relative ">
							<div
								className="absolute w-[150px] h-[200px] bg-[#6E6E6E] rounded-[8px] -top-[90px] left-[90px]"
								ref={square}></div>
						</div>
					</div>
				</div>
				<div className="w-full flex-center mt-10 gap-[60px]">
					<button className="sec-2-button">CENTRALIZE</button>
					<button className="sec-2-button">SECURE</button>
					<button className="sec-2-button">CUSTOMIZE</button>
				</div>
			</div>
		</section>
	);
};
export default ParallaxSection;
