import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./pages/public/SignUp";
import Login from "./pages/public/Login";
import Home from "./pages/public/Home";
import SupportPage from "./pages/public/SupportPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
