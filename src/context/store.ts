import { create } from "zustand";

type PathType = "project" | "calendar";

type Directory = {
	path: PathType;
	setPath: (path: PathType) => void;
};

const useDirectoryStore = create<Directory>((set) => ({
	path: "project",
	setPath: (path: PathType) => set((state) => ({ path: path })),
}));

export { useDirectoryStore };
