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
  const setNumDie = useDiceStore((state) => state.setNumDie);
  const diceRows = [];
  if (numDie <= 0 || isNaN(numDie)) {
    diceRows.push(<div key="0" className="z-0 h-10" />);
  } else {
    for (let i = 0; i < numDie; i++) {
      diceRows.push(
        <div
          key={i}
          onClick={() => {
            deleteDie(groupKey, i);
            setNumDie(groupKey, numDie - 1);
          }}
          className={`z-20 flex h-10 items-center justify-center border-b-2 border-solid ${
            // Alternate border colors
            alternateBorders(i, 10, "border-primary", "border-secondary")
          }`}
        >
          <div className="w-5">
            <DieIcon groupKey={groupKey} className="fill-base-content" />
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
    <div className="relative grid cursor-pointer grid-cols-5 grid-rows-2 gap-4">
      {
        // Click to add Dice
        <div
          className="absolute top-0 left-0 z-10 h-full w-full"
          onClick={() => setNumDie(groupKey, numDie + 1)}
        />
      }
      {
        // Display 10 Dice Values
        diceRows.slice(0, 10)
      }
      {
        // View all dice rolls Modal
        numDie > 10 && (
          <>
            <label
              className="modal-button btn btn-accent btn-sm absolute bottom-0 right-0 z-30 rounded-md"
              htmlFor={`modal-${groupKey}`}
            >
              VIEW ALL DICE ROLLS
            </label>
            <input
              type="checkbox"
              id={`modal-${groupKey}`}
              className="modal-toggle"
            />
            <label
              htmlFor={`modal-${groupKey}`}
              className="modal cursor-pointer"
            >
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
        )
      }
    </div>
  );
};
export default DiceRows;
