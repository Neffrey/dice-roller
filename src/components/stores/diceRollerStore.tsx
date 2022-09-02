/** FRAMEWORK */
import create from "zustand";

export interface DiceGroupType {
  sides: number;
  title: string;
  groupTotal: number;
  addToTotal: boolean;
  rollGroupFlag: boolean;
  numDie: number;
  rollValues: number[];
}

export interface DiceRollerStoreTypes {
  calcAllGroups: () => void;
  resetNumDie: () => void;
  rollDice: (sides: number, numDie: number) => void;
  setGroupTotal: (sides: number, rollValues: number[]) => void;
  setNumDie: (sides: number, numDie: number) => void;
  setRollAllFlags: () => void;
  setRollGroupFlag: (sides: number) => void;
  toggleAddToTotal: (sides: number) => void;
  groupedDiceTotal: number;
  diceGroups: DiceGroupType[];
}

export const useDiceStore = create<DiceRollerStoreTypes>((set, get) => ({
  calcAllGroups: () => {
    set((state) => ({
      groupedDiceTotal: state.diceGroups
        .map((diceGroup) => {
          return diceGroup.addToTotal ? diceGroup.groupTotal : 0;
        })
        .reduce((prev, cur) => prev + cur, 0),
    }));
  },
  resetNumDie: () => {
    set((state) => ({
      diceGroups: state.diceGroups.map((diceGroup) => {
        return { ...diceGroup, numDie: 0 };
      }),
    }));
  },
  rollDice: (sides, numDie) => {
    // Returns a random integer from 0 to sides -1. +1 at end to make the int from 1 to sides
    var rollValuesArray: number[] = [];
    for (let i = 0; i < numDie; i++) {
      rollValuesArray[i] = Math.floor(Math.random() * sides + 1);
    }
    // Set rollValuesArray inside of individual diceGroup
    set((state) => ({
      diceGroups: state.diceGroups.map((diceGroup) => {
        return diceGroup.sides === sides
          ? {
              ...diceGroup,
              rollValues: rollValuesArray,
              groupTotal: rollValuesArray.reduce((prev, cur) => prev + cur, 0),
            }
          : diceGroup;
      }),
    }));
    // Calculate Grouped Total
    set((state) => ({
      groupedDiceTotal: state.diceGroups
        .map((diceGroup) => {
          return diceGroup.addToTotal ? diceGroup.groupTotal : 0;
        })
        .reduce((prev, cur) => prev + cur, 0),
    }));
  },
  setGroupTotal: (sides, rollValues) => {
    set((state) => ({
      diceGroups: state.diceGroups.map((diceGroup) => {
        return diceGroup.sides === sides
          ? {
              ...diceGroup,
              rollValues: rollValues,
              groupTotal: rollValues.reduce((prev, cur) => prev + cur, 0),
            }
          : diceGroup;
      }),
    }));
  },
  setNumDie: (sides, numDie) => {
    set((state) => ({
      diceGroups: state.diceGroups.map((diceGroup) => {
        return diceGroup.sides === sides
          ? { ...diceGroup, numDie: numDie }
          : diceGroup;
      }),
    }));
  },
  setRollAllFlags: () => {
    set((state) => ({
      diceGroups: state.diceGroups.map((diceGroup) => {
        return { ...diceGroup, rollGroupFlag: !diceGroup.rollGroupFlag };
      }),
    }));
  },
  setRollGroupFlag: (sides) => {
    set((state) => ({
      diceGroups: state.diceGroups.map((diceGroup) => {
        return diceGroup.sides === sides
          ? { ...diceGroup, rollGroupFlag: !diceGroup.rollGroupFlag }
          : diceGroup;
      }),
    }));
  },
  toggleAddToTotal: (sides) => {
    set((state) => ({
      diceGroups: state.diceGroups.map((diceGroup) => {
        return diceGroup.sides === sides
          ? { ...diceGroup, addToTotal: !diceGroup.addToTotal }
          : diceGroup;
      }),
    }));
  },
  groupedDiceTotal: 0,
  diceGroups: [
    {
      sides: 20,
      title: "D20",
      groupTotal: 0,
      addToTotal: false,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      sides: 4,
      title: "D4",
      addToTotal: true,
      groupTotal: 0,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      sides: 6,
      title: "D6",
      addToTotal: true,
      groupTotal: 0,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      sides: 8,
      title: "D8",
      addToTotal: true,
      groupTotal: 0,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      sides: 10,
      title: "D10",
      groupTotal: 0,
      addToTotal: true,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      sides: 12,
      title: "D12",
      groupTotal: 0,
      addToTotal: true,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      sides: 100,
      title: "D100",
      groupTotal: 0,
      addToTotal: true,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
  ],
}));
