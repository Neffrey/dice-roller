/** FRAMEWORK */
import create from "zustand";

export interface DiceGroupType {
  groupKey: number;
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
  rollDice: (groupKey: number, numDie: number, sides: number) => void;
  setGroupedAddMod: (newAddMod: number) => void;
  setGroupTotal: (groupKey: number, rollValues: number[]) => void;
  setNumDie: (groupKey: number, numDie: number) => void;
  setRollAllFlags: () => void;
  setRollGroupFlag: (groupKey: number) => void;
  setSides: (groupKey: number, sides: number) => void;
  toggleAddToTotal: (sides: number) => void;
  groupedDiceTotal: number;
  groupedAddMod: number;
  diceGroups: DiceGroupType[];
}

export const useDiceStore = create<DiceRollerStoreTypes>((set, get) => ({
  calcAllGroups: () => {
    let newGroupedTotal = get()
      .diceGroups.map((diceGroup) => {
        return diceGroup.addToTotal ? diceGroup.groupTotal : 0;
      })
      .reduce((prev, cur) => prev + cur, 0);
    newGroupedTotal > 0
      ? (newGroupedTotal = newGroupedTotal + get().groupedAddMod)
      : (newGroupedTotal = 0);
    set(() => ({
      groupedDiceTotal: newGroupedTotal,
    }));
  },
  resetNumDie: () => {
    set((state) => ({
      diceGroups: state.diceGroups.map((diceGroup) => {
        return { ...diceGroup, numDie: 0 };
      }),
    }));
  },
  rollDice: (groupKey, numDie, sides) => {
    // Returns a random integer from 0 to sides -1. +1 at end to make the int from 1 to sides
    const rollValuesArray: number[] = [];
    for (let i = 0; i < numDie; i++) {
      rollValuesArray[i] = Math.floor(Math.random() * sides + 1);
    }
    // Set rollValuesArray inside of individual diceGroup
    set((state) => ({
      diceGroups: state.diceGroups.map((diceGroup) => {
        return diceGroup.groupKey === groupKey
          ? {
              ...diceGroup,
              rollValues: rollValuesArray,
              groupTotal: rollValuesArray.reduce((prev, cur) => prev + cur, 0),
            }
          : diceGroup;
      }),
    }));
  },
  setGroupTotal: (groupKey, rollValues) => {
    set((state) => ({
      diceGroups: state.diceGroups.map((diceGroup) => {
        return diceGroup.sides === groupKey
          ? {
              ...diceGroup,
              rollValues: rollValues,
              groupTotal: rollValues.reduce((prev, cur) => prev + cur, 0),
            }
          : diceGroup;
      }),
    }));
  },
  setGroupedAddMod: (newAddMod) => {
    isNaN(newAddMod)
      ? set(() => ({
          groupedAddMod: 0,
        }))
      : set(() => ({
          groupedAddMod: newAddMod,
        }));
  },
  setNumDie: (groupKey, numDie) => {
    isNaN(numDie) || numDie <= 0
      ? set((state) => ({
          diceGroups: state.diceGroups.map((diceGroup) => {
            return diceGroup.groupKey === groupKey
              ? { ...diceGroup, numDie: 0 }
              : diceGroup;
          }),
        }))
      : set((state) => ({
          diceGroups: state.diceGroups.map((diceGroup) => {
            return diceGroup.groupKey === groupKey
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
  setRollGroupFlag: (groupKey) => {
    set((state) => ({
      diceGroups: state.diceGroups.map((diceGroup) => {
        return diceGroup.groupKey === groupKey
          ? { ...diceGroup, rollGroupFlag: !diceGroup.rollGroupFlag }
          : diceGroup;
      }),
    }));
  },
  setSides: (groupKey, sides) => {
    isNaN(sides) || sides <= 0
      ? set((state) => ({
          diceGroups: state.diceGroups.map((diceGroup) => {
            return diceGroup.groupKey === groupKey
              ? { ...diceGroup, sides: 0 }
              : diceGroup;
          }),
        }))
      : set((state) => ({
          diceGroups: state.diceGroups.map((diceGroup) => {
            return diceGroup.groupKey === groupKey
              ? { ...diceGroup, sides: sides }
              : diceGroup;
          }),
        }));
  },
  toggleAddToTotal: (groupKey) => {
    set((state) => ({
      diceGroups: state.diceGroups.map((diceGroup) => {
        return diceGroup.groupKey === groupKey
          ? { ...diceGroup, addToTotal: !diceGroup.addToTotal }
          : diceGroup;
      }),
    }));
  },
  groupedAddMod: 0,
  groupedDiceTotal: 0,
  diceGroups: [
    {
      groupKey: 1,
      sides: 20,
      title: "D20",
      groupTotal: 0,
      addToTotal: false,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      groupKey: 2,
      sides: 4,
      title: "D4",
      addToTotal: true,
      groupTotal: 0,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      groupKey: 3,
      sides: 6,
      title: "D6",
      addToTotal: true,
      groupTotal: 0,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      groupKey: 4,
      sides: 8,
      title: "D8",
      addToTotal: true,
      groupTotal: 0,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      groupKey: 5,
      sides: 10,
      title: "D10",
      groupTotal: 0,
      addToTotal: true,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      groupKey: 6,
      sides: 12,
      title: "D12",
      groupTotal: 0,
      addToTotal: true,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      groupKey: 7,
      sides: 100,
      title: "D100",
      groupTotal: 0,
      addToTotal: true,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
    {
      groupKey: 8,
      sides: 0,
      title: "DX",
      groupTotal: 0,
      addToTotal: true,
      rollGroupFlag: false,
      numDie: 0,
      rollValues: [],
    },
  ],
}));
