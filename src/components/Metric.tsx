import Image from "next/image";
import React from "react";

interface MetricProps {
	imgUrl: string;
	alt: string;
}

const Metric = ({ imgUrl, alt }: MetricProps) => {
	return (
		<div className="flex-center flex-wrap gap-1">
			<Image
				src={imgUrl}
				alt={alt}
				width={16}
				height={16}
				className="object-contain invert"
			/>
		</div>
	);
};

export default Metric;
