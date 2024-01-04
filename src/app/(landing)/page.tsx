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

			<section className="bg-landing-primary w-full">
				<div className="w-full min-h-screen flex flex-col rounded-[40px] bg-landing-pink px-[50px] py-[60px]">
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
							<button className="landing-button text-[24px] mt-[26px]">
								JOIN NOW
							</button>
						</div>
						<div className="flex-center w-[60%] min-h-[700px]">
							<div className="border-[7px] rounded-[10px] border-black w-[700px] h-[500px] bg-white relative ">
								<div className="absolute w-[150px] h-[200px] bg-[#6E6E6E] rounded-[8px] -top-[90px] left-[90px]"></div>
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
		</main>
	);
};
export default LandingPage;
