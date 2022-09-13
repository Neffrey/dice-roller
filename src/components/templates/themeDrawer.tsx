// FRAMEWORK
import React from "react";
import { FaStar } from "react-icons/fa";

// MY COMPONENTS
import { useThemeStore } from "components/stores/themeStore";

interface ThemeDrawerProps {
  children?: React.ReactNode;
}

// Component Function
const ThemeDrawer = ({ children }: ThemeDrawerProps) => {
  const setCurrentTheme = useThemeStore((state) => state.setCurrentTheme);
  const currentTheme = useThemeStore((state) => state.currentTheme);
  const themeList = useThemeStore((state) => state.themeList);

  // Effect to trigger Theme Change local store
  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme !== null && themeList.includes(localTheme)) {
      setCurrentTheme(localTheme);
    } else window.localStorage.setItem("theme", currentTheme);
  }, [setCurrentTheme, currentTheme, themeList]);

  return (
    <div className="drawer drawer-end">
      <input id="theme-drawer" type="checkbox" className="drawer-toggle" />
      <div
        // Page Content Here
        className="drawer-content"
      >
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="theme-drawer" className="drawer-overlay" />
        <div
          // Drawer Content Here
          className="grid grid-cols-3 gap-2 overflow-y-auto bg-base-300 p-4 text-base-content"
        >
          {themeList.map((theme) => {
            return (
              <button
                key={theme}
                data-set-theme={theme}
                data-act-class="ACTIVECLASS"
                className={`overflow-hidden rounded-lg text-sm outline-2 outline-offset-2 outline-base-content lg:text-base ${
                  theme === currentTheme
                    ? "border-4 border-primary hover:border-b-primary"
                    : "border border-base-content/20 hover:border-base-content/40"
                }`}
                onClick={() => {
                  setCurrentTheme(theme);
                }}
              >
                <label htmlFor="theme-drawer">
                  <div
                    data-theme={theme}
                    className="relative w-full cursor-pointer bg-base-100 font-sans text-base-content"
                  >
                    {theme === currentTheme && (
                      <div className="absolute top-1 left-1 text-2xl text-primary">
                        <FaStar />
                      </div>
                    )}
                    <div className="grid grid-cols-5 grid-rows-3">
                      <div className="col-start-1 row-span-2 row-start-1 bg-base-200" />
                      <div className="col-start-1 row-start-3 bg-base-300" />
                      <div className="col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 bg-base-100 p-2">
                        <div className="font-bold capitalize">{theme}</div>
                        <div className="flex flex-wrap gap-1">
                          <div className="flex aspect-square w-3 items-center justify-center rounded bg-primary lg:w-6">
                            <div className="text-sm font-bold text-primary-content">
                              A
                            </div>
                          </div>
                          <div className="flex aspect-square w-3 items-center justify-center rounded bg-secondary lg:w-6">
                            <div className="text-sm font-bold text-secondary-content">
                              A
                            </div>
                          </div>
                          <div className="flex aspect-square w-3 items-center justify-center rounded bg-accent lg:w-6">
                            <div className="text-sm font-bold text-accent-content">
                              A
                            </div>
                          </div>
                          <div className="flex aspect-square w-3 items-center justify-center rounded bg-neutral lg:w-6">
                            <div className="text-sm font-bold text-neutral-content">
                              A
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ThemeDrawer;
