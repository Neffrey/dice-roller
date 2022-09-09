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
    diceRows.push(<div className="h-10" />);
  } else {
    for (let i = 0; i < numDie; i++) {
      diceRows.push(
        <div
          key={i}
          onClick={() =>{deleteDie(groupKey, i)}}
          className={`flex justify-center items-center border-solid border-b-2 h-10 ${
            // Alternate border colors
            alternateBorders(i, 10, "border-primary", "border-secondary")
          }`}
        >
          <div className="w-5">
            <DieIcon groupKey={groupKey} classNames="fill-white" />
          </div>
          <div className="p-1" />
          <h5 className="text-base">{rollValues[i] ? rollValues[i] : "0"}</h5>
        </div>
      );
    }
  }
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-4 relative">
      {diceRows.slice(0, 10)}
      {numDie > 10 && (
        <>
          <label
            className="btn btn-sm btn-accent modal-button absolute bottom-0 right-0"
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
                className="btn btn-sm btn-accent btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-2xl text-center font-bold">
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

{
  /* <label htmlFor="my-modal-4" className="btn modal-button">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" for="">
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </label>
</label> */
}
