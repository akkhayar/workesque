import { cn } from "@/lib/utils";

const TagInput = ({}: {}) => {
	return (
		<div
			className={cn(
				"flex rounded-[10px] h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
			)}>
			TagInput
		</div>
	);
};
export default TagInput;
