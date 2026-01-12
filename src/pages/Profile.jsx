import { useState } from "react";
import "../components/css/Profile.css";

function Profile({ setIsLoggedIn }) {
  const [fullName, setFullName] = useState("Nour");
  const [email, setEmail] = useState("nour@example.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated (demo)");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="profilePageBs py-5">
      <div className="container" style={{ maxWidth: 900 }}>
        <h2 className="fw-bold mb-1">My Profile</h2>
        <p className="text-secondary mb-4">
          Manage your account settings and personal information
        </p>

        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <h5 className="fw-bold mb-3">Profile Information</h5>

            <form onSubmit={handleSave}>
              <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input
                  className="form-control"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email Address</label>
                <input
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>

              <div className="mt-4 mb-2 fw-bold text-secondary">
                Change Password (optional)
              </div>

              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label fw-bold">Current Password</label>
                  <input
                    className="form-control"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    type="password"
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-bold">New Password</label>
                  <input
                    className="form-control"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-bold">Confirm New Password</label>
                  <input
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                  />
                </div>
              </div>

              <div className="row g-2 mt-4">
                <div className="col-md-6">
                  <button type="submit" className="btn btn-primary w-100 fw-bold">
                    Save Changes
                  </button>
                </div>

                <div className="col-md-6">
                  <button
                    type="button"
                    className="btn btn-outline-danger w-100 fw-bold"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
