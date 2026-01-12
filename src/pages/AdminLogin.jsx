import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/css/Auth.css";
import { FaShieldAlt } from "react-icons/fa";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter admin credentials");
      return;
    }

    localStorage.setItem("admin_logged_in", "true");
    navigate("/admin/manage");
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
