import "./css/ConfirmCancelModal.css";

function ConfirmCancelModal({ isOpen, onClose, onConfirm, appointment }) {
  if (!isOpen || !appointment) return null;

  return (
    <div className="ccmOverlay" onClick={onClose}>
      <div className="ccmBox" onClick={(e) => e.stopPropagation()}>
        <h3 className="ccmTitle">Cancel Appointment?</h3>

        <p className="ccmText">
          Are you sure you want to cancel this appointment?
        </p>

        <div className="ccmCard">
          <div className="ccmDoctor">{appointment.doctor}</div>
          <div className="ccmService">{appointment.service}</div>
          <div className="ccmMeta">
            <span>{appointment.date}</span>
            <span>{appointment.time}</span>
            <span className="ccmStatus">{appointment.status}</span>
          </div>
        </div>

        <div className="ccmActions">
          <button className="ccmBtnGhost" onClick={onClose}>
            No, Keep It
          </button>
          <button
            className="ccmBtnDanger"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCancelModal;
