/** FRAMEWORK */
import React from "react";

/** COMPONENTS */
import DieIcon from "components/molecules/dieIcon";

interface diceIconGroupProps {
  groupKey: number;
  numDie: number;
  rollValues: number[];
}

/** COMPONENT */
const DiceRows = ({ groupKey, numDie, rollValues }: diceIconGroupProps) => {
  // Early exit if NumDie is less than or = 0
  numDie <= 0 && <div className="p-30" />;

  const diceRows = [];
  for (let i = 0; i < numDie; i++) {
    diceRows.push(
      <div
        key={i}
        className="flex justify-center items-start border-b border-solid min-h-5 p-1 rounded-md"
      >
        <div className="w-5">
          <DieIcon groupKey={groupKey} classNames="fill-white" />
        </div>
        <div className="p-1" />
        <h5 className="text-base">{rollValues[i] ? rollValues[i] : "0"}</h5>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-5 grid-rows-2 relative">{diceRows}</div>
  );
};
export default DiceRows;

// {
//   const diceRows = [];
//   for (let i = 0; i < numDie; i++) {
//     diceRows.push(
//       <GridItem key={i}>
//         <HStack mx={3} my={1}>
//           <DieIcon sides={sides} />
//           <Text>{rollValues[i] ? rollValues[i] : "0"} </Text>
//         </HStack>
//       </GridItem>
//     );
//   }
//   return numDie ? <>{diceRows}</> : <></>;
// }
