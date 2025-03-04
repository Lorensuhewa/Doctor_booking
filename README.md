# 📅 Doctor Appointment Booking System

## 🏥 Introduction
The **Doctor Appointment Booking System** is a web-based application that allows patients to book, manage, and track their medical appointments online. The system provides a user-friendly interface for patients and doctors while ensuring seamless scheduling and secure authentication.

## 🚀 Features
### 🔹 Patient Features
- User authentication (Sign Up / Login)
- Browse doctors by specialty
- Book and manage appointments
- View appointment history
- Profile management

### 🔹 Doctor Features
- Manage available time slots
- View upcoming appointments
- Accept or decline appointments

### 🔹 Admin Features
- Manage users (patients & doctors)
- Monitor appointment statistics
- Generate reports

### 🔹 Additional Features
- Secure authentication using JWT
- Email notifications for appointment confirmations
- Responsive design for mobile & desktop

## 🛠️ Tech Stack
### 🌐 Frontend
- **React.js** - UI development
- **Tailwind CSS** - Styling
- **React Router** - Navigation management

### 🔗 Backend
- **Node.js & Express.js** - Server-side API
- **MongoDB & Mongoose** - Database
- **JWT (JSON Web Token)** - Authentication
- **Bcrypt.js** - Password hashing

## ⚙️ Installation & Setup
### 🔹 Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### 🔹 Clone the Repository
```sh
git clone https://github.com/Lorensuhewa/Doctor_booking.git
cd doctor-appointment-system
```

### 🔹 Backend Setup
```sh
cd backend
npm install
```
- Create a `.env` file and add the following:
```env
MONGO_URI=mongodb+srv://sanakalorensuhewa:Doctor%401234@doctor.b6dfb.mongodb.net/mydatabase?retryWrites=true&w=majority
JWT_SECRET=Doctor@1234
PORT=5000
```
- Start the backend server:
```sh
npm start
```

### 🔹 Frontend Setup
```sh
cd frontend
npm install
npm start
```

## 🚀 Usage
- Open your browser and go to `http://localhost:3000`
- Register a new account and log in
- Browse available doctors and book an appointment

## 🛡️ Security Measures
- Passwords are securely hashed using **bcrypt.js**
- Authentication is handled using **JWT tokens**
- API endpoints are protected with authentication middleware

## 🤝 Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Added new feature'`)
4. Push to branch (`git push origin feature-name`)
5. Open a Pull Request

## 📜 License
This project is licensed under the **MIT License**.

## 📩 Contact
For any inquiries, feel free to contact me:
- **Email:** sanakalorensuhewa@gmail.com
- **GitHub:** Sanaka Lorensuhewa(https://github.com/Lorensuhewa)
