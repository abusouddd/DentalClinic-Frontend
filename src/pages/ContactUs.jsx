import { useState, useEffect } from "react";
import axios from "axios";
import "../components/css/ContactUs.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  useEffect(() => {
    console.log("ContactUs page loaded");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !subject || !message) {
      setStatus({ type: "error", text: "Please fill all fields." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", text: "" });

    const data = {
      service_id: "service_ry9dut4",
      template_id: "template_xdyk6x2",
      user_id: "w3fE_GtX3x-ftpWuU",
      template_params: {
        full_name: fullName,
        from_email: email,
        subject: subject,
        message: message,
      },
    };

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then(() => {
        setStatus({ type: "success", text: "Message sent successfully ✅" });

        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setStatus({
          type: "error",
          text: "Failed to send message ❌ Try again.",
        });

        setLoading(false);
      });
  };

  return (
    <div className="cu-page">
      <div className="cu-wrapper">
        <h2 className="cu-title">Contact Us</h2>
        <p className="cu-subtitle">
          Get in touch with us. We’d love to hear from you.
        </p>

        <div className="cu-grid">
          {/* Left card */}
          <div className="cu-card cu-info">
            <h3 className="cu-card-title">Clinic Information</h3>

            <div className="cu-item">
              <div className="cu-icon"><FaMapMarkerAlt /></div>
              <div>
                <div className="cu-item-title">Address</div>
                <div className="cu-item-text">Amman, Jordan (add exact location)</div>
              </div>
            </div>

            <div className="cu-map">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps?q=Amman%20Jordan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="cu-item">
              <div className="cu-icon"><FaPhoneAlt /></div>
              <div>
                <div className="cu-item-title">Phone</div>
                <div className="cu-item-text">+962 7X XXX XXXX</div>
              </div>
            </div>

            <div className="cu-item">
              <div className="cu-icon"><FaEnvelope /></div>
              <div>
                <div className="cu-item-title">Email</div>
                <div className="cu-item-text">info@abohourani.com</div>
              </div>
            </div>

            <div className="cu-item">
              <div className="cu-icon"><FaClock /></div>
              <div>
                <div className="cu-item-title">Working Hours</div>
                <div className="cu-item-text">Sat - Thu: 9:00 AM - 6:00 PM</div>
              </div>
            </div>

            <div className="cu-note">
              For urgent cases, please call us during working hours.
            </div>
          </div>

          {/* Right card */}
          <div className="cu-card cu-formCard">
            <h3 className="cu-card-title">Send us a message</h3>

            {status.text && (
              <div className={`cu-alert ${status.type}`}>
                {status.text}
              </div>
            )}

            <form className="cu-form" onSubmit={handleSubmit}>
              <div className="cu-field">
                <label>Full Name</label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="cu-field">
                <label>Email Address</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="your@email.com"
                />
              </div>

              <div className="cu-field">
                <label>Subject</label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="Message subject"
                />
              </div>

              <div className="cu-field">
                <label>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  placeholder="Write your message..."
                />
              </div>

              <button className="cu-btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p className="cu-small">We usually reply within 24 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
