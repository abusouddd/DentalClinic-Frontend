import { useState } from "react";
import BookingModal from "../components/BookingModal";
import "../components/css/Appointments.css";
import { FaCalendarAlt, FaClock, FaUserMd } from "react-icons/fa";

function Appointments() {
  const dummySlots = [
    {
      id: "1",
      doctor: "Dr. Ahmad",
      specialty: "Dentistry",
      service: "General Checkup",
      date: "2026-01-20",
      time: "10:00 AM",
    },
    {
      id: "2",
      doctor: "Dr. Abdullah Hourani",
      specialty: "Orthodontics",
      service: "Braces Consultation",
      date: "2026-01-21",
      time: "01:30 PM",
    },
    {
      id: "3",
      doctor: "Dr. Omar",
      specialty: "Cosmetic Dentistry",
      service: "Teeth Whitening",
      date: "2026-01-22",
      time: "05:00 PM",
    },
  ];

  const [slots] = useState(dummySlots);
  const [bookings, setBookings] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleOpenModal = (slot) => {
    setSelectedSlot(slot);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedSlot(null);
  };

  const handleConfirmBooking = (patientData) => {
    const newBooking = {
      id: Date.now(),
      status: "Pending",
      slotId: selectedSlot.id,

      doctor: selectedSlot.doctor,
      specialty: selectedSlot.specialty,
      service: selectedSlot.service,
      date: selectedSlot.date,
      time: selectedSlot.time,

      fullName: patientData.fullName,
      phone: patientData.phone,
      email: patientData.email,
      notes: patientData.notes,
    };

    setBookings([...bookings, newBooking]);
    alert("Booking sent ✅ (Pending)");
  };

  return (
    <div className="appointmentsPage">
      <div className="appointmentsWrap">
        <h1 className="appointmentsTitle">Available Appointments</h1>
        <p className="appointmentsSub">
          Choose an appointment slot that works best for you.
        </p>

        {slots.length === 0 ? (
          <div className="appointmentsEmpty">
            No available slots yet. Please check later.
          </div>
        ) : (
          <div className="appointmentsList">
            {slots.map((s) => (
              <div className="slotRow" key={s.id}>
                <div className="slotLeft">
                  <div className="slotDoctor">{s.doctor}</div>
                  <div className="slotSpec">{s.specialty}</div>

                  <div className="slotMeta">
                    <span>
                      <FaCalendarAlt className="slotIcon" />
                      {s.date}
                    </span>

                    <span>
                      <FaClock className="slotIcon" />
                      {s.time}
                    </span>

                    <span>
                      <FaUserMd className="slotIcon" />
                      {s.service}
                    </span>
                  </div>
                </div>

                <div className="slotRight">
                  <button className="slotBtn" onClick={() => handleOpenModal(s)}>
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BookingModal
        isOpen={open}
        onClose={handleCloseModal}
        slot={selectedSlot}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
}

export default Appointments;
