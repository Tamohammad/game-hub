import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme";
import App from "./App";
import {
  ChakraProvider,
  ColorModeContext,
  ColorModeScript,
} from "@chakra-ui/react";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
