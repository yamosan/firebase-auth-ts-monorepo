import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
