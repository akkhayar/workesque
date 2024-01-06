import Image from "next/image";
import ParallaxSection from "./components/ParallaxSection";

const LandingPage = () => {
	return (
		<main>
			{/* Section 1 */}
			<section className="bg-landing-primary flex-center flex-col gap-[40px] min-h-screen px-[50px]">
				<div className="flex-center flex-col leading-none gap-[40px]">
					<p className="text-[64px] text-decorative-text-green font-recursive font-black">
						CLAIM YOUR
					</p>
					<p className="text-[320px] text-decorative-text-green font-recursive font-[1000] tracking-[-22px]">
						CONTROL
					</p>
					<p className="text-[32px] text-center">
						<span className="font-bold">Your Business, Your Way</span>—Project
						Management That Adapts to Your <br /> Needs, Not the Platform.
					</p>
				</div>

				<button className="landing-button text-[32px]">GET STARTED FOR FREE</button>
			</section>

			{/* {Section 2} */}
			<ParallaxSection />

			{/* {Section 2} */}
			<section className="bg-landing-primary flex-start flex-col min-h-screen px-[50px]">
				<p className="font-recursive tracking-[-8.5px] text-decorative-text-green inline-block text-[128px] font-[1000]">
					OWN IT, WITH <span className="text-[#3E6E68]">WORKESQUE</span>
				</p>

				<div className="w-full mt-[100px] flex-center gap-[130px] text-[#172623]">
					{/* Card 1 */}
					<div className="w-[325px] flex-center flex-col rounded-[200px] border-[#0B6A5E] border-[4px] overflow-hidden p-[20px]">
						<div className="w-full relative h-[120px] p-[20px]">
							<Image
								src="/assets/images/section-3/text-1.svg"
								fill
								alt="Quality Focused"
							/>
						</div>

						{/* This is where you put the icon */}
						<div className="w-[90px] h-[90px] bg-gray-300"></div>

						<div className="my-[50px]">
							<p className="text-[20px] text-center">
								From design precision to reliable performance, we prioritize high
								standards to ensure a seamless user experience.
							</p>
						</div>
					</div>

					{/* Card 2 */}
					<div className="w-[325px] flex-center flex-col rounded-[200px] border-[#0B6A5E] border-[4px] overflow-hidden p-[20px]">
						<div className="w-full relative h-[120px] p-[20px]">
							<Image
								src="/assets/images/section-3/text-2.svg"
								fill
								alt="Quality Focused"
							/>
						</div>

						{/* This is where you put the icon */}
						<div className="w-[90px] h-[90px] bg-gray-300"></div>

						<div className="my-[50px]">
							<p className="text-[20px] text-center">
								From design precision to reliable performance, we prioritize high
								standards to ensure a seamless user experience.
							</p>
						</div>
					</div>

					{/* Card 3 */}
					<div className="w-[325px] flex-center flex-col rounded-[200px] border-[#0B6A5E] border-[4px] overflow-hidden p-[20px]">
						<div className="w-full relative h-[120px] p-[20px]">
							<Image
								src="/assets/images/section-3/text-3.svg"
								fill
								alt="Quality Focused"
							/>
						</div>

						{/* This is where you put the icon */}
						<div className="w-[90px] h-[90px] bg-gray-300"></div>

						<div className="my-[50px]">
							<p className="text-[20px] text-center">
								From design precision to reliable performance, we prioritize high
								standards to ensure a seamless user experience.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default LandingPage;
