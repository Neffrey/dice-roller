import { extendTheme, useColorModeValue, type ThemeConfig } from "@chakra-ui/react";



const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme: ThemeConfig = extendTheme({
  // Set screensize breakpoints
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
  // Set custom colors
  colors: {},

  // Set defaults for components and their variants
  components: {
    // Button component defaults
    Button: {
      variants: {
        // cyanBtn: () => ({
        //   bg: useColorModeValue("cyan.600", "cyan.300"),
        //   borderBottom: useColorModeValue("solid 2px #000", "solid 2px #fff"),
        //   boxShadow: "xl",
        //   color: useColorModeValue("white", "black"),
        //   _focus: {
        //     bg: useColorModeValue("cyan.700", "cyan.100"),
        //     boxShadow: "none",
        //     borderBottom: useColorModeValue("solid 5px #000", "solid 5px #fff"),
        //   },
        //   _hover: {
        //     bg: useColorModeValue("cyan.700", "cyan.200"),
        //     boxShadow: "none",
        //     borderBottom: useColorModeValue("solid 5px #000", "solid 5px #fff"),
        //     opacity: "1",
        //     transform: `translateY(-4px)`,
        //     transition: "background 0.25s, transform 0.25s",
        //   },
        // }),
      },
    },
    // Container component defaults
    Container: {
      variants: {
        // ndFooter: () => ({
        //   bg: useColorModeValue("cyan.700", "gray.800"),
        //   borderTop: useColorModeValue("solid 3px #000", "solid 3px #fff"),
        //   color: "white",
        //   maxW: "100%",
        //   px: "0",
        //   paddingTop: "12px",
        //   paddingBottom: "32px",
        //   w: "100%",
        // }),
        // ndHero: () => ({
        //   position: "relative",
        //   overflow: "hidden",
        //   p: "0",
        //   h: "80vh",
        //   w: "100%",
        //   maxW: "100%",
        // }),
        // ndTextBox: () => ({
        //   borderRadius: "5px",
        //   boxShadow: "lg",
        //   objectFit: "fit",
        //   overflow: "hidden",
        //   p: 4,
        //   position: "relative",
        //   _before: {
        //     backgroundColor: useColorModeValue("white", "gray.800"),
        //     backgroundSize: "cover",
        //     content: '""',
        //     display: "block",
        //     position: "absolute",
        //     top: "0",
        //     left: "0",
        //     width: "100%",
        //     height: "100%",
        //     zIndex: "-2",
        //     opacity: "0.7",
        //     mixBlendMode: useColorModeValue("screen", "multiply"),
        //   },
        // }),
      },
    },
    Text: {
      variants: {
        // error: () => ({
        //   color: useColorModeValue("red.600", "red.400"),
        // }),
      },
    },
  },
  fonts: {},
  fontSizes: {},
  initialColorMode: "dark",
  useSystemColorMode: false,
  variants: {
    // ndCyan: () => ({
    //   bg: useColorModeValue("cyan.300", "cyan.600"),
    //   color: useColorModeValue("black", "white"),
    // }),
    // ndPink: () => ({
    //   bg: useColorModeValue("pink.300", "pink.600"),
    //   color: useColorModeValue("black", "white"),
    // }),
  },
});

export default theme;
