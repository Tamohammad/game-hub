import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
