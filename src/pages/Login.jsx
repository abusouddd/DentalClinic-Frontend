import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/css/Auth.css";
import { FaLock } from "react-icons/fa";

function Login({ setUser }) {
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || data.error || "Login failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      navigate("/");
    } catch {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="authPage">
      <div className="authCard">
        <div className="authIcon">
          <FaLock />
        </div>

        <h1 className="authTitle">Welcome Back</h1>
        <p className="authSubtitle">Sign in to your account</p>

        <form className="authForm" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red", marginTop: 8 }}>{error}</p>}

          <button className="authButton" type="submit">
            Sign In
          </button>
        </form>

        <div className="authFooter">
          <p>
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
          <p>
            <Link to="/admin">Admin Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
