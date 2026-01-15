import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "../components/css/Admin.css";
import {
  FaTimesCircle,
  FaClock,
  FaCheckCircle,
  FaCalendarAlt,
  FaClock as FaClockTime,
  FaUserMd,
  FaPhoneAlt,
  FaEnvelope,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

function AdminManage({ admin, setAdmin }) {
  const API = "http://localhost:5000";
  const [bookings, setBookings] = useState([]);

  const getAdminId = () => {
    const savedAdmin = localStorage.getItem("admin");
    if (!savedAdmin) return null;
    const a = JSON.parse(savedAdmin);
    return a.adminid || a.AdminID;
  };

  useEffect(() => {
    const adminId = getAdminId();
    if (!adminId) return;

    fetch(`${API}/api/bookings`, {
      headers: { "x-admin-id": adminId },
    })
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((b) => ({
          id: b.bookedappointmentid,
          status: b.status,
          doctor: b.doctorname,
          specialty: b.role,
          service: b.service,
          date: b.date,
          time: b.time,
          fullName: b.patientname,
          phone: b.patientphone,
          email: b.patientemail,
          notes: b.notes || "",
        }));
        setBookings(mapped);
      })
      .catch(() => setBookings([]));
  }, []);

  const approve = async (id) => {
    const adminId = getAdminId();
    if (!adminId) return;

    try {
      const res = await fetch(`${API}/api/bookings/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-id": adminId,
        },
        body: JSON.stringify({ status: "Approved" }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || data.error || "Approve failed");
        return;
      }

      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: "Approved" } : b))
      );
    } catch {
      alert("Server error");
    }
  };

  const reject = async (id) => {
    const adminId = getAdminId();
    if (!adminId) return;

    try {
      const res = await fetch(`${API}/api/bookings/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-id": adminId,
        },
        body: JSON.stringify({ status: "Rejected" }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || data.error || "Reject failed");
        return;
      }

      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: "Rejected" } : b))
      );
    } catch {
      alert("Server error");
    }
  };

  const remove = async (id) => {
    const adminId = getAdminId();
    if (!adminId) return;

    try {
      const res = await fetch(`${API}/api/bookings/${id}`, {
        method: "DELETE",
        headers: { "x-admin-id": adminId },
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || data.error || "Delete failed");
        return;
      }

      setBookings((prev) => prev.filter((b) => b.id !== id));
    } catch {
      alert("Server error");
    }
  };

  return (
    <AdminLayout active="manage" setAdmin={setAdmin}>
      <h2 className="adminPageTitle">Manage Appointments</h2>
      <p className="adminPageSub">View and manage all appointment requests</p>

      {bookings.length === 0 ? (
        <div className="adminCard adminCardPad">
          <strong>No bookings yet.</strong>
          <div style={{ color: "#6b7280", marginTop: 6 }}>
            Users need to book from the Appointments page first.
          </div>
        </div>
      ) : (
        <div className="adminCards">
          {bookings.map((b) => (
            <div className="adminCard" key={b.id}>
              <div className="adminCardTop">
                <div className="adminNameRow">
                  <div className="adminPatientName">{b.fullName}</div>

                  {b.status === "Rejected" && (
                    <span className="adminBadge cancelled">
                      <FaTimesCircle className="badgeIcon" /> Cancelled
                    </span>
                  )}

                  {b.status === "Pending" && (
                    <span className="adminBadge pending">
                      <FaClock className="badgeIcon" /> Pending
                    </span>
                  )}

                  {b.status === "Approved" && (
                    <span className="adminBadge approved">
                      <FaCheckCircle className="badgeIcon" /> Approved
                    </span>
                  )}
                </div>

                <div className="adminDoctorLine">
                  {b.doctor} {b.specialty ? `- ${b.specialty}` : ""}
                </div>
              </div>

              <div className="adminInfoGrid">
                <div className="adminInfoCol">
                  <div className="adminInfoItem">
                    <FaCalendarAlt className="adminInfoIcon" />
                    <span>{b.date}</span>
                  </div>
                  <div className="adminInfoItem">
                    <FaClockTime className="adminInfoIcon" />
                    <span>{b.time}</span>
                  </div>
                  <div className="adminInfoItem">
                    <FaUserMd className="adminInfoIcon" />
                    <span>{b.service}</span>
                  </div>
                </div>

                <div className="adminInfoCol">
                  <div className="adminInfoItem">
                    <FaPhoneAlt className="adminInfoIcon" />
                    <span>{b.phone}</span>
                  </div>
                  <div className="adminInfoItem">
                    <FaEnvelope className="adminInfoIcon" />
                    <span>{b.email}</span>
                  </div>
                </div>
              </div>

              {b.notes && (
                <div className="adminNotes">
                  <strong>Notes:</strong> {b.notes}
                </div>
              )}

              <div className="adminDivider" />

              <div className="adminActions">
                {b.status === "Pending" ? (
                  <>
                    <button className="adminBtn adminBtnSuccess" onClick={() => approve(b.id)}>
                      <FaCheck /> Approve
                    </button>

                    <button className="adminBtn adminBtnDanger" onClick={() => reject(b.id)}>
                      <FaTimes /> Reject
                    </button>

                    <button className="adminBtn adminBtnGhost" onClick={() => remove(b.id)}>
                      <FaTrash /> Delete
                    </button>
                  </>
                ) : (
                  <button className="adminBtn adminBtnGhost" onClick={() => remove(b.id)}>
                    <FaTrash /> Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}

export default AdminManage;
