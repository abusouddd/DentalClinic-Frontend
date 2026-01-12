import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import MyAppointments from "./pages/MyAppointments";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

import AdminLogin from "./pages/AdminLogin";
import AdminManage from "./pages/AdminManage";
import AdminAdd from "./pages/AdminAdd";

function AppRoutes({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  const adminLoggedIn = localStorage.getItem("admin_logged_in") === "true";

  return (
    <>
      {!isAdminRoute && <Navbar isLoggedIn={isLoggedIn} />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/appointments" element={<Appointments isLoggedIn={isLoggedIn} />} />

        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />

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

        <Route path="/admin" element={<AdminLogin />} />

        <Route
          path="/admin/manage"
          element={adminLoggedIn ? <AdminManage /> : <Navigate to="/admin" replace />}
        />

        <Route
          path="/admin/add"
          element={adminLoggedIn ? <AdminAdd /> : <Navigate to="/admin" replace />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </BrowserRouter>
  );
}
