# BookTable – Cloud-Hosted Restaurant Reservation System

## Project Overview

BookTable is a full-stack, cloud-hosted restaurant reservation platform designed to streamline table bookings, restaurant management, and administrative oversight. The system is scalable, secure, and supports role-based access for customers, restaurant managers, and system administrators.

This project was developed as part of an academic curriculum, following Agile methodologies and deployed on AWS infrastructure.

---
🚀 TEAM NAME : Code Catalysts

👥 Team Members & Contributions

## 👨‍💻 Team Members

- **Sanjushree Golla** – Backend Developer (API Design, Authentication)
- **Chanukya Vejandla** – Deployment & DevOps (AWS, CI/CD)
- **Harsha Vardhan Badithaboina** – Frontend Developer (React, UI/UX)
- **Jayanth Yarlagadda** – Frontend and Database Designer (React, Mysql)
  
## Contributions

**Sanjushree Golla** – Designed and implemented secure RESTful APIs for user authentication, reservations, and admin workflows. Integrated JWT for access control and bcrypt for password hashing. Coordinated backend logic and input validation. Contributed to the system architecture and database schema.

**Chanukya Vejandla** – Led AWS deployment using Elastic Beanstalk with EC2 Auto Scaling and RDS for MySQL. Set up secure environments with HTTPS and monitored system health using CloudWatch. Ensured high availability and fault tolerance.

**Harsha Vardhan Badithaboina** – Developed the frontend using React.js. Built responsive UI components for all user roles and integrated Google Maps and real-time booking status. Improved accessibility and cross-browser compatibility.

**Jayanth Yarlagadda** – Designed the MySQL database schema and maintained data integrity. Created UI wireframes and documentation. Managed task boards, weekly scrums, and developed architecture and deployment diagrams.

## 🚀 Features

### 👥 Role-Based Interfaces
- **Customer**: Browse, search, and reserve tables; write reviews; manage bookings.
- **Restaurant Manager**: Control restaurant info, manage reservations, respond to reviews.
- **Admin**: Approve listings, moderate reviews, manage users and system settings.

### 🌐 Cloud Deployment
- **Frontend**: Served through CloudFront CDN
- **Backend**: Running on EC2 instances
- **Database**: AWS RDS MySQL instance
- **Load Balancing**: AWS Elastic Load Balancer

### 🔐 Security & Performance
- JWT-based authentication and secure session management.
- Regular backups, audit logs, and GDPR-compliant user data handling.
- Optimized for scalability (1,000+ concurrent users supported).

---

## 🛠️ Tech Stack

| Layer         | Technology           |
|--------------|----------------------|
| Frontend     | React.js, CSS, Styled Components |
| Backend      | Node.js, Express.js  |
| Database     | MySQL (Amazon RDS)   |
| Deployment   | AWS EC2, S3 |
| Monitoring   | AWS CloudWatch    |
| Authentication | JWT  |

---

### 💡 Design Decisions
## 🔐 Authentication & Security
🛡️ JWT for stateless, role-based access control (Customer, Manager, Admin)

🔑 bcrypt for password hashing

🌐 Enforced HTTPS, CORS policies, and rate limiting on sensitive routes

## 🌍 External Integrations
📍 Integrated Google Maps Places API for location services and embedding maps

☁️ Used AWS S3 for storing and serving restaurant images

✉️ Nodemailer for booking confirmation emails/SMS

## 🚀 Deployment
🖥️ Frontend: React.js single-page application hosted on AWS S3 & CloudFront

🧠 Backend: Node.js with Express APIs running on an auto-scaling group of EC2 instances

🗄️ Database: MySQL, managed using AWS RDS

📁 File Storage: AWS S3 for restaurant image uploads

## 🖥️ User Experience
🧩 Web-first, responsive layouts for desktop and mobile

🔄 Streamlined booking flow (search → select time slot → confirm)

⏱️ Real-time availability checks to avoid double-bookings

## 🧱 Design Patterns
### 🧭 MVC Pattern
Organizes the app into Models, Views, and Controllers for clean separation of concerns

### ♻️ Singleton Pattern
Ensures single instances of shared resources like DB connections and email utilities

### 🏭 Factory Pattern
Dynamically creates objects like JWT tokens and filenames based on parameters

### 👀 Observer Pattern
Sends notifications (e.g., emails) when reservation statuses or events change

### 🧰 Builder Pattern
Constructs SQL queries dynamically based on request data

### 🧠 Strategy Pattern
Defines flexible strategies for file handling like storage destinations and filenames

---

## 📐 System Architecture

- **3-tier architecture**: Frontend (React) ↔ Backend (Express API) ↔ Database (MySQL)
- **Modular Components**: Authentication, Reservations, Reviews, User Management
- **API-Driven**: RESTful endpoints documented and tested

![image](https://github.com/user-attachments/assets/95187efe-3ce3-4eed-80b6-b25f2a1dfce5)

## Component Diagram

![image](https://github.com/user-attachments/assets/2c7a7f5a-c089-4b06-898c-a0223f451539)

## Deployment Diagram (UML)

![image](https://github.com/user-attachments/assets/2cfdd31f-396f-4278-9771-e99475068276)

## ER Diagram

![image](https://github.com/user-attachments/assets/fb4e5af3-dd7a-4412-8b72-c340d2d99f18)

---

## 🧪 Key Modules

- **User Authentication**: Secure login/register, password management
- **Restaurant Search**: Filters by location, cuisine, and ratings
- **Reservation System**: Real-time booking, confirmation, and cancellations
- **Review System**: Verified customer reviews with moderation tools
- **Admin Panel**: Approve listings, manage users, view analytics

---

## 📊 Agile Project Management

- Followed **Scrum Framework** with:
  - Sprint Planning and Reviews
  - Daily Standups
  - Weekly Scrum Reports
- Tools: GitHub
- Continuous Integration/Testing integrated in development flow

📊 Team Progress
- Project Journal: [code_catalysts_project_journal.pdf](https://github.com/gopinathsjsu/Team-project-20201-code_catalysts/blob/main/documentation/code_catalysts_project_journal.pdf) 
- Burndown Chart: [Burndown_Chart.pdf](https://github.com/gopinathsjsu/Team-project-20201-code_catalysts/blob/main/documentation/Burndown_Chart.pdf) 
- Scrum Sheet: [SCRUM_SHEET.xlsx](https://github.com/gopinathsjsu/Team-project-20201-code_catalysts/blob/main/documentation/SCRUM_SHEET.xlsx) 
- Task Board: [Task_board.xlsx](https://github.com/gopinathsjsu/Team-project-20201-code_catalysts/blob/main/documentation/Task_board.xlsx) 


Google Sheet links:
- Sprint sheet and Task Board: https://docs.google.com/spreadsheets/d/19llil24bXxkkQ9kxDbmTfY8rllQxSErUM3GAfFTOp7c/edit?usp=sharing
- Burndown Chart: https://docs.google.com/document/d/1T8ebPMvMR_i4Hgn8QFiI1tmCeKMMcX3MhrxIDDxT7BQ/edit?usp=sharing
---
## 🛠️ Project Setup
📦 Setup Instructions

### Prerequisites
- Node.js >= 18
- MySQL Database
- AWS Account

### Local Setup

```bash
# Clone the repository
git clone https://github.com/gopinathsjsu/Team-project-20201-code_catalysts.git
cd project_directory_path

# Backend setup
cd backend
npm install
cp .env.example .env
# Add DB credentials & JWT secret
npm run dev

# Frontend setup
cd ../frontend
npm install
npm start
