# 📝 Blog Management System – Backend

A backend application for managing blogs with secure user authentication.
Built using **Node.js**, **Express**, and **MongoDB**, this project supports user registration, login, and blog-related APIs with JWT-based authentication.

---

## 🚀 Features

* User Registration
* User Login
* Password Encryption using **bcrypt**
* JWT-based Authentication
* MongoDB database integration
* RESTful API structure
* Clean and modular folder structure

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Local)
* **ODM:** Mongoose
* **Authentication:** JWT (JSON Web Token)
* **Security:** bcrypt
* **Environment Variables:** dotenv

---

## 📁 Project Structure

```
blog-management-system/
│
├── controllers/
│   └── authController.js
│
├── models/
│   ├── User.js
│   └── Post.js
│
├── routes/
│   ├── authRoutes.js
│   └── postRoutes.js
│
├── config/
│   └── db_mongo.js
│
├── .env
├── .gitignore
├── server.js
├── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```env
MONGO_URI=mongodb://127.0.0.1:27017/blogDB
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the server

```bash
npm start
```

Server will run at:

```
http://localhost:3000
```

---

## 🔐 API Endpoints

### Authentication

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login user        |

---

## 🧪 Testing

APIs were tested using **Thunder Client (VS Code Extension)**.

---

## 📌 Future Enhancements

* Blog CRUD operations
* Role-based access (Admin/User)
* Image upload for blogs
* Pagination & search
* Frontend integration (React)

---

## 👩‍💻 Author

**Simarjeet Kaur**
B.Tech CSE, Graphic Era Deemed to be University

---

## ⭐ Acknowledgements

This project was developed for learning backend development, authentication, and database integration using modern web technologies.
