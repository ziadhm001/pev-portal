import React, { useRef } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from "./pages/public/SignUp";
import Login from "./pages/public/Login";
import Home from "./pages/public/Home";
import ProgramPage from "./pages/public/ProgramPage";
import SupportPage from "./pages/public/SupportPage";
import AddEditProfile from "./pages/private/AddEditProfile";
import ApplicationForm1 from "./pages/private/ApplicationForm1";
import ApplicationForm2 from "./pages/private/ApplicationForm2";
import ApplicationForm from "./pages/private/ApplicationForm";
import ContactUs from "./pages/public/ContactUs";
import Partner from "./pages/public/Partner";
import Events from "./pages/public/Events";
import AboutUs from "./pages/public/AboutUs";
import CoreProgram from "./pages/public/CoreProgram";
import SupportProgram from "./pages/public/SupportProgram";
import Careers from "./pages/public/Careers";

function App() {
  const ref = useRef(null);
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/program-overview" element={<ProgramPage />} />
          <Route path="/program-core" element={<CoreProgram />} />
          <Route path="/post-program-support" element={<SupportProgram />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/events" element={<Events />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/careers" element={<Careers />} />
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
            element={<ApplicationForm2 ref={ref} />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
