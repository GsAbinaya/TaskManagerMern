TaskManager MERN

TaskManager MERN is a full-stack task management application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to efficiently create, track, and manage tasks with a focus on productivity and organization.

Key Features

User Authentication: Sign up, login, and secure sessions with JWT.

Task Management: Create, update, delete tasks, and set priorities (Low, Medium, High).

Task Status Tracking: Separate views for Pending and Completed tasks.

Filtering and Sorting: Filter tasks by due date or priority.

Profile Management: Update personal information and change passwords securely.

Responsive UI: Built with React and styled for desktop and mobile.

Notifications: Uses react-toastify for success/error alerts.

Tech Stack

Frontend: React, React Router, Tailwind CSS, Axios, Lucide icons, React Toastify

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JWT-based token authentication

Project Structure

frontend/ — React application (Dashboard, Pending, Complete, Profile pages)

backend/ — Express server with API routes for tasks and users

config/ — MongoDB connection

Routes/ — User and task routes

Controller/ — Business logic for handling requests

Highlights

Implements protected routes for authenticated users.

Fully functional CRUD operations for tasks.

Separate pages for task overview, pending tasks, and completed tasks.

Handles error reporting gracefully and displays real-time feedback to users.
