import "./css/AppointmentDetailsModal.css";

function AppointmentDetailsModal({ isOpen, onClose, appointment }) {
  if (!isOpen || !appointment) return null;

  return (
    <div className="admOverlay" onClick={onClose}>
      <div className="admBox" onClick={(e) => e.stopPropagation()}>
        <div className="admHead">
          <h3 className="admTitle">Appointment Details</h3>
          <button className="admX" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="admCard">
          <div className="admRow">
            <span className="admLabel">Doctor</span>
            <span className="admValue">{appointment.doctor}</span>
          </div>

          <div className="admRow">
            <span className="admLabel">Service</span>
            <span className="admValue">{appointment.service}</span>
          </div>

          <div className="admRow">
            <span className="admLabel">Date</span>
            <span className="admValue">{appointment.date}</span>
          </div>

          <div className="admRow">
            <span className="admLabel">Time</span>
            <span className="admValue">{appointment.time}</span>
          </div>

          <div className="admRow">
            <span className="admLabel">Status</span>
            <span
              className={`admBadge ${
                appointment.status === "Pending"
                  ? "pending"
                  : appointment.status === "Rejected"
                  ? "cancelled"
                  : "confirmed"
              }`}
            >
              {appointment.status}
            </span>
          </div>
        </div>

        <div className="admActions">
          <button className="admBtnPrimary" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDetailsModal;
