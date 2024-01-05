import ParallaxSection from "./components/ParallaxSection";

const LandingPage = () => {
	return (
		<main>
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

			<ParallaxSection />

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
		</main>
	);
};
export default LandingPage;
