import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Open-sans, sans-serif",
    body: "open-sans, sans-serif",
    catchye: "Catchye, sans-serif",
  },
  colors: {
    brand: {
      300: "#a8be38",
      400: "#39807F",
      500: "#5A7729",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
