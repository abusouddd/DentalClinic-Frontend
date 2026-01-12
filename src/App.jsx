import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import MyAppointments from "./pages/MyAppointments";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
