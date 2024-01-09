import LenisWrapper from "@/lib/lenis-wrapper";
import Header from "./components/Header";
// import { ReactLenis } from "@studio-freight/react-lenis";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<LenisWrapper>
			<div className="bg-landing-primary">
				<Header />
				<main>{children}</main>
			</div>
		</LenisWrapper>
	);
};
export default LandingLayout;
