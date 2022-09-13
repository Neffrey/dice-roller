/** FRAMEWORK */
import create from "zustand";

export interface ThemeStoreType {
  themeList: string[];
  currentTheme: string;
  //getLocalTheme: () => void;
  setCurrentTheme: (current: string) => void;
}

export const useThemeStore = create<ThemeStoreType>((set) => ({
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
  currentTheme: "night",
  setCurrentTheme: (current) => {
    set(() => ({
      currentTheme: current,
    }));
  },
}));
