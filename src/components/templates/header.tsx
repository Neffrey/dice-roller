// FRAMEWORK
import React from "react";
import DieIcon from "components/molecules/dieIcon";

// MY COMPONENTS

// Component Function
const Header: React.FC = () => {
  return (
    <div
      // Row Container
      className="border-b-5 flex w-full items-center justify-between border-b-4 border-solid border-neutral-content bg-secondary px-5 py-3"
    >
      <div
        // Logo & Name Container
        className="flex items-center justify-start"
      >
        <div className="y-10 w-10">
          <DieIcon groupKey={6} classNames="fill-secondary-content" />
        </div>
        <div className="p-3" />
        <h1 className="text-4xl font-semibold text-secondary-content">
          DICE ROLLER
        </h1>
      </div>

      {/*** TODO: MENU COMPONENT ***/}

      <div className="flex justify-end">
        <label
          // Open theme Drawer Btn
          htmlFor="theme-drawer"
          className="btn btn-accent drawer-button rounded-lg"
        >
          Change Theme
        </label>
      </div>
    </div>
  );
};
export default Header;