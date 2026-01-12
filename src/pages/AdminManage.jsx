import { useState } from "react";
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

function AdminManage() {
  const [bookings, setBookings] = useState([
    {
      id: "1",
      status: "Pending",
      doctor: "Dr. Abdullah Hourani",
      specialty: "General Dentistry",
      service: "General Checkup",
      date: "2025-12-16",
      time: "09:00",
      fullName: "Nour Abusoud",
      phone: "+962 7X XXX XXXX",
      email: "nour@email.com",
      notes: "Please confirm if it’s okay to come 10 minutes early.",
    },
    {
      id: "2",
      status: "Approved",
      doctor: "Dr. Ahmad Labadi",
      specialty: "Orthodontics",
      service: "Braces Consultation",
      date: "2025-12-17",
      time: "11:00",
      fullName: "Ahmad Ali",
      phone: "+962 7X XXX XXXX",
      email: "ahmad@email.com",
      notes: "",
    },
    {
      id: "3",
      status: "Cancelled",
      doctor: "Dr. Omar Khatib",
      specialty: "Cosmetic Dentistry",
      service: "Teeth Cleaning",
      date: "2025-12-19",
      time: "10:30",
      fullName: "Sara Mohammad",
      phone: "+962 7X XXX XXXX",
      email: "sara@email.com",
      notes: "Sensitive teeth.",
    },
  ]);

  const approve = (id) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: "Approved" } : b
    );
    setBookings(updated);
  };

  const reject = (id) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: "Cancelled" } : b
    );
    setBookings(updated);
  };

  const remove = (id) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
  };

  return (
    <AdminLayout active="manage">
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

                  {b.status === "Cancelled" && (
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
                    <button
                      className="adminBtn adminBtnSuccess"
                      onClick={() => approve(b.id)}
                    >
                      <FaCheck /> Approve
                    </button>

                    <button
                      className="adminBtn adminBtnDanger"
                      onClick={() => reject(b.id)}
                    >
                      <FaTimes /> Reject
                    </button>

                    <button
                      className="adminBtn adminBtnGhost"
                      onClick={() => remove(b.id)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </>
                ) : (
                  <button
                    className="adminBtn adminBtnGhost"
                    onClick={() => remove(b.id)}
                  >
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
