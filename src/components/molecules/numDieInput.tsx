// FRAMEWORK
import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

/** TYPES */
import { NumDieInputType } from "src/components//organisms/dieGroup";


/** STORES */
import { useDiceStore } from "src/components/stores/diceRollerStore";


// Component Function
const NumDieInput: React.FC<NumDieInputType> = ({ numDie, sides }) => {
  const setNumDie = useDiceStore((state) => state.setNumDie);
  return (
    <NumberInput
      w="25%"
      value={numDie}
      onChange={(e) => setNumDie(sides, parseInt(e))}
    >
      <NumberInputField />
      {/* <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper> */}
    </NumberInput>
  );
};

export default NumDieInput;
