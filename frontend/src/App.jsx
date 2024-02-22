import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./pages/public/SignUp";
import Login from "./pages/public/Login";
import Home from "./pages/public/Home";
import SupportPage from "./pages/public/SupportPage";
import AddEditProfile from "./pages/private/AddEditProfile";
import ApplicationForm1 from "./pages/private/ApplicationForm1";
import ApplicationForm2 from "./pages/private/ApplicationForm2";
import ApplicationForm from "./pages/private/ApplicationForm";
import ContactUs from "./pages/public/ContactUs";

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
          <Route path="/user/profile" element={<AddEditProfile />} />
          <Route path="/user/application-form" element={<ApplicationForm />} />
          <Route
            path="/user/application-form1"
            element={<ApplicationForm1 />}
          />
          <Route
            path="/user/application-form2"
            element={<ApplicationForm2 />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
