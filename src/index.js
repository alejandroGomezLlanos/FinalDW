import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CreateAcount from "./pages/CreateAcount";

import Login from "./pages/Login";
import Home from "./pages/Home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);
