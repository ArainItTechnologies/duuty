import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import "./index.scss";
import App from "./App.jsx";
import { TranslationProvider } from "./translations/TranslationProvider.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </AuthProvider>
  </StrictMode>
);
