"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { TweenMax } from "gsap";
import gsap, { ScrollTrigger, TextPlugin } from "gsap/all";
import { MutableRefObject, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const ParallaxSection = () => {
	const section = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section.current,
				start: "top",
				end: "+=3000",
				pin: true,
				scrub: true,
			},
		});
		const cards = [".card1", ".card2", ".card3", ".card4"];
		const titles = [".title1", ".title2", ".title3", ".title4"];
		const numbers = [".number1", ".number2", ".number3", ".number4"];
		const dots = [".dot1", ".dot2", ".dot3", ".dot4"];
		cards.forEach((card, index) => {
			const label = `animation${index + 1}`;
			tl
				.fromTo(card, { minWidth: "85px" }, { minWidth: "500px" }, label)
				.fromTo(
					titles[index],
					{ rotate: 90, delay: 0.3, y: "-50%", duration: 0.3 },
					{ rotate: 0, delay: 0.5, y: "100px", fontSize: "40px", duration: 0.3 },
					label
				)
				.to(
					numbers[index],
					{
						// Animation duration in seconds
						// Fade out the text
						opacity: 0,
						display: "none",
					},
					label
				)
				.fromTo(
					dots[index],
					{
						backgroundColor: "#D0D0D0",
						duration: 0.1,
					},
					{ backgroundColor: "#777777", duration: 0.1 },
					label
				);
		});
		tl.fromTo(
			".join-button",
			{ display: "none", opacity: 0 },
			{ display: "flex", opacity: 1, minWidth: "170px" }
		);

		// tl
		// 	.fromTo(card1.current, { minWidth: "85px" }, { minWidth: "500px" }, "first")
		// 	.fromTo(
		// 		".title1",
		// 		{ rotate: 90, delay: 0.3, y: "50%", duration: 0.3 },
		// 		{ rotate: 0, delay: 0.5, y: "100px", fontSize: "40px", duration: 0.3 },
		// 		"first"
		// 	)
		// 	.to(
		// 		".number1",
		// 		{
		// 			// Animation duration in seconds
		// 			// Fade out the text
		// 			opacity: 0,
		// 			display: "none",
		// 		},
		// 		"first"
		// 	)
		// 	.fromTo(card2.current, { minWidth: "85px" }, { minWidth: "500px" }, "second")
		// 	.to(".title2", { opacity: 0, display: "none" }, "second")
		// 	.fromTo(card3.current, { minWidth: "85px" }, { minWidth: "500px" }, "third")
		// 	.to(".title3", { opacity: 0, display: "none" }, "third")
		// 	.fromTo(card4.current, { minWidth: "85px" }, { minWidth: "500px" }, "fourth")
		// 	.to(".title4", { opacity: 0, display: "none" }, "fourth")
		// 	.fromTo(
		// 		".join-button",
		// 		{ display: "none", opacity: 0 },
		// 		{ display: "flex", opacity: 1, minWidth: "170px" }
		// 	);
	});

	return (
		<section
			className="w-full px-[50px] flex-center gap-[80px] pb-[100px] min-h-screen"
			ref={section}>
			<div className="max-w-[1400px] w-full">
				<div className="w-full border-2 border-[#0B6A5E] px-[30px] pl-0! py-[35px] rounded-[40px] flex-between gap-[116px] shadow-custom-1">
					<div className="flex flex-col w-[600px] text-[48px] text-[#142623] font-medium">
						<p className="self-start">Say goodbye to these</p>
						<p className="self-end"> workflow interruptions</p>
					</div>
					<p className="w-[520px]">
						Experience a transformative shift in your workflow as{" "}
						<span className="font-medium text-[#0B6A5E]">Workesque</span> liberates
						you from common inconveniences.{" "}
						<span className="font-medium text-[#0B6A5E]">
							Your productivity is our priority,
						</span>{" "}
						and we&apos;ve crafted an environment where your focus remains
						undisturbed, allowing you to achieve your goals without the hindrances
						typically encountered elsewhere.
					</p>
				</div>
				<div className="w-full border-2 border-[#0B6A5E] px-[90px] pb-[90px] pt-[60px] rounded-[40px] h-full relative shadow-custom-1">
					<div className="flex h-[390px] gap-[12px] justify-end overflow-x-hidden w-[1200px]">
						<Card title="INFORMATION SILOS" number={1} />
						<Card title="TASK DUPLICATIONS" number={2} />
						<Card title="PROGRESS INVISIBILITY" number={3} />
						<Card title="ONBOARD CHALLENGES" number={4} />
						<button className="join-button text-[20px] flex-center gap-[10px] text-nowrap font-bold text-[#162623] min-w-0 w-0 h-[50px] opacity-0  self-center overflow-hidden rounded-[40px] border border-[#0B6A5E]">
							JOIN NOW <span className="w-[30px] h-[30px] bg-gray-300"></span>
						</button>
					</div>

					<div className="absolute bottom-10 right-1/2 translate-x-1/2 flex gap-[10px]">
						<div className="dot1 min-w-[10px] min-h-[10px] rounded-full "></div>
						<div className="dot2 min-w-[10px] min-h-[10px] rounded-full "></div>
						<div className="dot3 min-w-[10px] min-h-[10px] rounded-full "></div>
						<div className="dot4 min-w-[10px] min-h-[10px] rounded-full "></div>
					</div>
				</div>
			</div>
		</section>
	);
};

interface CardProps {
	title: string;
	number: number;

	paragraph?: string;
}

const Card = ({ title, number, paragraph }: CardProps) => {
	const isEven = number % 2 == 0;

	const [toggle, setToggle] = useState(false);

	return (
		<div
			className={clsx(
				"card h-full flex relative justify-end items-center flex-col border rounded-[42.5px] bg-opacity-50 p-[20px] transition-all duration-300 overflow-hidden",
				isEven ? "border-[#0B6A5E] bg-[#004D4D]" : "border-[#B6D2CC] bg-[#DDE7E6]",
				`card${number}`
				// index === 0 && "min-w-[85px]",
				// index === number && "min-w-[500px]"
			)}>
			<p
				className={clsx(
					"title -rotate-90 text-nowrap absolute top-1/2  text-[#2F5853] font-bold",
					isEven ? "text-[#F0F9F8]" : "text-[#2F5853]",
					`title${number}`
				)}>
				{title}
			</p>
			<div
				onClick={() => setToggle(!toggle)}
				className={clsx(
					"h-[46px] w-[46px] aspect-square rounded-full flex-center text-[20px] font-bold cursor-pointer",
					isEven ? "bg-[#F0F9F8] text-[#54978E]" : "bg-[#2F5853] text-[#D8F8F4]",
					`number${number}`
				)}>
				{number}
			</div>
		</div>
	);
};

export default ParallaxSection;
