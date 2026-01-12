import { NavLink, useNavigate } from "react-router-dom";
import "./css/Admin.css";
import { FaCalendarAlt, FaPlusCircle, FaSignOutAlt } from "react-icons/fa";

function AdminLayout({ children }) {
  const navigate = useNavigate();

  const handleAdminLogout = () => {
    localStorage.removeItem("admin_logged_in");
    navigate("/admin");
  };

  return (
    <div className="adminShell">
      <header className="adminTopbar">
        <div className="adminBrand">
          <div className="adminBrandIcon">
            <FaCalendarAlt />
          </div>
          <div>
            <div className="adminBrandTitle">Dental Admin</div>
            <div className="adminBrandSub">Welcome, Admin</div>
          </div>
        </div>

        <div className="adminTopActions">
          <button className="adminLinkBtn" onClick={handleAdminLogout}>
            <FaSignOutAlt className="adminTopIcon" />
            Logout
          </button>
        </div>
      </header>

      <div className="adminBody">
        <aside className="adminSidebar">
          <NavLink
            to="/admin/manage"
            className={({ isActive }) =>
              isActive ? "adminSideItem active" : "adminSideItem"
            }
          >
            <FaCalendarAlt className="adminSideIcon" />
            <span>Manage Appointments</span>
          </NavLink>

          <NavLink
            to="/admin/add"
            className={({ isActive }) =>
              isActive ? "adminSideItem active" : "adminSideItem"
            }
          >
            <FaPlusCircle className="adminSideIcon" />
            <span>Add Appointment</span>
          </NavLink>
        </aside>

        <main className="adminContent">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
