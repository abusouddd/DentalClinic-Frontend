import { useState } from "react";
import "./css/BookingModal.css";

function BookingModal({ isOpen, onClose, slot, onConfirm }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen || !slot) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !phone || !email) {
      alert("Please fill Full Name, Phone, and Email.");
      return;
    }

    onConfirm({
      fullName,
      phone,
      email,
      notes,
    });

    // reset + close
    setFullName("");
    setPhone("");
    setEmail("");
    setNotes("");
    onClose();
  };

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalBox" onClick={(e) => e.stopPropagation()}>
        <h2 className="modalTitle">Book Appointment</h2>

        <div className="modalSlotInfo">
          <div className="slotName">{slot.doctor}</div>
          <div className="slotSpec">{slot.specialty}</div>
          <div className="slotSmall">
            {slot.date} at {slot.time}
          </div>
          <div className="slotSmall">{slot.service}</div>
        </div>

        <form onSubmit={handleSubmit} className="modalForm">
          <label>Full Name *</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label>Phone Number *</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Email *</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Additional Notes</label>
          <textarea
            rows="3"
            placeholder="Any special requirements or concerns?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <div className="modalActions">
            <button type="button" className="btnGhost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btnPrimary">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
