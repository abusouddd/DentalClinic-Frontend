import { useState } from "react";
import MyAppointmentList from "../components/MyAppointmentList";
import ConfirmCancelModal from "../components/ConfirmCancelModal";
import AppointmentDetailsModal from "../components/AppointmentDetailsModal";
import "../components/css/MyAppointments.css";

function MyAppointments() {
  const [myAppointments, setMyAppointments] = useState([
    {
      doctor: "Dr. Abdullah Hourani",
      service: "General Checkup",
      date: "2025-12-16",
      time: "09:00",
      status: "Confirmed",
    },
    {
      doctor: "Dr. Abdullah Hourani",
      service: "Braces Consultation",
      date: "2025-12-17",
      time: "11:00",
      status: "Pending",
    },
    {
      doctor: "Dr. Abdullah Hourani",
      service: "Teeth Cleaning",
      date: "2025-12-19",
      time: "10:30",
      status: "Confirmed",
    },
  ]);

  const [cancelOpen, setCancelOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedAppt, setSelectedAppt] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

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

  const confirmCancel = () => {
    const updated = myAppointments.filter((_, i) => i !== selectedIndex);
    setMyAppointments(updated);
    closeAll();
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
