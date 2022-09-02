/** FRAMEWORKS */
import React from "react";
import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
} from "@chakra-ui/react";

/** DATA STORES */
import { useDiceStore } from "src/components/stores/diceRollerStore";

/** COMPONENTS */
import DieGroup from "src/components/organisms/dieGroup";

const DiceRoller: React.FC = () => {
  const calcAllGroups = useDiceStore((state) => state.calcAllGroups);
  const dGroups = useDiceStore((state) => state.diceGroups);
  const groupedDiceTotal = useDiceStore((state) => state.groupedDiceTotal);
  const resetNumDie = useDiceStore((state) => state.resetNumDie);
  const setRollAllFlags = useDiceStore((state) => state.setRollAllFlags);

  // Effect to calculate group total
  React.useEffect(() => {
    calcAllGroups();
    return () => {};
  }, [calcAllGroups, dGroups, groupedDiceTotal]);


  return (
    <Container minW="100%" maxW="100%" overflow="hidden">
      <Heading margin={8} textAlign="center" w="100%">
        Dice Roller
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {dGroups.map((dGroup) => (
          <GridItem key={dGroup.sides} minH={50} w="100%">
            <DieGroup
              addToTotal={dGroup.addToTotal}
              groupTotal={dGroup.groupTotal}
              numDie={dGroup.numDie}
              rollGroupFlag={dGroup.rollGroupFlag}
              sides={dGroup.sides}
              title={dGroup.title}
              rollValues={dGroup.rollValues}
            />
          </GridItem>
        ))}
        <GridItem minH={50} w="100%">
          <Heading as={"h3"}>Total: {groupedDiceTotal}</Heading>
          <HStack>
            <Button onClick={() => setRollAllFlags()}>Roll All Dice</Button>
            <Button onClick={() => resetNumDie()}>Reset All Dice</Button>
          </HStack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default DiceRoller;
