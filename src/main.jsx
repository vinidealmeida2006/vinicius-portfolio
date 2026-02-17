import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 🔥 ATIVA ERUDA SOMENTE SE TIVER ?eruda=1 NA URL
if (typeof window !== "undefined" && window.location.search.includes("eruda=1")) {
  import("eruda").then((eruda) => eruda.default.init());
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
