/** FRAMEWORK */
import React from "react";
import {
  AspectRatio,
  Button,
  Checkbox,
  Grid,
  Heading,
  HStack,
  Text,
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
import NumDieSlider from "src/components/molecules/numDieSlider";
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
  const toggleAddToTotal = useDiceStore((state) => state.toggleAddToTotal);
  const rollDice = useDiceStore((state) => state.rollDice);
  const setRollGroupFlag = useDiceStore((state) => state.setRollGroupFlag);
  const setNumDie = useDiceStore((state) => state.setNumDie);

  // Effect to trigger rollDice
  React.useEffect(() => {
    if (rollGroupFlag) {
      rollDice(sides, numDie);
      setRollGroupFlag(sides);
    }
    return () => {};
  }, [rollDice, setRollGroupFlag, rollGroupFlag, sides, numDie]);

  React.useEffect(() => {
    if (numDie < 0) {
      setNumDie(sides, 0);
    }
    return () => {};
  }, [numDie, sides, setNumDie]);

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
      {/* <HStack flexWrap="wrap">
        <DiceRows numDie={numDie} rollValues={rollValues} sides={sides} />
      </HStack> */}
      <Grid templateColumns="repeat(4, 1fr)">
        <DiceRows numDie={numDie} rollValues={rollValues} sides={sides} />
      </Grid>
      <Button onClick={() => setRollGroupFlag(sides)}>roll group</Button>
      <Heading as="h5">Group Total: {groupTotal}</Heading>
    </VStack>
  );
};
export default DiceGroup;
