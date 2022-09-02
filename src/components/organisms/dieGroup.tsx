/** FRAMEWORK */
import React from "react";
import {
  AspectRatio,
  Button,
  Checkbox,
  Grid,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";

/** MY COMPONENTS */
import {
  DiceGroupType,
  useDiceStore,
} from "src/components/stores/diceRollerStore";
import DieIcon from "src/components/molecules/dieIcon";
import NumDieBtnGroup from "src/components/molecules/numDieBtnGroup";
import NumDieInput from "src/components/molecules/numDieInput";
import DiceRows from "src/components/organisms/diceRows";

// Types
export interface NumDieInputType {
  numDie: number;
  sides: number;
}

/** COMPONENT */
const DiceGroup: React.FC<DiceGroupType> = ({
  sides,
  addToTotal,
  groupTotal,
  numDie,
  rollGroupFlag,
  rollValues,
}) => {
  const rollDice = useDiceStore((state) => state.rollDice);
  const setGroupTotal = useDiceStore((state) => state.setGroupTotal);
  const setRollGroupFlag = useDiceStore((state) => state.setRollGroupFlag);
  const setNumDie = useDiceStore((state) => state.setNumDie);
  const toggleAddToTotal = useDiceStore((state) => state.toggleAddToTotal);

  // Effect to trigger rollDice
  React.useEffect(() => {
    if (rollGroupFlag) {
      rollDice(sides, numDie);
      setRollGroupFlag(sides);
    }
    return () => {};
  }, [rollDice, setRollGroupFlag, rollGroupFlag, numDie, sides]);

  // Effect to keep the minimum numDie at 0
  React.useEffect(() => {
    if (numDie < 0) {
      setNumDie(sides, 0);
    }
    return () => {};
  }, [numDie, sides, setNumDie]);

  // Effect to erase roll values for dice that are removed and update group total
  React.useEffect(() => {
    if (numDie < rollValues.length) {
      setGroupTotal(sides, rollValues.slice(0, numDie));
    }
    return () => {};
  }, [setGroupTotal, numDie, sides, rollValues]);

  return (
    <VStack p={10}>
      <HStack justifyContent="center">
        <NumDieInput numDie={numDie} sides={sides} />
        <AspectRatio as="div" ratio={1} width={12}>
          <DieIcon sides={sides} />
        </AspectRatio>
        <Heading as="h3">D{sides}</Heading>
      </HStack>
      <NumDieBtnGroup numDie={numDie} sides={sides} />
      <Checkbox isChecked={addToTotal} onChange={() => toggleAddToTotal(sides)}>
        Add group roll to total
      </Checkbox>
      <Grid templateColumns="repeat(5, 1fr)">
        <DiceRows numDie={numDie} rollValues={rollValues} sides={sides} />
      </Grid>
      <Button onClick={() => setRollGroupFlag(sides)}>roll group</Button>
      <Heading as="h5" fontSize="2xl">
        Group Total: {groupTotal}
      </Heading>
    </VStack>
  );
};
export default DiceGroup;
