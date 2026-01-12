import { Link } from "react-router-dom";
import "../components/css/Home.css";

import { FaTooth, FaShieldAlt, FaHeart, FaClock } from "react-icons/fa";
import { FaAward, FaSmile } from "react-icons/fa";
import { FaStar, FaScrewdriver, FaVial, FaCrown } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <section className="homeHero">
        <div className="homeHeroInner">
          <div className="heroLeft">
            <p className="heroTag">Your Trusted Dental Partner</p>

            <h1 className="heroTitle">
              Your Perfect Smile Starts <br /> Here
            </h1>

            <p className="heroDesc">
              Experience world-class dental care with our expert team. We’re
              committed to making your visit comfortable and your smile
              beautiful.
            </p>

            <div className="heroBtns">
              <Link className="btnPrimary" to="/appointments">
                Book Appointment <span className="btnArrow">›</span>
              </Link>

              <Link className="btnOutline" to="/appointments">
                View Appointments
              </Link>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroClinicCard">
              <div className="heroClinicLogoBg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="homeStats">
        <div className="statsInner">
          <div className="statItem">
            <div className="statNum">10,000+</div>
            <div className="statLabel">Happy Patients</div>
          </div>

          <div className="statItem">
            <div className="statNum">25+</div>
            <div className="statLabel">Years Experience</div>
          </div>

          <div className="statItem">
            <div className="statNum">15+</div>
            <div className="statLabel">Expert Doctors</div>
          </div>

          <div className="statItem">
            <div className="statNum">99%</div>
            <div className="statLabel">Success Rate</div>
          </div>
        </div>
      </section>

      <section className="homeSection">
        <div className="containerX">
          <h2 className="sectionTitle">Our Facilities</h2>
          <p className="sectionSub">
            State-of-the-art equipment and a welcoming environment designed for
            your comfort and care
          </p>

          <div className="facilityGrid">
            <div className="facilityCard">
              <div className="facilityIcon">
                <FaTooth />
              </div>
              <h3>Advanced Technology</h3>
              <p>Latest digital X-rays and 3D imaging for accurate diagnostics.</p>
            </div>

            <div className="facilityCard">
              <div className="facilityIcon">
                <FaShieldAlt />
              </div>
              <h3>Sterilization Standards</h3>
              <p>Hospital-grade sterilization protocols for your safety.</p>
            </div>

            <div className="facilityCard">
              <div className="facilityIcon">
                <FaHeart />
              </div>
              <h3>Comfort Care</h3>
              <p>Relaxing environment with modern amenities.</p>
            </div>

            <div className="facilityCard">
              <div className="facilityIcon">
                <FaClock />
              </div>
              <h3>Emergency Services</h3>
              <p>Support for urgent dental needs during working hours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="homeSection altBg">
        <div className="containerX whyWrap">
          <div className="whyLeft">
            <div className="whyBadge">
              <div className="whyBig">25+</div>
              <div className="whySmall">Years of Excellence</div>
            </div>
          </div>

          <div className="whyRight">
            <h2 className="sectionTitle" style={{ textAlign: "left" }}>
              Why Choose DentalCare?
            </h2>

            <p className="whyText">
              At DentalCare, we combine technology with compassionate care to
              deliver excellent dental services.
            </p>

            <ul className="whyList">
              <li>
                <FaAward className="whyIcon" />
                Award-Winning Team
              </li>
              <li>
                <FaSmile className="whyIcon" />
                Patient-Centered Approach
              </li>
              <li>
                <FaShieldAlt className="whyIcon" />
                Safety First
              </li>
            </ul>

            <Link className="learnMore" to="/appointments">
              View Appointments <span>›</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="homeSection">
        <div className="containerX">
          <h2 className="sectionTitle">Meet Our Expert Doctors</h2>
          <p className="sectionSub">
            Our highly qualified dental professionals are committed to providing
            you with the best care
          </p>

          <div className="doctorGrid">
            <div className="doctorCard">
              <div className="doctorImg">
                <img src="/images/ahmad.jpeg" alt="Dr. Ahmad Labadi" />
              </div>
              <div className="doctorBody">
                <div className="doctorName">Dr. Ahmad Labadi</div>
                <div className="doctorSpec">General Dentistry</div>
                <div className="doctorMeta">15 years experience</div>
              </div>
            </div>

            <div className="doctorCard">
              <div className="doctorImg">
                <img src="/images/hourani.jpeg" alt="Dr. Abdullah Hourani" />
              </div>
              <div className="doctorBody">
                <div className="doctorName">Dr. Abdullah Hourani</div>
                <div className="doctorSpec">Orthodontics</div>
                <div className="doctorMeta">12 years experience</div>
              </div>
            </div>

            <div className="doctorCard">
              <div className="doctorImg">
                <img src="/images/khatib.jpeg" alt="Dr. Omar Khatib" />
              </div>
              <div className="doctorBody">
                <div className="doctorName">Dr. Omar Khatib</div>
                <div className="doctorSpec">Cosmetic Dentistry</div>
                <div className="doctorMeta">10 years experience</div>
              </div>
            </div>

            <div className="doctorCard">
              <div className="doctorImg">
                <img src="/images/omar.jpeg" alt="Dr. Omar Jokhan" />
              </div>
              <div className="doctorBody">
                <div className="doctorName">Dr. Omar Jokhan</div>
                <div className="doctorSpec">Oral Surgery</div>
                <div className="doctorMeta">8 years experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homeSection altBg">
        <div className="containerX">
          <h2 className="sectionTitle">Our Services</h2>
          <p className="sectionSub">
            Comprehensive dental solutions tailored to your unique needs
          </p>

          <div className="serviceGrid">
            <div className="serviceCard">
              <div className="serviceTop">
                <span className="serviceIcon">
                  <FaTooth />
                </span>
                <span className="serviceTime">30 minutes</span>
              </div>
              <h3>General Checkup</h3>
              <p>Comprehensive dental examination and professional cleaning.</p>
            </div>

            <div className="serviceCard">
              <div className="serviceTop">
                <span className="serviceIcon">
                  <FaStar />
                </span>
                <span className="serviceTime">60 minutes</span>
              </div>
              <h3>Teeth Whitening</h3>
              <p>Professional whitening for a brighter, confident smile.</p>
            </div>

            <div className="serviceCard">
              <div className="serviceTop">
                <span className="serviceIcon">
                  <FaScrewdriver />
                </span>
                <span className="serviceTime">90 minutes</span>
              </div>
              <h3>Dental Implants</h3>
              <p>Permanent solution for missing teeth with natural look.</p>
            </div>

            <div className="serviceCard">
              <div className="serviceTop">
                <span className="serviceIcon">
                  <FaSmile />
                </span>
                <span className="serviceTime">45 minutes</span>
              </div>
              <h3>Orthodontic Treatment</h3>
              <p>Braces and aligners to correct teeth alignment.</p>
            </div>

            <div className="serviceCard">
              <div className="serviceTop">
                <span className="serviceIcon">
                  <FaVial />
                </span>
                <span className="serviceTime">60 minutes</span>
              </div>
              <h3>Root Canal</h3>
              <p>Pain-free treatment for infected tooth pulp.</p>
            </div>

            <div className="serviceCard">
              <div className="serviceTop">
                <span className="serviceIcon">
                  <FaCrown />
                </span>
                <span className="serviceTime">60 minutes</span>
              </div>
              <h3>Dental Crown</h3>
              <p>Restore damaged teeth with custom-made crowns.</p>
            </div>
          </div>

          <div className="centerBtn">
            <Link className="btnPrimary" to="/appointments">
              Book Your Appointment <span className="btnArrow">›</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="homeCTA">
        <div className="ctaInner">
          <p className="ctaSmall">Ready to Transform Your Smile?</p>
          <h2 className="ctaTitle">
            Schedule your appointment today and take the first step towards a
            healthier, brighter smile.
          </h2>

          <div className="ctaBtns">
            <Link className="btnPrimary" to="/appointments">
              Book Appointment <span className="btnArrow">›</span>
            </Link>

            <a className="btnOutlineLight" href="tel:+962000000000">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <footer className="homeFooter">
        <div className="footerInner">
          <div className="footerCol">
            <div className="footerBrand">DentalCare</div>
            <p className="footerText">
              Your trusted partner for comprehensive dental care. We’re
              committed to creating beautiful, healthy smiles.
            </p>

            <div className="footerSocial">
              <a className="socialDot" href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a className="socialDot" href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a className="socialDot" href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footerCol">
            <div className="footerTitle">Quick Links</div>
            <Link to="/">Home</Link>
            <Link to="/appointments">Book Appointment</Link>
            <Link to="/my-appointments">My Appointments</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footerCol">
            <div className="footerTitle">Our Services</div>
            <span>General Dentistry</span>
            <span>Cosmetic Dentistry</span>
            <span>Orthodontics</span>
            <span>Oral Surgery</span>
            <span>Emergency Care</span>
          </div>

          <div className="footerCol">
            <div className="footerTitle">Contact Info</div>
            <span>Amman, Jordan</span>
            <span>+962 7X XXX XXXX</span>
            <span>info@abohourani.com</span>
            <span>Sat-Thu: 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2025 DentalCare Clinic. All rights reserved.</span>
          <span className="footerBottomLinks">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
