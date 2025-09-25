# <img width="31" height="30" alt="GoBasera Logo" src="https://github.com/user-attachments/assets/5b2b96d0-bb6f-4e03-b9f3-b841bd3cfc8c" /> GoBasera – Announcements App  

[![React](https://img.shields.io/badge/Frontend-React.js-61DBFB?logo=react&logoColor=white)](https://react.dev/)
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/VSCode-0078D7?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
[![NestJS](https://img.shields.io/badge/Backend-NestJS-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)  
[![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![Live Demo](https://img.shields.io/badge/Demo-Live-green?logo=vercel)](https://gobasera-f.vercel.app/)  
[![CI/CD](https://github.com/ompal-singh/GoBasera-Announcements/actions/workflows/ci.yml/badge.svg)](https://github.com/ompal-singh/GoBasera-Announcements/actions)


📢 A simple yet powerful React + NestJS application to manage announcements for GoBasera.
Easily add announcements, mark them as closed, and track timestamps – all with a clean, responsive UI.

# 🌍 Live Demo
  <a href="[https://gobasera-f.vercel.app/](https://gobasera-f.vercel.app/)/" target="_blank">
    <img src="https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=google-chrome&logoColor=white" />
  </a>


---

# ✨ Features

✅ Add announcements with title & optional description
✅ View all announcements in a feed/list view
✅ Mark announcements as closed with one click
✅ Timestamps for creation & closure
✅ Professional UI with GoBasera branding (logo + name)
✅ Responsive design for mobile & desktop

---

# 🛠️ Tech Stack

Frontend: React.js, JavaScript, Tailwind CSS
Backend: NestJS (Node.js)
API: REST API
Database: In-memory (extendable to MongoDB / PostgreSQL)
Styling: Inline CSS (can be migrated to TailwindCSS / styled-components)

---

# 📂 Project Structure

```
GoBasera-Announcements
│
├── frontend/              # React frontend
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   └── index.js       # Entry point
│
├── backend/               # NestJS backend
│   ├── src/
│   │   ├── announcements/
│   │   │   ├── announcements.controller.ts
│   │   │   └── announcements.service.ts
│   │   ├── app.module.ts
│   │   └── main.ts
```

---

# 🔧 Getting Started

## 📌 Prerequisites
```
Node.js >= 18

npm / yarn
```
---

## ▶️ Backend Setup

```
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Start server
npm run start
```

Server runs on: http://localhost:4000

---

## 💻 Frontend Setup

```
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start React app
npm run dev
```

Frontend runs on: http://localhost:5173

---

# 📸 Screenshots

🏠 Dashboard
<img width="1920" height="1200" alt="GoBasera Screenshot" src="https://github.com/user-attachments/assets/bfe72a55-8dea-4f40-9e41-ac44f4997923" />

---

# 💡 Future Improvements

🔍 Search / filter announcements
📅 Sort announcements by date or status
💾 Persistent MongoDB / PostgreSQL storage
🔐 User authentication (admin & general users)
🎨 Switch to Tailwind CSS for scalable design

---

# 📄 License

This project is licensed under the MIT License – feel free to use, modify, and distribute.

---

# 👨‍💻 Maintainer

Ompal Singh (Mohit)
📧 mohitsingh.2626452@gmail.com

🔗 GoBasera Announcements

