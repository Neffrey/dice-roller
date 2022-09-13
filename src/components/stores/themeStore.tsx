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
    "night",
    "light",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "forest",
    "aqua",
    "pastel",
    "fantasy",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "coffee",
    "winter",
  ],
  currentTheme: "night",
  setCurrentTheme: (current) => {
    set(() => ({
      currentTheme: current,
    }));
  },
}));
