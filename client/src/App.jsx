import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import AuthSignIn from "./pages/AuthSignIn";
import AuthSignUp from "./pages/AuthSignUp";
import ErrorBoundary from "./components/ErrorBoundary";
import AllTransactions from "./pages/AllTransactions";
import Settings from "./pages/Settings";
import EnterOTP from "./pages/EnterOTP";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<AuthSignIn />} />
        <Route path="/sign-up" element={<AuthSignUp />} />
        <Route path="/enter-otp" element={<EnterOTP />} />

        {/* Protected Routes */}
        <Route path="/dashboard/:userId" element={<Dashboard />} />
        <Route path="/transactions/:userId" element={<AllTransactions />} />
        <Route path="/settings/:userId" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
