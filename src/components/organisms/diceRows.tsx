/** FRAMEWORK */
import React from "react";
import { GridItem, HStack, Text } from "@chakra-ui/react";

/** COMPONENTS */
import DieIcon from "src/components/molecules/dieIcon";

interface diceIconGroupProps {
  numDie: number;
  sides: number;
  rollValues: number[];
}

/** COMPONENT */
const DiceRows: React.FC<diceIconGroupProps> = ({
  numDie,
  sides,
  rollValues,
}) => {
  const diceRows = [];
  for (let i = 0; i < numDie; i++) {
    diceRows.push(
      <GridItem key={i}>
        <HStack mx={3} my={1}>
          <DieIcon sides={sides} />
          <Text>{rollValues[i] ? rollValues[i] : "0"} </Text>
        </HStack>
      </GridItem>
    );
  }
  return <>{numDie && diceRows}</>;
};
export default DiceRows;
