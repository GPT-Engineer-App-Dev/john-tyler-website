import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#3e2723", // deep brown
    800: "#5d4037", // brown
    700: "#795548"  // light brown
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Georgia, serif",
    body: "Times New Roman, serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
