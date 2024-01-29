import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const element: Element | null = document.getElementById("root");

if (element) {
  const root = createRoot(element);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
