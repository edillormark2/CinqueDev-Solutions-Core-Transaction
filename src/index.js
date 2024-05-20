import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
