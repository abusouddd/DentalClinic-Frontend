import { useEffect, useState } from "react";
import MyAppointmentList from "../components/MyAppointmentList";
import ConfirmCancelModal from "../components/ConfirmCancelModal";
import AppointmentDetailsModal from "../components/AppointmentDetailsModal";
import "../components/css/MyAppointments.css";

function MyAppointments() {
  const API = import.meta.env.VITE_API_URL;

  const [myAppointments, setMyAppointments] = useState([]);

  const [cancelOpen, setCancelOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedAppt, setSelectedAppt] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) return;

    const user = JSON.parse(savedUser);
    const userId = user.userid;

    fetch(`${API}/api/bookings/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        const mapped = (data || []).map((b) => ({
          id: b.bookedappointmentid,
          doctor: b.doctorname,
          service: b.service,
          date: b.date,
          time: b.time,
          status: b.status,
          phone: b.patientphone,
          email: b.patientemail,
          notes: b.notes || "",
        }));
        setMyAppointments(mapped);
      })
      .catch(() => setMyAppointments([]));
  }, []);

  const openCancel = (appt, idx) => {
    setSelectedAppt(appt);
    setSelectedIndex(idx);
    setCancelOpen(true);
  };

  const openDetails = (appt) => {
    setSelectedAppt(appt);
    setDetailsOpen(true);
  };

  const closeAll = () => {
    setCancelOpen(false);
    setDetailsOpen(false);
    setSelectedAppt(null);
    setSelectedIndex(null);
  };

  const confirmCancel = async () => {
    if (!selectedAppt) return;

    try {
      const res = await fetch(`${API}/api/bookings/${selectedAppt.id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || data.error || "Cancel failed");
        return;
      }

      setMyAppointments((prev) => prev.filter((a) => a.id !== selectedAppt.id));

      alert("Appointment cancelled ");
    } catch {
      alert("Server error");
    }
  };

  return (
    <div className="myap-page">
      <div className="myap-wrapper">
        <h2 className="myap-title">My Appointments</h2>
        <p className="myap-subtitle">
          Manage your booked appointments and view details
        </p>

        <MyAppointmentList
          appointments={myAppointments}
          onCancel={openCancel}
          onView={openDetails}
        />
      </div>

      <ConfirmCancelModal
        isOpen={cancelOpen}
        onClose={closeAll}
        onConfirm={confirmCancel}
        appointment={selectedAppt}
      />

      <AppointmentDetailsModal
        isOpen={detailsOpen}
        onClose={closeAll}
        appointment={selectedAppt}
      />
    </div>
  );
}

export default MyAppointments;
