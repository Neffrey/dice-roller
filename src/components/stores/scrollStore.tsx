/** FRAMEWORK */
import create from "zustand";

export interface ScrollStoreType {
  scroll: number;
  oldScroll: number;
  scrollDir: string;
  setScroll: (newScroll: number) => void;
}

const useScrollStore = create<ScrollStoreType>((set, get) => ({
  scroll: 0,
  oldScroll: 0,
  scrollDir: "",
  setScroll: (newScroll) => {
    let newScrollDir = "";
    const oldScroll = get().scroll;
    if (oldScroll < newScroll) newScrollDir = "down";
    if (oldScroll > newScroll) newScrollDir = "up";
    set(() => ({
      oldScroll: get().scroll,
      scroll: newScroll,
    }));
    if (newScrollDir !== "") {
      set(() => ({
        scrollDir: newScrollDir,
      }));
    }
  },
}));

export default useScrollStore;
