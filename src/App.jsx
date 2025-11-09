import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Import your pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import StateDetail from "./pages/StateDetail";
import Category from "./pages/Category";

// Import Footer (optional but recommended)
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/state/:id" element={<StateDetail />} />
            <Route path="/state/:id/:categoryKey" element={<Category />} />
          </Routes>
        </div>

        {/* Footer at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
