// LIBRARIES
import React from "react";
import type { AppType } from "next/dist/shared/lib/utils";
import { themeChange } from "theme-change";
import "../styles/globals.css";

// COMPONENTS
import ThemeDrawer from "components/templates/themeDrawer";
import Header from "components/templates/header";
import DGroupNav from "components/templates/dGroupNav";
import Footer from "components/templates/footer";
import ScrollProvider from "components/hooks/scrollProvider";

// FC
const DiceRollerApp: AppType = ({ Component, pageProps }) => {
  React.useEffect(() => {
    themeChange(false);
    // false parameter is required for react project
  }, []);

  return (
    <ScrollProvider>
      <ThemeDrawer />
      <Header />
      <DGroupNav />
      <Component {...pageProps} />
      <Footer />
    </ScrollProvider>
  );
};

export default DiceRollerApp;
