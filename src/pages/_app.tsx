// UTILS
import React from "react";
import type { AppType } from "next/dist/shared/lib/utils";
import { themeChange } from "theme-change";
import "../styles/globals.css";

// MY COMPONENTS
import Header from "components/templates/header";
import Footer from "components/templates/footer";
import ThemeDrawer from "components/templates/themeDrawer";

const DiceRollerApp: AppType = ({ Component, pageProps }) => {
  React.useEffect(() => {
    themeChange(false);
    // false parameter is required for react project
  }, []);

  return (
    <ThemeDrawer>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </ThemeDrawer>
  );
};

export default DiceRollerApp;
