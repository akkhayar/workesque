import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-gray-800">
			<Link
				href={"/project/new"}
				className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-100"
				target="_blank"
			>
				<div className="flex justify-between items-center gap-5">
					<h2 className="mb-3 text-2xl font-semibold">Create a Project</h2>
					<Image
						src={"/assets/icons/arrow-right.svg"}
						alt="arrow-right"
						width={24}
						height={25}
						className="invert hover:scale-125 ease-in-out duration-200"
					/>
				</div>
				<p className="m-0 max-w-[30ch] text-sm text-gray-700">
					Start your next project in seconds.
				</p>
			</Link>
		</main>
	);
}
