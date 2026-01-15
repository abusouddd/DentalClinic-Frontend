import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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

function AppRoutes({ user, setUser, admin, setAdmin }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar user={user} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments user={user} />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login setUser={setUser} />}
        />

        <Route
          path="/signup"
          element={user ? <Navigate to="/profile" replace /> : <Signup />}
        />

        <Route
          path="/my-appointments"
          element={user ? <MyAppointments user={user} /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/profile"
          element={user ? <Profile setUser={setUser} /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/admin"
          element={
            admin ? <Navigate to="/admin/manage" replace /> : <AdminLogin setAdmin={setAdmin} />
          }
        />

        <Route
          path="/admin/manage"
          element={
            admin ? (
              <AdminManage admin={admin} setAdmin={setAdmin} />
            ) : (
              <Navigate to="/admin" replace />
            )
          }
        />

        <Route
          path="/admin/add"
          element={
            admin ? (
              <AdminAdd admin={admin} setAdmin={setAdmin} />
            ) : (
              <Navigate to="/admin" replace />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedAdmin = localStorage.getItem("admin");

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedAdmin) setAdmin(JSON.parse(savedAdmin));
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes
        user={user}
        setUser={setUser}
        admin={admin}
        setAdmin={setAdmin}
      />
    </BrowserRouter>
  );
}
