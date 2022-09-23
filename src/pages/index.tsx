// LIBRARIESS
import type { NextPage } from "next";
import Head from "next/head";

// COMPONENTS
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

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center bg-base-100 p-4">
        <div className="grid items-center justify-center gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <button
            className="btn btn-primary rounded-lg"
            onClick={() => setRollAllFlags()}
          >
            Roll All Dice
          </button>
          <button
            className="btn btn-accent rounded-lg"
            onClick={() => resetNumDie()}
          >
            Reset All Dice
          </button>
          <div className="flex rounded-lg border-2 border-base-content/50 p-2 text-base-content">
            <h4 className="text-base">
              {"Add flat "}
              <input
                className="w-10 rounded-md border border-solid border-base-content/40 p-1 text-center text-base text-slate-800"
                type="text"
                value={groupedAddMod}
                onChange={(e) => setGroupedAddMod(parseInt(e.target.value))}
              />
              {" to combined total"}
            </h4>
          </div>
          <div className="border-b-4 border-b-secondary p-2">
            <h3 className="text-center text-2xl font-semibold">
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
