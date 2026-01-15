# 🦷 Dental Clinic Frontend Application

This project is the **frontend** of a Dental Clinic Appointment Management System.  
It is built using **React** and connects to a **Node.js + Express backend API** to manage users, doctors, appointments, and bookings.

The application provides separate interfaces for **users** and **admins**.

---

## 📌 Features

### 👤 User Features
- User signup and login
- View available appointment slots
- Book appointments
- View “My Appointments”
- Update user profile

### 🛠️ Admin Features
- Admin login
- Create appointment slots
- View all bookings
- Approve or reject bookings
- Manage clinic schedule

---

## 🛠️ Technologies Used

- React (Vite)
- React Router
- JavaScript (ES6)
- CSS
- Fetch API
- Axios (Contact page)
- Local Storage

---

## 📁 Project Structure

- DentalClinic/
- │
- ├── src/
- │ ├── components/
- │ │ ├── Navbar.jsx
- │ │ └── css/
- │ │ └── Navbar.css
- │ │
- │ ├── pages/
- │ │ ├── Home.jsx
- │ │ ├── Appointments.jsx
- │ │ ├── MyAppointments.jsx
- │ │ ├── ContactUs.jsx
- │ │ ├── Login.jsx
- │ │ ├── Signup.jsx
- │ │ ├── Profile.jsx
- │ │ ├── AdminLogin.jsx
- │ │ ├── AdminManage.jsx
- │ │ └── AdminAdd.jsx
- │ │
- │ ├── App.jsx
- │ └── main.jsx
- │
- ├── package.json
- └── vite.config.js


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone 
cd DentalClinic

2️⃣ Install Dependencies
npm install

3️⃣ Backend Connection (IMPORTANT)
Make sure the backend server is running first.
Default backend URL used in the project:
http://localhost:5000
If your backend runs on a different port, update the API URL in the frontend files (for example in Login.jsx):
const API = "http://localhost:5000";

4️⃣ Run the Frontend
npm run dev
The app will run on:
http://localhost:5173

🔐 Authentication Logic

User login information is stored in localStorage
Admin login information is stored separately in localStorage

Protected routes:
/my-appointments
/profile
/admin/manage
/admin/add

Users are redirected automatically if not logged in

🔄 Application Flow

User or admin logs in
Navbar updates based on login state

Users can:
View appointments
Book slots
Manage profile

Admins can:
Create appointment slots
Manage bookings
Approve or reject appointments

⚠️ Important Notes

Backend must be running for the frontend to work
This project is for educational purposes
No JWT authentication is used (simple localStorage-based auth)
Admin routes depend on backend header authorization

🚀 Future Improvements

Add JWT authentication
Improve form validation
Add loading and error states
Improve UI/UX design
Role-based route protection

👨‍🎓 Author

This frontend was developed as part of alhussein technical university project for a Dental Clinic Management System.

📄 License

This project is for academic and educational use only.