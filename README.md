# <img width="31" height="30" alt="GoBasera Logo" src="https://github.com/user-attachments/assets/5b2b96d0-bb6f-4e03-b9f3-b841bd3cfc8c" /> GoBasera – Announcements App
<p align="center"> <a href="https://react.dev/"><img src="https://img.shields.io/badge/Frontend-React.js-61DBFB?logo=react&logoColor=white&style=for-the-badge" /></a> <a href="https://nestjs.com/"><img src="https://img.shields.io/badge/Backend-NestJS-E0234E?logo=nestjs&logoColor=white&style=for-the-badge" /></a> <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Runtime-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge" /></a> <a href="https://github.com/OmpalSingh01/gobasera-f/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" /></a> <a href="https://gobasera-f.vercel.app/"><img src="https://img.shields.io/badge/Demo-Live-brightgreen?logo=vercel&style=for-the-badge" /></a>  </p> <p align="center"> 📢 A simple yet powerful <b>React + NestJS</b> application to manage announcements for <b>GoBasera</b>. Easily add announcements, mark them as closed, and track timestamps – all with a clean, responsive UI. </p>

---

# 🌍 Live Demo
<p align="center"> <a href="https://gobasera-f.vercel.app/" target="_blank"> <img src="https://img.shields.io/badge/🚀 View_Live-Demo-brightgreen?style=for-the-badge&logo=google-chrome&logoColor=white" /> </a> </p>

---

# ✨ Features

- 📝 Add announcements with **title & description**  
- 📃 View announcements in a **feed/list view**  
- ✅ Mark announcements as **closed** with one click  
- ⏱️ **Automatic timestamps**:
  - `createdAt` → when announcement is added  
  - `closedAt` → when announcement is closed  
- ❤️ 👍 👎 **Reactions support** (like, dislike, heart) with optimistic UI updates  
- 💬 **Add comments** to each announcement  
- 🎨 **Professional UI** with GoBasera branding  
- 📱 **Responsive design** for mobile and desktop  
- 🌐 **CORS-ready** for multiple frontend deployments 

---

# 🛠️ Tech Stack

| Layer        | Technology                                              |
| ------------ | ------------------------------------------------------- |
| **Frontend** | React.js, JavaScript, Tailwind CSS                      |
| **Backend**  | NestJS (Node.js)                                        |
| **API**      | REST API                                                |
| **Database** | In-memory (extendable → MongoDB / PostgreSQL)           |
| **Styling**  | Inline CSS (scalable → TailwindCSS / styled-components) |

---

#📂 Project Structure

```
GoBasera-Announcements
│
├── frontend/ # React frontend
│ ├── src/
│ │ ├── App.jsx # Main React component
│ │ └── index.js # Entry point
│
├── backend/ # NestJS backend
│ ├── src/
│ │ ├── announcements/
│ │ │ ├── announcements.controller.ts
│ │ │ └── announcements.service.ts
│ │ ├── comments/
│ │ │ ├── comments.controller.ts
│ │ │ └── comments.service.ts
│ │ ├── reactions/
│ │ │ ├── reactions.controller.ts
│ │ │ └── reactions.service.ts
│ │ ├── app.module.ts
│ │ └── main.ts
```

---

# 🔧 Getting Started

## 📌 Prerequisites

```
Node.js >= 18

npm / yarn
```

## ▶️ Backend Setup
```
cd backend
npm install
npm run start
```

Server runs on 👉 http://localhost:4000

## 💻 Frontend Setup
```
cd frontend
npm install
npm run dev
```
Frontend runs on 👉 http://localhost:5173

---

📸 Screenshots
🏠 Dashboard
<img width="1920" height="1200" alt="GoBasera Screenshot" src="https://github.com/user-attachments/assets/bfe72a55-8dea-4f40-9e41-ac44f4997923" />

🏠 Dashboard 2.O
<img width="1920" height="1200" alt="Gobasera2.O" src="https://github.com/user-attachments/assets/3da87dc1-c900-480a-a453-2bf33da18164" />
---


# 💡 Future Improvements

🔍 Search / filter announcements

📅 Sort by date or status

💾 Persistent MongoDB / PostgreSQL storage

🔐 User authentication (Admin & Users)

🎨 Migrate to Tailwind CSS for scalable design

---

# 🤝 Contributing

Contributions are welcome! 🎉
```
Fork the repo

Create your feature branch → git checkout -b feature/new-feature

Commit changes → git commit -m 'Add new feature'

Push to branch → git push origin feature/new-feature

Open a Pull Request
```

---

# 📄 License

This project is licensed under the MIT License – you are free to use, modify, and distribute.

# 👨‍💻 Maintainer

Ompal Singh (Mohit)
📧 mohitsingh.2626452@gmail.com

🔗 GoBasera Announcements
