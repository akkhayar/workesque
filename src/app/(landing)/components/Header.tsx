import Link from "next/link";

const Header = () => {
	return (
		<header className="px-[50px] py-[30px] flex items-center justify-between bg-landing-primary">
			<nav>
				<ul className="grid grid-cols-3 gap-y-2 gap-x-10 text-[32px] font-bold">
					<div>
						<li>
							<Link href="/">Product</Link>
						</li>
						<li>
							<Link href="/">Doc</Link>
						</li>
					</div>

					<div>
						<li>
							<Link href="/">Pricing</Link>
						</li>
						<li>
							<Link href="/">Blog</Link>
						</li>
					</div>

					<div>
						<li>
							<Link href="/">Contact Us</Link>
						</li>

						<li>
							<Link href="/">Login</Link>
						</li>
					</div>
				</ul>
			</nav>

			<Link href="/" className="text-[36px] flex flex-col">
				<span>WORK</span>
				<span>ESQUE</span>
			</Link>
		</header>
	);
};
export default Header;
