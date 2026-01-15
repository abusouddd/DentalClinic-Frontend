import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/css/Auth.css";
import { FaShieldAlt } from "react-icons/fa";

function AdminLogin({ setAdmin }) {
  const API = "http://localhost:5000";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter admin credentials");
      return;
    }

    try {
      const res = await fetch(`${API}/api/auth/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Invalid admin credentials");
        return;
      }

      localStorage.setItem("admin", JSON.stringify(data));
      setAdmin(data);
      navigate("/admin/manage");
    } catch {
      alert("Server error");
    }
  };

  return (
    <div className="authPage">
      <div className="authCard">
        <div className="authIcon">
          <FaShieldAlt />
        </div>

        <h1 className="authTitle">Admin Portal</h1>
        <p className="authSubtitle">Access the admin dashboard</p>

        <form className="authForm" onSubmit={handleSubmit}>
          <label>Admin Email</label>
          <input
            type="email"
            placeholder="admin@clinic.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="authButton" type="submit">
            Sign In as Admin
          </button>
        </form>

        <div className="authFooter">
          <p>
            <Link to="/login">← Back to User Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
