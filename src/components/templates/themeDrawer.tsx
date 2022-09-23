// LIBRARIES
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FaStar } from "react-icons/fa";

// COMPONENTS
import useThemeStore from "components/stores/themeStore";

// FC
const ThemeDrawer = () => {
  const currentTheme = useThemeStore((state) => state.currentTheme);
  const drawerIsOpen = useThemeStore((state) => state.drawerIsOpen);
  const themeList = useThemeStore((state) => state.themeList);
  const setCurrentTheme = useThemeStore((state) => state.setCurrentTheme);
  const toggleDrawer = useThemeStore((state) => state.toggleDrawer);

  // Effect to trigger Theme Change in localStorage
  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme !== null && themeList.includes(localTheme)) {
      setCurrentTheme(localTheme);
    } else window.localStorage.setItem("theme", currentTheme);
  }, [setCurrentTheme, currentTheme, themeList]);

  return (
    <Drawer
      customIdSuffix="theme-drawer"
      className="w-full min-w-full transition md:min-w-[75vw] lg:min-w-[60vw]"
      direction="right"
      open={drawerIsOpen}
      onClose={toggleDrawer}
    >
      <div
        // Drawer Content Here
        className="grid h-full w-full grid-cols-3 gap-2 bg-base-300 p-4 text-base-content"
      >
        {themeList.map((theme) => {
          return (
            <button
              key={theme}
              data-set-theme={theme}
              data-act-class="ACTIVECLASS"
              className={`overflow-hidden rounded-lg border-4 text-sm lg:text-base ${
                theme === currentTheme
                  ? "border-primary"
                  : "border-transparent hover:border-base-content/40"
              }`}
              onClick={() => {
                toggleDrawer();
                setCurrentTheme(theme);
              }}
            >
              <div
                data-theme={theme}
                className="relative h-full w-full cursor-pointer bg-base-100 font-sans text-base-content"
              >
                {
                  // Star in top left corner on current theme
                  theme === currentTheme && (
                    <div className="absolute top-1 left-1 text-2xl text-primary">
                      <FaStar />
                    </div>
                  )
                }
                <div className="grid h-full w-full grid-cols-5 grid-rows-3">
                  {/* Left side bg color blocks */}
                  <div className="col-start-1 row-span-2 row-start-1 bg-base-200" />
                  <div className="col-start-1 row-start-3 bg-base-300" />
                  {/* Right side theme name & bg color blocks */}
                  <div className="col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col justify-center gap-1 bg-base-100 px-2">
                    <div className="text-right text-lg font-bold capitalize lg:text-xl">
                      {theme}
                    </div>
                    {/* Theme "A" blocks */}
                    <div className="flex flex-wrap justify-end gap-1">
                      <div className="flex aspect-square w-4 items-center justify-center rounded bg-primary sm:w-5 md:w-6 lg:w-7">
                        <span className="text-sm font-bold text-primary-content">
                          A
                        </span>
                      </div>
                      <div className="flex aspect-square w-4 items-center justify-center rounded bg-secondary sm:w-5 md:w-6 lg:w-7">
                        <span className="text-sm font-bold text-secondary-content">
                          A
                        </span>
                      </div>
                      <div className="flex aspect-square w-4 items-center justify-center rounded bg-accent sm:w-5 md:w-6 lg:w-7">
                        <span className="text-sm font-bold text-accent-content">
                          A
                        </span>
                      </div>
                      <div className="flex aspect-square w-4 items-center justify-center rounded bg-neutral sm:w-5 md:w-6 lg:w-7">
                        <span className="text-sm font-bold text-neutral-content">
                          A
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Drawer>
  );
};
export default ThemeDrawer;
