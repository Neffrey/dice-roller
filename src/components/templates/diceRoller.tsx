/** FRAMEWORKS */
import React from "react";

/** DATA STORES */
import { useDiceStore } from "components/stores/diceRollerStore";

/** COMPONENTS */
import DieGroup from "components/organisms/dieGroup";

const DiceRoller: React.FC = () => {
  const calcAllGroups = useDiceStore((state) => state.calcAllGroups);
  const dGroups = useDiceStore((state) => state.diceGroups);
  const groupedAddMod = useDiceStore((state) => state.groupedAddMod);
  const groupedDiceTotal = useDiceStore((state) => state.groupedDiceTotal);

  // Effect to calculate group total
  React.useEffect(() => {
    calcAllGroups();
  }, [calcAllGroups, dGroups, groupedAddMod, groupedDiceTotal]);

  return (
    <div className="overlow-hidden w-max max-w-max">
      <div className="grid gap-3 text-4xl sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        {dGroups.map((dGroup) => (
          <div className="w-full" key={dGroup.groupKey}>
            <DieGroup
              groupKey={dGroup.groupKey}
              addToTotal={dGroup.addToTotal}
              groupTotal={dGroup.groupTotal}
              numDie={dGroup.numDie}
              rollGroupFlag={dGroup.rollGroupFlag}
              sides={dGroup.sides}
              title={dGroup.title}
              rollValues={dGroup.rollValues}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiceRoller;
