// FRAMEWORK
import React from "react";
import {
  Box,
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
const NumDieSlider: React.FC<NumDieInputType> = ({ numDie, sides }) => {
  const setNumDie = useDiceStore((state) => state.setNumDie);
  return (
    <Slider
      value={numDie}
      min={0}
      max={60}
      step={1}
      onChange={(e) => setNumDie(sides, e)}
    >
      <SliderTrack bg="cyan.100">
        <Box position="relative" right={10} />
        <SliderFilledTrack bg="cyan.700" />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
};

export default NumDieSlider;
