import Link from "next/link";

const Header = () => {
	return (
		<header className="px-[50px] py-[30px] flex-center gap-[116px] bg-landing-primary mx-auto">
			<Link href="/" className="text-[36px] flex flex-col font-bold">
				WORKESQUE
			</Link>
			<nav>
				<ul className="flex gap-[35px] text-[28px] font-semibold">
					<li>
						<Link href="/">Product</Link>
					</li>
					<li>
						<Link href="/">Pricing</Link>
					</li>
					<li>
						<Link href="/">Docs</Link>
					</li>
					<li>
						<Link href="/">Contact</Link>
					</li>
				</ul>
			</nav>

			<div className="flex gap-[22px] font-semibold text-[24px]">
				<button className="w-[140px] h-[55px] rounded-full shadow-button">
					Sign Up
				</button>
				<button className="w-[140px] h-[55px] rounded-full bg-[#142623] text-white">
					Login
				</button>
			</div>
		</header>
	);
};
export default Header;
