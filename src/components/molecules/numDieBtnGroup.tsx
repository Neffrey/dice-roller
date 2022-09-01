// FRAMEWORK
import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
} from "@chakra-ui/react";

/** TYPES */
import { NumDieInputType } from "src/components//organisms/dieGroup";

/** STORES */
import { useDiceStore } from "src/components/stores/diceRollerStore";

// Component Function
const NumDieBtnGroup: React.FC<NumDieInputType> = ({ numDie, sides }) => {
  const setNumDie = useDiceStore((state) => state.setNumDie);
  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      {/* <Button onClick={()=> setNumDie(sides, numDie - 5)}>-5</Button> */}
      <Button onClick={()=> setNumDie(sides, numDie - 2)}>-2</Button>
      <Button onClick={()=> setNumDie(sides, numDie - 1)}>-1</Button>
      <Button onClick={()=> setNumDie(sides, 0)}>Clear</Button>
      <Button onClick={()=> setNumDie(sides, numDie + 1)}>+1</Button>
      <Button onClick={()=> setNumDie(sides, numDie + 2)}>+2</Button>
      {/* <Button onClick={()=> setNumDie(sides, numDie + 5)}>+5</Button> */}
    </ButtonGroup>
  );
};

export default NumDieBtnGroup;
