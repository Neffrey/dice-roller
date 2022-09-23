/** FRAMEWORK */
import create from "zustand";

export interface ThemeStoreType {
  drawerIsOpen: boolean;
  currentTheme: string;
  themeList: string[];
  setCurrentTheme: (current: string) => void;
  toggleDrawer: () => void;
}

const useThemeStore = create<ThemeStoreType>((set, get) => ({
  drawerIsOpen: false,
  currentTheme: "night",
  themeList: [
    "autumn",
    "acid",
    "aqua",
    "bumblebee",
    "business",
    "cmyk",
    "coffee",
    "corporate",
    "cupcake",
    "cyberpunk",
    "dracula",
    "emerald",
    "fantasy",
    "forest",
    "halloween",
    "lemonade",
    "light",
    "luxury",
    "night",
    "pastel",
    "retro",
    "synthwave",
    "valentine",
    "winter",
  ],
  setCurrentTheme: (current) => {
    set(() => ({
      currentTheme: current,
    }));
  },
  toggleDrawer: () => {
    set(() => ({
      drawerIsOpen: !get().drawerIsOpen,
    }));
  },
}));

export default useThemeStore;
