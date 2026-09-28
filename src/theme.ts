import { extendTheme, ThemeConfig } from "@chakra-ui/react"


const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config, 
  colors: {
    gray: {

      // 50:  "#ff69b4", // hot pink
      // 100: "#ff0000", // red
      // 200: "#ff8000", // orange
      // 300: "#ffff00", // yellow
      // 400: "#00ff00", // green
      // 500: "#00ffff", // cyan
      // 600: "#0000ff", // blue
      // 700: "#8000ff", // purple
      // 800: "#ff00ff", // magenta
      // 900: "#8b4513", // brown

      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111',

    }
  }
});

export default theme;