import Header from "./components/Header";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-landing-primary">
			<Header />
			<main>{children}</main>
		</div>
	);
};
export default LandingLayout;
