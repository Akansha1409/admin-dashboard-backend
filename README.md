# 🛠️ Admin Dashboard Backend

A powerful and secure backend system built with **Node.js**, **Express**, and **MongoDB**, designed for managing users, roles, and projects in an admin dashboard. This backend includes authentication, role-based access control, and a RESTful API with Swagger documentation.

---

## 🚀 Features

- ✅ JWT-based authentication
- ✅ Role-based access control (Admin, Moderator, User)
- ✅ Secure password hashing with bcrypt
- ✅ Password reset via email (Gmail + App Password)
- ✅ CRUD operations for Users and Projects
- ✅ Pagination & Filtering
- ✅ Audit logging for user activity
- ✅ Swagger UI for API docs
- ✅ Rate limiting middleware
- ✅ Centralized error handling

---

## 🧰 Tech Stack

- Node.js (v14+)
- Express.js
- MongoDB + Mongoose
- JWT
- Bcrypt
- Nodemailer
- Swagger (OpenAPI)
- Morgan (Logging)
- Dotenv
- CORS
- Docker (optional)

---

## 🧪 Setup Instructions

### 🔧 Prerequisites

- Node.js v14 or higher
- MongoDB Atlas account
- Gmail App Password (for email features)

### 🛠️ Installation

```bash
git clone https://github.com/your-username/admin-dashboard-backend.git
cd admin-dashboard-backend
npm install

🌐 Configure .env
env
Copy code
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/admin-dashboard
JWT_SECRET=yourSuperSecret
EMAIL_USER=yourEmail@gmail.com
EMAIL_PASS=yourAppPassword

🚀 Run the Server
bash
Copy code
npm run dev
Visit:

http://localhost:5000/api/users → Users route

http://localhost:5000/api/projects → Projects route

http://localhost:5000/api-docs → Swagger documentation

📦 Docker Setup 
bash
Copy code
docker-compose up -d
📄 API Documentation
Access Swagger UI at:
👉 http://localhost:5000/api-docs
