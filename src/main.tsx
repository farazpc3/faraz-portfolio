import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(
  <StrictMode>
    <App />
    <ul>
      <li>react</li>
      <li>vite</li>
      <li>typescript</li>
    </ul>
  </StrictMode>
);
