"use client";

import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
	useGSAP(() => {
		gsap.to("header", {
			backgroundColor: "#004D364A",
			border: "1px solid #094B43",
			boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
			backdropFilter: "blur(15px)",
			scrollTrigger: {
				trigger: "header",
				start: "+=100%",
				end: "bottom",
				toggleActions: "play none reverse none",
			},
		});
	});
	return (
		<div className="py-5 sticky top-0 z-10">
			<header className="px-[30px] py-[25px] flex-center gap-[116px] mx-auto w-fit rounded-[30px] border-[#094B43">
				<Link href="/" className="text-[36px] flex flex-col font-bold">
					WORKESQUE
				</Link>
				<nav>
					<ul className="flex gap-[35px] text-[28px] font-semibold">
						<li>
							<Link href="/">Product</Link>
						</li>
						<li>
							<Link href="/">Pricing</Link>
						</li>
						<li>
							<Link href="/">Docs</Link>
						</li>
						<li>
							<Link href="/">Contact</Link>
						</li>
					</ul>
				</nav>

				<div className="flex gap-[22px] font-semibold text-[24px]">
					<button className="w-[140px] h-[55px] rounded-full shadow-button bg-white">
						Sign Up
					</button>
					<button className="w-[140px] h-[55px] rounded-full bg-[#142623] text-white">
						Login
					</button>
				</div>
			</header>
		</div>
	);
};
export default Header;
