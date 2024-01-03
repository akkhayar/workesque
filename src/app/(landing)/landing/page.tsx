const LandingPage = () => {
	return (
		<main>
			<section className="bg-landing-primary flex-center flex-col gap-[40px] min-h-screen">
				<div className="flex-center flex-col leading-none gap-[40px]">
					<p className="text-[64px] text-decorative-text-green">CLAIM YOUR</p>
					<p className="text-[320px] text-decorative-text-green">CONTROL</p>
					<p className="text-[32px] text-center">
						<span className="font-bold">Your Business, Your Way</span>—Project
						Management That Adapts to Your <br /> Needs, Not the Platform.
					</p>
				</div>

				<button className="rounded-full border-[#3E6E68] bg-[#DDF4F4] border-[4px] text-[32px] px-[30px] py-[17px]">
					GET STARTED FOR FREE
				</button>
			</section>
		</main>
	);
};
export default LandingPage;
