import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/css/Auth.css";
import { FaLock } from "react-icons/fa";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill all fields");
      return;
    }

    // demo login
    setIsLoggedIn(true);
    navigate("/");
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

          <button className="authButton" type="submit">
            Sign In
          </button>
        </form>

        <div className="authFooter">
          <p>
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>

          {/* removed /admin link to avoid missing route errors */}
        </div>
      </div>
    </div>
  );
}

export default Login;
