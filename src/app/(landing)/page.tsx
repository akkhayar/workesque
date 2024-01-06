import Image from "next/image";
import ParallaxSection from "./components/ParallaxSection";
import Marquee from "./components/Marquee";

const LandingPage = () => {
	return (
		<>
			{/* Section 1 */}
			<section className="bg-landing-primary flex-center flex-col gap-[40px] py-[100px] px-[50px]">
				<div className="flex-center flex-col leading-none gap-[40px] relative">
					<p className="text-[250px] text-[#0B6A5E] font-staatliches tracking-[-16.75px] z-[2]">
						TAKE CONTROL
					</p>
					<p className="text-[32px] text-center text-[#142623] z-[2]">
						<span className="font-bold">Your Business, Your Way</span>—Project
						Management That Adapts to Your <br /> Needs, Not the Platform.
					</p>

					<Image
						src="/assets/images/hero/gradient-1.svg"
						height={500}
						width={500}
						alt="Gradient"
						className="absolute w-[770px] h-[700px] -left-[300px] -top-[100px] z-0"
					/>
					<Image
						src="/assets/images/hero/gradient-2.svg"
						height={500}
						width={600}
						alt="Gradient"
						className="absolute -right-[300px] -top-1/2 z-0"
					/>
				</div>

				<button className="landing-button text-[24px] flex-center">
					GET STARTED FOR FREE
					<div className="h-[50px] w-[50px] rounded-full overflow-hidden ml-[10px] bg-[#06352F]"></div>
				</button>

				{/* Gradients */}
			</section>

			<Marquee />

			{/* {Section 2} */}
			{/* ! Do Not Delete this section ! */}
			{/* <ParallaxSection /> */}

			{/* {Section 3} */}
			<section className="w-full px-[50px] flex-center gap-[80px] pb-[100px]">
				<div className="flex flex-col text-[#142623]">
					<p className="text-[40px]">
						Business Excellence Through <br />
						Unified Project Management
					</p>
					<p className="text-[20px]">
						Workesque strives to revolutionize project <br />
						management by centralizing operations all in one <br />
						space - fostering collaboration, and enhancing <br />
						productivity.
					</p>
					<button className="p-[15px] text-[20px] rounded-full border border-[#0B6A5E] w-fit flex-center gap-[10px]">
						JOIN NOW <div className="w-[30px] h-[30px]"></div>
					</button>
				</div>
				<div className="w-[600px] min-h-[550px] relative">
					<div className="w-[400px] h-[400px] absolute right-[50px] top-[50px]">
						<Image
							src="/assets/images/mock.png"
							alt="Mockup"
							fill
							className="w-full h-full"
						/>
					</div>

					<div className="w-[280px] h-[300px] glass-morph absolute top-[170px] left-[35px]">
						<p className="font-semibold text-[20px]">HIGHLY-ORGANIZED</p>
					</div>
					<div className="w-[280px] h-[280px] glass-morph absolute bottom-0 -right-[20px]">
						<p className="font-semibold text-[20px]">PRINCIPLE-DRIVEN</p>
					</div>
					<div className="w-[280px] h-[170px] glass-morph absolute top-[70px] -right-[20px]">
						<p className="font-semibold text-[20px]">PRINCIPLE-DRIVEN</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
