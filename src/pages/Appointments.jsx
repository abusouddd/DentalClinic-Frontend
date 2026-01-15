import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import "../components/css/Appointments.css";
import { FaCalendarAlt, FaClock, FaUserMd } from "react-icons/fa";

function Appointments({ user }) {
  const API = "http://localhost:5000";
  const navigate = useNavigate();

  const [slots, setSlots] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/appointments/available`)
      .then((res) => res.json())
      .then((data) => {
        const mapped = (data || []).map((a) => ({
          id: a.appointmentid,
          doctor: a.doctorname,
          specialty: a.role,
          service: a.service,
          date: a.date,
          time: a.time,
        }));
        setSlots(mapped);
      })
      .catch(() => setSlots([]));
  }, []);

  const handleOpenModal = (slot) => {
    if (!user) {
      alert("You must login first to book an appointment.");
      navigate("/login");
      return;
    }

    setSelectedSlot(slot);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedSlot(null);
  };

  const handleConfirmBooking = async (patientData) => {
    if (!selectedSlot) return;

    try {
      const res = await fetch(`${API}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          appointmentId: selectedSlot.id,
          userId: user.userid,
          patientName: patientData.fullName,
          patientPhone: patientData.phone,
          patientEmail: patientData.email,
          service: selectedSlot.service,
          notes: patientData.notes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || data.error || "Booking failed");
        return;
      }

      setSlots((prev) => prev.filter((s) => s.id !== selectedSlot.id));

      const newBooking = {
        id: data.bookedappointmentid || Date.now(),
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

      setBookings((prev) => [...prev, newBooking]);
      alert("Booking sent (Pending)");
    } catch {
      alert("Server error");
    }
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
