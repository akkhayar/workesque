import LeftSideBar from "@/components/LeftSideBar";
import NavBar from "@/components/NavBar";

export default function Page() {
	return (
		<main className="flex flex-col bg-white w-screen h-screen relative">
			<NavBar />
			<div className="flex">
				<LeftSideBar />
			</div>
		</main>
	);
}
