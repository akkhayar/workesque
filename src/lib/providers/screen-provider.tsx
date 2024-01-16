"use client";

import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	useEffect(() => {
		if (window.outerWidth <= 1400) {
			router.push("/project");
		}

		console.log(window.outerWidth);
	}, [router]);

	return <>{children}</>;
};
export default ScreenProvider;
