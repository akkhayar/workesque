import Image from "next/image";
import TextReveal from "./components/TextReveal";

import ParallaxSection from "./components/ParallaxSection";

const LandingPage = () => {
	return (
		<>
			{/* Section 1 */}
			<section className="bg-landing-primary flex-center flex-col gap-[40px] py-[100px] px-[50px] z-1">
				<div className="flex-center flex-col leading-none gap-[40px] relative">
					<p className="text-[250px] text-[#0B6A5E] font-staatliches tracking-[-16.75px] z-2">
						TAKE CONTROL
					</p>
					<p className="text-[32px] text-center text-[#142623] z-2">
						<span className="font-bold">Your Business, Your Way</span>—Project
						Management That Adapts to Your <br /> Needs, Not the Platform.
					</p>

					<div className="h-[1000px] w-[1000px] absolute -left-[350px] -top-[220px] z-0">
						<Image src="/assets/images/hero/gradient-1.svg" fill alt="Gradient" />
					</div>

					<div className="h-[500px] w-[600px] absolute -right-[300px] -top-1/2 z-0">
						<Image src="/assets/images/hero/gradient-2.svg" fill alt="Gradient" />
					</div>
					<Image
						src="/assets/images/hero/gradient-2.svg"
						height={500}
						width={600}
						alt="Gradient"
						className="absolute -right-[300px] -top-1/2 z-0"
					/>
				</div>

				<button className="landing-button text-[24px] flex-center z-2">
					GET STARTED FOR FREE
					<div className="h-[50px] w-[50px] rounded-full overflow-hidden ml-[10px] bg-[#06352F]"></div>
				</button>

				{/* Gradients */}
			</section>

			<TextReveal />

			{/* {Section 2} */}
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
					<button className="p-[15px] text-[20px] rounded-full border border-[#0B6A5E] w-fit flex-center gap-[10px] mt-[32px]">
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

			{/* Section 3*/}
			<ParallaxSection />

			{/* Section 4 */}

			<section className="px-[50px] py-[150px]">
				<p className="font-bold text-[96px] text-center mx-auto mb-[100px]">
					WHY <br />
					WORKESQUE?
				</p>
				<div className="grid grid-cols-5 gap-[40px] max-w-[1400px] mx-auto">
					<div className="col-span-3 p-[28px] h-[520px] rounded-[40px] shadow-bento bg-gradient-to-br from-white to-[#EFFFFE] relative overflow-hidden">
						<div className="h-full flex flex-col justify-between z-[2] text-[#142623]">
							<p className="w-[440px] text-[40px] font-semibold">
								ALL YOUR ECOSYSTEM IN <span className="text-gradient-l">ONE PLACE</span>
							</p>
							<p className="w-[624px] mt-auto mb-[40px] text-[20px] font-medium">
								Workesque strives to revolutionize project management by centralizing
								operations all in one space, in <i>your</i> cloud - fostering
								collaboration, and enhancing productivity.
							</p>
						</div>
					</div>

					<div className="col-span-2 p-[28px] h-[520px] rounded-[40px] shadow-bento bg-gradient-to-br from-[#EFFFFE] to-white relative overflow-hidden">
						<div className="z-[2] relative flex flex-col text-[#142623]">
							<p className="text-center font-semibold text-[40px]">
								COMPLETE DATA <br />
								<span className="text-gradient-t">CONTROL</span>
							</p>
							<p className="w-[311px] font-medium text-[20px] mt-[37px]">
								Workesque strives to revolutionize project management by centralizing
								operations all in one space, in <i>your</i> cloud - fostering
								collaboration, and enhancing productivity.
							</p>
						</div>

						<div className="absolute bottom-0 right-0 w-[300px] h-[300px]">
							<Image
								src="/assets/images/bento/bento-1.png"
								fill
								alt="Bento"
								className="object-cover"
							/>
						</div>
					</div>

					<div className="col-span-2 p-[28px] h-[520px] rounded-[40px] shadow-bento bg-gradient-to-bl from-[#EFFFFE] to-white relative overflow-hidden">
						<div className="z-[2] relative flex-center flex-col w-full h-full gap-[40px]">
							<p className="text-[54px] text-[#142623] font-extrabold">
								ARE YOU READY?
							</p>
							<button className="text-[32px] flex-center gap-[10px] text-nowrap font-bold text-[#162623] rounded-[40px] border-[3px] border-[#0B6A5E] p-[15px] bg-[#E7FFFC66]">
								JOIN NOW <span className="w-[30px] h-[30px] bg-gray-300"></span>
							</button>
						</div>

						<div className="absolute bottom-0 left-0 w-[445px] h-[280px]">
							<Image
								src="/assets/images/bento/bento-2.png"
								fill
								alt="Bento"
								className="object-cover"
							/>
						</div>
					</div>

					<div className="col-span-3 p-[28px] h-[520px] rounded-[40px] shadow-bento bg-gradient-to-tr from-[#EFFFFE] to-white relative overflow-hidden">
						<div className="z-[2] h-full relative flex justify-end flex-col gap-[30px]">
							<p className="font-semibold text-[40px]">
								CUSTOMIZABLE AND <span className="text-gradient-l">HACKABLE</span>
							</p>
							<p className="mb-[40px] w-[624px] font-medium text-[20px]">
								Workesque strives to revolutionize project management by centralizing
								operations all in one space, in <i>your</i> cloud - fostering
								collaboration, and enhancing productivity.
							</p>
						</div>

						<div className="absolute top-0 left-0 w-[545px] h-[226px]">
							<Image
								src="/assets/images/bento/bento-3.png"
								fill
								alt="Bento"
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
