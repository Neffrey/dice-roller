// LIBRARIES
import React from "react";

// COMPONENTS
import useThemeStore from "components/stores/themeStore";
import DieIcon from "components/molecules/dieIcon";

// FC
const Header: React.FC = () => {
  const toggleDrawer = useThemeStore((state) => state.toggleDrawer);
  return (
    <div
      // Row Container
      className="flex w-full h-[75px] items-center justify-between border-b-4 border-solid border-neutral-content bg-secondary px-5 py-3"
    >
      <div
        // Logo & Name Container
        className="flex items-center justify-start"
      >
        <div className="y-10 w-10">
          <DieIcon groupKey={6} className="fill-secondary-content" />
        </div>
        <div className="p-3" />
        <h1 className="text-lg font-semibold text-secondary-content sm:text-xl md:text-2xl lg:text-4xl">
          nDiceRoller
        </h1>
      </div>

      <button
        // Open theme Drawer Btn
        className="btn btn-accent btn-sm break-words rounded-lg lg:btn-md"
        onClick={toggleDrawer}
      >
        Change Theme
      </button>
    </div>
  );
};
export default Header;
