# 🔐 JWT Authentication System

A modern and secure **JWT Authentication System** built with **Node.js**, **Express.js**, **MongoDB**, and **JSON Web Tokens (JWT)**. This project includes a responsive frontend for user registration, login, authentication, and profile management.

---

## 🚀 Features

* 🔑 User Registration (Username, Email & Password)
* 🔒 Secure Password Hashing with **bcrypt**
* 🎫 JWT Authentication
* 👤 Protected Profile Route
* ⏳ JWT Token Expiration
* ⚠️ Proper Error Handling
* 👁️ Password Show/Hide Toggle
* 💾 Auto Login using Local Storage
* 🚪 Logout Functionality
* 🎨 Clean & Responsive UI
* 📱 Mobile-Friendly Design

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* dotenv
* cookie-parser

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Tabler Icons

---

## 📂 Project Structure

```text
Auth-System/
│
├── config/
│   └── db.js                 # MongoDB Connection
│
├── controllers/
│   └── authController.js     # Register, Login & Profile Logic
│
├── middleware/
│   └── authMiddleware.js     # JWT Authentication Middleware
│
├── models/
│   └── User.js               # User Schema
│
├── public/
│   └── index.html            # Frontend
│
├── routes/
│   └── authRoutes.js         # Authentication Routes
│
├── .env                      # Environment Variables
├── .gitignore
├── package.json
└── server.js                 # Application Entry Point
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/auth-system.git

cd auth-system
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Configure Environment Variables

Create a **.env** file in the project root.

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/auth-system

JWT_SECRET=your_secret_key_here

JWT_EXPIRE=7d
```

## 4️⃣ Start the Server

```bash
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

# 📡 API Endpoints

| Method | Endpoint             | Description                | Authentication |
| ------ | -------------------- | -------------------------- | -------------- |
| POST   | `/api/auth/register` | Register a new user        | ❌              |
| POST   | `/api/auth/login`    | Login and receive JWT      | ❌              |
| GET    | `/api/auth/profile`  | Get logged-in user profile | ✅ Bearer Token |

---

# 🔐 Authentication Flow

1. User registers with username, email, and password.
2. Password is hashed using **bcrypt** before storing.
3. User logs in with email and password.
4. Server verifies credentials.
5. JWT Token is generated.
6. Token is stored in Local Storage.
7. Protected routes require a valid Bearer Token.
8. Invalid or expired tokens are rejected.

---

# 🖥️ Frontend Features

### 🔑 Login

* Email
* Password
* Password Visibility Toggle

### 📝 Register

* Username
* Email
* Password

### 👤 Profile

* User Information
* JWT Token Display
* Copy Token Button
* Logout Button

---

# 🧪 API Testing

The project includes a **Bruno Collection** for testing all authentication endpoints.

Simply import the collection into **Bruno API Client** and start testing.

---

# 🌍 Environment Variables

| Variable     | Description               |
| ------------ | ------------------------- |
| `PORT`       | Server Port               |
| `MONGO_URI`  | MongoDB Connection String |
| `JWT_SECRET` | Secret Key for JWT        |
| `JWT_EXPIRE` | JWT Expiration Time       |

---

# 🛡️ Security Features

* Password Hashing with bcrypt
* JWT-Based Authentication
* Protected Routes
* Token Expiration
* Environment Variables
* Secure Error Responses

---

# 📸 Preview

> Add screenshots of your Login, Register, and Profile pages here.

```text
📷 screenshots/login.png
📷 screenshots/register.png
📷 screenshots/profile.png
```

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Faizan Khalid**

Made with ❤️ using **Node.js**, **Express.js**, **MongoDB**, and **JWT**.

---

## ⭐ Support

If you found this project helpful, please consider giving it a **⭐ Star** on GitHub.

It helps others discover the project and motivates future improvements.
