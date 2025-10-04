import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// initialize firebase
import "./firebase";
import CustomCursor from "./components/CustomCursor";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomCursor />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
