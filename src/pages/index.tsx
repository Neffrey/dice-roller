/** FRAMEWORKS */
import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

/** MY COMPONENTS */
import DiceRoller from "src/components/templates/diceRoller";


/** COMPONENT FUNCTION */
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dice Roller</title>
        <meta name="description" content="Dice Roller By Neffrey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DiceRoller />
    </>
  );
};

export default Home;
