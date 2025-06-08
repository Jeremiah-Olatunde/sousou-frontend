import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { App } from "./app";

const rootEl = document.getElementById("root");

if (rootEl === null) {
  throw "root element not found";
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
