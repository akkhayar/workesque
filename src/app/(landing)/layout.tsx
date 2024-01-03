import Header from "./components/Header";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};
export default LandingLayout;
