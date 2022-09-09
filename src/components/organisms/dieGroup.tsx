/** FRAMEWORK */
import React from "react";

/** MY COMPONENTS */
import { DiceGroupType, useDiceStore } from "components/stores/diceRollerStore";
import DieIcon from "components/molecules/dieIcon";
import DiceRows from "components/organisms/diceRows";

// Types
export interface NumDieInputType {
  numDie: number;
  sides: number;
}

/** COMPONENT */
const DiceGroup = ({
  groupKey,
  sides,
  addToTotal,
  groupTotal,
  numDie,
  rollGroupFlag,
  rollValues,
  title,
}: DiceGroupType) => {
  const alternateStyles = useDiceStore((state) => state.alternateStyles);
  const rollDice = useDiceStore((state) => state.rollDice);
  const setGroupTotal = useDiceStore((state) => state.setGroupTotal);
  const setRollGroupFlag = useDiceStore((state) => state.setRollGroupFlag);
  const setNumDie = useDiceStore((state) => state.setNumDie);
  const setSides = useDiceStore((state) => state.setSides);
  const toggleAddToTotal = useDiceStore((state) => state.toggleAddToTotal);

  // Effect to trigger rollDice
  React.useEffect(() => {
    if (rollGroupFlag) {
      rollDice(groupKey, numDie, sides);
      setRollGroupFlag(groupKey);
    }
  }, [rollDice, setRollGroupFlag, groupKey, rollGroupFlag, numDie, sides]);

  // Effect to erase roll values for dice that are removed and update group total
  React.useEffect(() => {
    if (numDie < rollValues.length) {
      setGroupTotal(groupKey, rollValues.slice(0, numDie));
    }
  }, [setGroupTotal, numDie, groupKey, rollValues]);

  return (
    <div
      // DIE GROUP CARD
      key={groupKey}
      className={`card justify-center shadow-lg border-solid border-2 min-h-full p-4 h-full ${
        // Alternate border colors
        alternateStyles(groupKey - 1, 4, "bg-slate-800", "bg-slate-900")
      }`}
    >
      {/* (groupKey <= 4 && groupKey % 2 == 0) ||
    (groupKey > 4 && groupKey % 2 == 1)
      ? "bg-slate-800"
      : "bg-slate-900"
  }`}
> */}
      <div
        // CARD HEADER
        className="flex justify-center items-center gap-2"
      >
        <input
          className="w-10 text-base p-2 rounded-md text-slate-800 text-center"
          type="text"
          value={numDie}
          onChange={(e) => setNumDie(groupKey, parseInt(e.target.value))}
        />
        <DieIcon classNames="w-10 fill-white" groupKey={groupKey} />
        <h3 className="text-xl">{title}</h3>
        {groupKey == 8 && (
          <input
            className="ml-2 w-10 text-base p-2 rounded-md text-slate-800 text-center"
            type="text"
            value={sides}
            onChange={(e) => setSides(groupKey, parseInt(e.target.value))}
          />
        )}
      </div>
      <div className="p-2" />
      <div
        // NUMDIE BTN GROUP
        className="btn-group justify-center"
      >
        <button
          className="btn btn-outline border-b-4 border-gray-300 border-b-secondary/70 hover:border-b-secondary/70 hover:bg-secondary/70"
          onClick={() => setNumDie(groupKey, numDie - 2)}
        >
          -2
        </button>
        <button
          className="btn btn-outline border-b-4 border-gray-300 border-b-secondary hover:border-b-secondary hover:bg-secondary"
          onClick={() => setNumDie(groupKey, numDie - 1)}
        >
          -1
        </button>
        <button
          className="btn btn-outline border-b-4 border-b-accent text-gray-300 hover:bg-accent hover:border-b-accent"
          onClick={() => setNumDie(groupKey, 0)}
        >
          Clear
        </button>
        <button
          className="btn btn-outline border-b-4 border-gray-300 border-b-primary hover:border-b-primary hover:bg-primary"
          onClick={() => setNumDie(groupKey, numDie + 1)}
        >
          +1
        </button>
        <button
          className="btn btn-outline border-b-4 border-gray-300 border-b-primary/70 hover:border-b-primary/70 hover:bg-primary/70"
          onClick={() => setNumDie(groupKey, numDie + 2)}
        >
          +2
        </button>
      </div>
      <div className="p-2" />
      <DiceRows
        groupKey={groupKey}
        numDie={numDie}
        rollValues={rollValues}
        title={title}
      />
      <div className="p-4" />
      <div
        // CARD FOOTER
        className="flex justify-center items-center gap-3"
      >
        <button
          className="btn btn-primary"
          onClick={() => setRollGroupFlag(groupKey)}
        >
          Roll Group
        </button>
        <div className="form-control">
          <label className="label justify-center items-center cursor-pointer">
            <input
              checked={addToTotal}
              onChange={() => toggleAddToTotal(groupKey)}
              type="checkbox"
              className="checkbox checkbox-secondary"
            />
            <div className="p-1" />
            <span className="label-text">Add to Combined</span>
          </label>
        </div>
      </div>
      <div className="p-2" />
      <h5 className="text-center center-content text-xl uppercase">
        {title} Group Total: {groupTotal}
      </h5>
    </div>
  );
};
export default DiceGroup;
