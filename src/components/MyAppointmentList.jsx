import "../components/css/MyAppointments.css";
import {
  FaUserMd,
  FaTooth,
  FaCalendarAlt,
  FaClock,
  FaEye,
  FaTimes,
} from "react-icons/fa";

function MyAppointmentList({ appointments, onCancel, onView }) {
  if (appointments.length === 0) {
    return (
      <div className="myap-empty">
        <p>No booked appointments.</p>
        <span>Go to Appointments page to book one.</span>
      </div>
    );
  }

  return (
    <div className="myap-grid">
      {appointments.map((appt, idx) => {
        const badgeClass =
          appt.status === "Pending"
            ? "myap-badge pending"
            : appt.status === "Rejected"
            ? "myap-badge cancelled"
            : "myap-badge confirmed";

        const disabled = appt.status === "Rejected";

        return (
          <div className="myap-card" key={appt.id || idx}>
            <div className="myap-head">
              <div>
                <strong className="myap-doctor">
                  <FaUserMd className="myap-ico" />
                  {appt.doctor}
                </strong>

                <div className="myap-service">
                  <FaTooth className="myap-ico" />
                  {appt.service}
                </div>
              </div>

              <span className={badgeClass}>{appt.status}</span>
            </div>

            <div className="myap-info">
              <div>
                <FaCalendarAlt className="myap-ico" />
                {appt.date}
              </div>
              <div>
                <FaClock className="myap-ico" />
                {appt.time}
              </div>
            </div>

            <div className="myap-actions">
              <button
                className="myap-cancel"
                onClick={() => onCancel(appt, idx)}
                disabled={disabled}
                style={disabled ? { opacity: 0.5, cursor: "not-allowed" } : undefined}
              >
                <FaTimes />
                Cancel
              </button>

              <button className="myap-view" onClick={() => onView(appt)}>
                <FaEye />
                View Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyAppointmentList;
