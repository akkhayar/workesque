import Image from "next/image";
import Link from "next/link";
import React from "react";
import Metric from "./Metric";
import GlobalSearch from "./search/GlobalSearch";

const NavBar = () => {
	return (
		<nav className="flex-between fixed z-50 w-full gap-5 p-5 sm:px-12 background-primary">
			<Link href={"/"}>
				{/* <Image src={"/assets/images/w.svg"} alt="logo" width={23} height={23} /> */}
				<p className="h3-normal font-raleway text-light-900 max-sm:hidden">
					Workesque
				</p>
			</Link>
			<GlobalSearch />
			<div className=" flex-between flex-wrap gap-3">
				<Metric imgUrl="/assets/icons/minimize.svg" alt="Minimize" />
				<Metric imgUrl="/assets/icons/squares.svg" alt="Square" />
				<Metric imgUrl="/assets/icons/close.svg" alt="Close" />
			</div>
		</nav>
	);
};

export default NavBar;
