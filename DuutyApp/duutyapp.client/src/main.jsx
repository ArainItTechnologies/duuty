import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App.jsx";
import { TranslationProvider } from "./translations/TranslationProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </StrictMode>
);
