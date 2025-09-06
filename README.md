
 <img width="128" height="128" alt="1754336440472-removebg-preview" src="https://github.com/user-attachments/assets/410a1b3d-24d1-48fa-88e8-87c0a02c419e" /> GoBasera 
📢Announcements App

🚀 Live Demo: [GoBasera Announcementl](https://gobasera-f.vercel.app/)

A simple React + NestJS application to manage announcements for GoBasera. Users can add announcements, mark them as closed, and view timestamps for creation and closure, with a responsive design optimized for all devices.

🛠️ Technologies Used

Frontend: React.js, JavaScript, CSS

Backend: NestJS, Node.js

API: REST API for announcements

Database: In-memory (for simplicity, can be extended to MongoDB / PostgreSQL)

Styling: Inline CSS (with professional form and card design)

✨ Features

Add announcements with title and optional description.

View all announcements in a feed/list.

Mark announcements as closed with a button.

Timestamps:

Created At – when the announcement was added

Closed At – when the announcement was marked as closed

Professional UI with GoBasera branding (logo + company name).

Responsive design for better usability.

📂 Project Structure
Frontend (React)
src/
  App.jsx          # Main React component with form and announcement feed
  index.js         # Entry point

Backend (NestJS)
src/
  announcements/
    announcements.controller.ts  # Handles API routes
    announcements.service.ts     # Logic for managing announcements
  app.module.ts                  # Root module
  main.ts                        # Entry point, enables CORS

🚀 Getting Started
Prerequisites

Node.js >= 18

npm or yarn

Backend

Navigate to backend folder:

cd backend


Install dependencies:

npm install


Start server:

npm run start


Backend will run on: http://localhost:4000

Frontend

Navigate to frontend folder:

cd frontend


Install dependencies:

npm install


Start React app:

npm run dev


Open in browser: http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/announcements	Fetch all announcements
POST	/announcements	Create a new announcement
PATCH	/announcements/:id	Update status (active / closed)
📸 Screenshots

<img width="1920" height="1200" alt="Screenshot 2025-09-07 021850" src="https://github.com/user-attachments/assets/bfe72a55-8dea-4f40-9e41-ac44f4997923" />

📝 Notes

Currently using in-memory storage for announcements (data resets on server restart).

Can be extended to MongoDB / PostgreSQL for persistent storage.

Styling is inline CSS, can be migrated to Tailwind CSS or styled-components for scalability.

💡 Future Improvements

Search / filter announcements

Sort announcements by date or status

Persistent database integration

User authentication (admin & general users)


📄 License

This project is licensed under the MIT License – feel free to use and modify.

👨‍💻 Maintainer

Ompal Singh (Mohit) 📧 [mohitsingh.2626452@gmail.com] 🔗 https://gobasera-f.vercel.app/
