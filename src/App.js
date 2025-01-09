import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "../src/components/ProtectedRoutes"; // Import the protected route component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signIn" element={<AuthPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
