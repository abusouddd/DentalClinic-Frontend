import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import MyAppointments from "./pages/MyAppointments";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // demo

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <Profile setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
