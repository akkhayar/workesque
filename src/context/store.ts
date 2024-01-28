import { format, startOfToday } from "date-fns";
import { get } from "react-hook-form";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type PathType = "project" | "calendar";

type Directory = {
	path: PathType;
	setPath: (path: PathType) => void;
	loading: boolean;
};

// const useDirectoryStore = create<Directory>()(
// 	persist(
// 		(set, get) => ({
// 			path: "project",
// 			loading: true,
// 			setPath: (path: PathType) => set((state) => ({ path: path })),
// 			setLoading: (loading: boolean) => set(() => ({ loading })),
// 		}),
// 		{
// 			name: "url-path",
// 			storage: createJSONStorage(() => sessionStorage),
// 			onRehydrateStorage: () => get().setLoading(false),
// 		}
// 	)
// );

type Calendar = {
	month: string;
	setMonth: (month: string) => void;
};

const useCalendarStore = create<Calendar>((set) => ({
	month: startOfToday().toString(),
	setMonth: (month: string) => set((state) => ({ month: month })),
}));

export {
	// useDirectoryStore,
	useCalendarStore,
};
