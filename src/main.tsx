import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "yet-another-react-lightbox/styles.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "./index.css";
import "yet-another-react-lightbox/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
