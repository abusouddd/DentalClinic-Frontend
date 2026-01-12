import { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "../components/css/Admin.css";
import {
  FaUserMd,
  FaFileInvoice,
  FaCalendarAlt,
  FaClock,
  FaPlusCircle,
} from "react-icons/fa";

function AdminAdd() {
  const [doctor, setDoctor] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [slots, setSlots] = useState([]);

  const handleCreate = (e) => {
    e.preventDefault();

    if (!doctor || !service || !date || !time) {
      alert("Fill all fields.");
      return;
    }

    const newSlot = {
      id: Date.now(),
      doctor,
      specialty: "General Dentistry",
      service,
      date,
      time,
    };

    setSlots([...slots, newSlot]);

    alert("Slot added ✅ (Users will see it on Appointments)");

    setDoctor("");
    setService("");
    setDate("");
    setTime("");
  };

  return (
    <AdminLayout active="add">
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
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  placeholder="Dr. Abdullah Hourani"
                />
              </div>

              <div className="adminField">
                <label>
                  <FaFileInvoice className="adminFieldIcon" /> Service Type *
                </label>
                <input
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="General Checkup"
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
              <div className="adminDocItem">
                <div className="adminDocAvatar">
                  <FaUserMd />
                </div>
                <div>
                  <div className="adminDocName">Dr. Abdullah Hourani</div>
                  <div className="adminDocSpec">General Dentistry</div>
                </div>
              </div>

              <div className="adminDocItem">
                <div className="adminDocAvatar">
                  <FaUserMd />
                </div>
                <div>
                  <div className="adminDocName">Dr. Ahmad Labadi</div>
                  <div className="adminDocSpec">Orthodontics</div>
                </div>
              </div>

              <div className="adminDocItem">
                <div className="adminDocAvatar">
                  <FaUserMd />
                </div>
                <div>
                  <div className="adminDocName">Dr. Omar Khatib</div>
                  <div className="adminDocSpec">Cosmetic Dentistry</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminAdd;
