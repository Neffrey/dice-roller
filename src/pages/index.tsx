// FRAMEWORKS
import type { NextPage } from "next";
import Head from "next/head";
import DiceRoller from "components/templates/diceRoller";
import { useDiceStore } from "components/stores/diceRollerStore";

const Home: NextPage = () => {
  const resetNumDie = useDiceStore((state) => state.resetNumDie);
  const setGroupedAddMod = useDiceStore((state) => state.setGroupedAddMod);
  const setRollAllFlags = useDiceStore((state) => state.setRollAllFlags);
  const groupedAddMod = useDiceStore((state) => state.groupedAddMod);
  const groupedDiceTotal = useDiceStore((state) => state.groupedDiceTotal);
  return (
    <>
      <Head>
        <title>Dice Roller</title>
        <meta name="description" content="Dice Roller By Neffrey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen max-w-max p-4">
        <h1 className="text-center text-5xl font-bold">Dice Roller</h1>
        <div className="p-3" />
        <div className="flex justify-center items-center gap-5">
          <button className="btn btn-primary" onClick={() => setRollAllFlags()}>
            Roll All Dice
          </button>
          <button className="btn btn-primary" onClick={() => resetNumDie()}>
            Reset All Dice
          </button>
          <div className="flex border-2 rounded-lg p-2">
            <h4 className="text-base">
              {"Add flat "}
              <input
                className="w-10 text-base p-1 rounded-md text-slate-800 text-center"
                type="text"
                value={groupedAddMod}
                onChange={(e) => setGroupedAddMod(parseInt(e.target.value))}
              />
              {" to combined total"}
            </h4>
          </div>
          <div className="border-b-4 border-b-secondary p-2">
            <h3 className="text-xl font-semibold">
              COMBINED TOTAL: {groupedDiceTotal}
            </h3>
          </div>
        </div>
        <div className="p-3" />
        <DiceRoller />
      </main>
    </>
  );
};

export default Home;
