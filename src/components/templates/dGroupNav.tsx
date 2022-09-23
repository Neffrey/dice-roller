// LIBRARIES
import React from "react";

// COMPONENTS
import useScrollStore from "components/stores/scrollStore";
import { useDiceStore } from "components/stores/diceRollerStore";
import DieIcon from "components/molecules/dieIcon";
import useWindowDimensions from "components/hooks/useWindowDimensions";

// FC
const DGroupNav = () => {
  const scroll = useScrollStore((state) => state.scroll);
  const scrollDir = useScrollStore((state) => state.scrollDir);
  const diceGroups = useDiceStore((state) => state.diceGroups);
  const groupedDiceTotal = useDiceStore((state) => state.groupedDiceTotal);
  const { width } = useWindowDimensions();

  const calcSticky = () => {
    if (width >= 1024) return "sticky top-0";
    if (width < 1024) {
      if (scroll <= 75) return "top-0";
      if (scroll > 75 && scrollDir === "down") {
        return "-top-[100%]";
      }
      if (scroll > 75 && scrollDir === "up") {
        return "sticky top-0";
      }
    }
  };

  return (
    <div
      // Row Container
      className={
        "z-30 flex w-full items-center justify-around border-b-4 border-solid border-neutral-content bg-primary px-5 py-3 text-black transition-all duration-150" +
        " " +
        calcSticky()
      }
    >
      <>
        {width >= 768 && (
          <div className="relative flex flex-col items-center justify-center pb-2 pt-2 text-lg font-bold text-primary-content md:flex-row md:text-lg">
            <h3>TOTAL</h3>
            <div className="md:p-2" />
            {groupedDiceTotal}
            <div className="absolute bottom-0 h-1 w-[80%] bg-accent" />
          </div>
        )}
        {diceGroups.map((dgroup) => {
          return (
            <a key={dgroup.groupKey} href={`./#dgroup${dgroup.groupKey}`}>
              <div className="relative flex items-center justify-center lg:pb-2">
                <DieIcon
                  groupKey={dgroup.groupKey}
                  className="h-10 w-10 fill-primary-content hover:fill-secondary"
                />
                <div className="p-2" />
                {width >= 1024 && dgroup.groupTotal > 0 && (
                  <>
                    <h3 className="text-lg text-primary-content hover:text-secondary">
                      {dgroup.groupTotal}
                    </h3>
                    <div className="absolute bottom-0 h-1 w-[80%] bg-accent" />
                  </>
                )}
              </div>
            </a>
          );
        })}
      </>
    </div>
  );
};

export default DGroupNav;

/*
<a key={dgroup.groupKey} href={"./#dgroup-" + dgroup.groupKey}>
  <DieIcon
    groupKey={dgroup.groupKey}
    className="h-10 w-10 fill-primary-content hover:fill-secondary"
  />
  <h3 className="text-lg">{dgroup.groupTotal}</h3>
</a>
*/
