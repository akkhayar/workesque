import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
	return (
		<nav className="flex-between fixed z-50 w-full gap-5 p-4 sm:px-12 background-primary">
			<Link href={"/"}>
				{/* <Image src={"/assets/images/w.svg"} alt="logo" width={23} height={23} /> */}
				<p className="h3-normal font-raleway text-light-900 max-sm:hidden">
					Workesque
				</p>
			</Link>
		</nav>
	);
};

export default NavBar;
