import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "../components/css/Admin.css";
import {
  FaUserMd,
  FaFileInvoice,
  FaCalendarAlt,
  FaClock,
  FaPlusCircle,
} from "react-icons/fa";

function AdminAdd({ admin, setAdmin }) {
  const API = "http://localhost:5000";

  const [doctorName, setDoctorName] = useState("");
  const [doctorId, setDoctorId] = useState("");

  const [service, setService] = useState(""); 
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [slots, setSlots] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/doctors`)
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch(() => setDoctors([]));
  }, []);

  const handleDoctorChange = (value) => {
    setDoctorName(value);

    const found = doctors.find((d) => (d.name || d.Name) === value);

    if (found) {
      const id = found.doctorid || found.DoctorID;
      const role = found.role || found.Role;

      setDoctorId(id);
      setService(role);
    } else {
      setDoctorId("");
      setService("");
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!doctorName || !doctorId || !service || !date || !time) {
      alert("Fill all fields.");
      return;
    }

    const savedAdmin = localStorage.getItem("admin");
    if (!savedAdmin) {
      alert("Admin not logged in");
      return;
    }

    const admin = JSON.parse(savedAdmin);
    const adminId = admin.adminid || admin.AdminID;

    if (!adminId) {
      alert("Admin ID not found. Please login again.");
      return;
    }

    try {
      const res = await fetch(`${API}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-id": adminId,
        },
        body: JSON.stringify({
          doctorId,
          service,
          date,
          time,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || data.error || "Failed to create slot");
        return;
      }

      const newSlot = {
        id: data.appointmentid || data.AppointmentID || Date.now(),
        doctor: doctorName,
        specialty: service, 
        service,
        date,
        time,
      };

      setSlots([...slots, newSlot]);

      alert("Slot added (Users will see it on Appointments)");

      setDoctorName("");
      setDoctorId("");
      setService("");
      setDate("");
      setTime("");
    } catch {
      alert("Server error");
    }
  };

  return (
    <AdminLayout active="add" setAdmin={setAdmin}>
      <h2 className="adminPageTitle">Add Appointment Slot</h2>
      <p className="adminPageSub">
        Create new available appointment times for patients to book
      </p>

      <div className="adminGrid">
        <div className="adminGridMain">
          <div className="adminCard adminCardPad">
            <form onSubmit={handleCreate} className="adminForm">
              <div className="adminField">
                <label>
                  <FaUserMd className="adminFieldIcon" /> Select Doctor *
                </label>

                <input
                  value={doctorName}
                  onChange={(e) => handleDoctorChange(e.target.value)}
                  placeholder="Select doctor"
                  list="doctorsList"
                />

                <datalist id="doctorsList">
                  {doctors.map((d) => (
                    <option
                      key={d.doctorid || d.DoctorID}
                      value={d.name || d.Name}
                    />
                  ))}
                </datalist>
              </div>

              <div className="adminField">
                <label>
                  <FaFileInvoice className="adminFieldIcon" /> Service Type *
                </label>

                <input
                  value={service}
                  readOnly
                  placeholder="Auto-filled from doctor role"
                />
              </div>

              <div className="adminField">
                <label>
                  <FaCalendarAlt className="adminFieldIcon" /> Date *
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="adminField">
                <label>
                  <FaClock className="adminFieldIcon" /> Time Slot *
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <button className="adminCreateBtn" type="submit">
                <FaPlusCircle /> Create Appointment Slot
              </button>
            </form>
          </div>
        </div>

        <div className="adminGridSide">
          <div className="adminCard adminCardPad">
            <h4 className="adminRightTitle">Available Doctors</h4>

            <div className="adminDocList">
              {doctors.length > 0 ? (
                doctors.map((d) => (
                  <div className="adminDocItem" key={d.doctorid || d.DoctorID}>
                    <div className="adminDocAvatar">
                      <FaUserMd />
                    </div>
                    <div>
                      <div className="adminDocName">{d.name || d.Name}</div>
                      <div className="adminDocSpec">{d.role || d.Role}</div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No doctors found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminAdd;
