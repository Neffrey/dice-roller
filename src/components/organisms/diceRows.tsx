/** FRAMEWORK */
import React from "react";

/** COMPONENTS */
import { useDiceStore } from "components/stores/diceRollerStore";
import DieIcon from "components/molecules/dieIcon";

interface diceIconGroupProps {
  groupKey: number;
  numDie: number;
  rollValues: number[];
  title: string;
}

/** COMPONENT */
const DiceRows = ({
  groupKey,
  numDie,
  rollValues,
  title,
}: diceIconGroupProps) => {
  const alternateBorders = useDiceStore((state) => state.alternateStyles);
  const deleteDie = useDiceStore((state) => state.deleteDie);
  const diceRows = [];
  if (numDie <= 0 || isNaN(numDie)) {
    diceRows.push(<div key="0" className="h-10" />);
  } else {
    for (let i = 0; i < numDie; i++) {
      diceRows.push(
        <div
          key={i}
          onClick={() => {
            deleteDie(groupKey, i);
          }}
          className={`flex h-10 items-center justify-center border-b-2 border-solid ${
            // Alternate border colors
            alternateBorders(i, 10, "border-primary", "border-secondary")
          }`}
        >
          <div className="w-5">
            <DieIcon groupKey={groupKey} classNames="fill-base-content" />
          </div>
          <div className="p-1" />
          <h5 className="text-base text-base-content">
            {rollValues[i] ? rollValues[i] : "0"}
          </h5>
        </div>
      );
    }
  }
  return (
    <div className="relative grid grid-cols-5 grid-rows-2 gap-4">
      {diceRows.slice(0, 10)}
      {numDie > 10 && (
        <>
          <label
            className="modal-button btn btn-accent btn-sm rounded-md absolute bottom-0 right-0"
            htmlFor={`modal-${groupKey}`}
          >
            VIEW ALL DICE ROLLS
          </label>
          <input
            type="checkbox"
            id={`modal-${groupKey}`}
            className="modal-toggle"
          />
          <label htmlFor={`modal-${groupKey}`} className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <label
                htmlFor={`modal-${groupKey}`}
                className="btn btn-accent btn-circle btn-sm absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-center text-2xl font-bold">
                All Dice Rolls For {title} Group
              </h3>
              <div className="p-4" />
              <div className="grid grid-cols-10 gap-4">{diceRows}</div>
            </label>
          </label>
        </>
      )}
    </div>
  );
};
export default DiceRows;
