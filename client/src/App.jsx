import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import AuthSignIn from "./pages/AuthSignIn";
import AuthSignUp from "./pages/AuthSignUp";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<AuthSignIn />} />
        <Route path="/sign-up" element={<AuthSignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
