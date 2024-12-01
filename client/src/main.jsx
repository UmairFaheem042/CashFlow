import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ErrorBoundary>
    <BrowserRouter>
      {/* <AuthProvider> */}
        <App />
      {/* </AuthProvider> */}
    </BrowserRouter>
  </ErrorBoundary>
  // </StrictMode>
);
