/**
 * IMPORTS
 */
/** FRAMEWORKS */
import React from "react";
import type { AppType } from "next/dist/shared/lib/utils";
import { ChakraProvider } from "@chakra-ui/react";

/** STYLES */
import "src/styles/globals.css";
import Theme from "src/styles/index";
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
