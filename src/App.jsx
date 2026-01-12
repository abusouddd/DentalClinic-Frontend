import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import MyAppointments from "./pages/MyAppointments";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import AdminManage from "./pages/AdminManage";
import AdminAdd from "./pages/AdminAdd";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // start logged out (demo)

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
const adminLoggedIn = localStorage.getItem("admin_logged_in") === "true";

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

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
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<Navigate to="/" replace />} />

        <Route path="/admin" element={<AdminLogin />} />

<Route
  path="/admin/manage"
  element={adminLoggedIn ? <AdminManage /> : <Navigate to="/admin" replace />}
/>

<Route
  path="/admin/add"
  element={adminLoggedIn ? <AdminAdd /> : <Navigate to="/admin" replace />}
/>

      </Routes>
    </>
  );
}
