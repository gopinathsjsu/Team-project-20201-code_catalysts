# BookTable – Cloud-Hosted Restaurant Reservation System

## Project Overview

BookTable is a full-stack, cloud-hosted restaurant reservation platform designed to streamline table bookings, restaurant management, and administrative oversight. The system is scalable, secure, and supports role-based access for customers, restaurant managers, and system administrators.

This project was developed as part of an academic curriculum, following Agile methodologies and deployed on AWS infrastructure.

---

## 🚀 Features

### 👥 Role-Based Interfaces
- **Customer**: Browse, search, and reserve tables; write reviews; manage bookings.
- **Restaurant Manager**: Control restaurant info, manage reservations, respond to reviews.
- **Admin**: Approve listings, moderate reviews, manage users and system settings.

### 🌐 Cloud Deployment
- Deployed on **AWS Elastic Beanstalk** with **Auto Scaling Group** and **Load Balancer**.
- Backend connected to **Amazon RDS (MySQL)** for persistent storage.
- Monitoring via **Amazon CloudWatch**.

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

## 📐 System Architecture

- **3-tier architecture**: Frontend (React) ↔ Backend (Express API) ↔ Database (MySQL)
- **Modular Components**: Authentication, Reservations, Reviews, User Management
- **API-Driven**: RESTful endpoints documented and tested

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

---

## 👨‍💻 Team Members

- **Sanjushree Golla** – Frontend Developer (React, UI/UX)
- **Chanukya Vejandla** – Backend Developer (API Design, Authentication)
- **Harsha Vardhan Badithaboina** – Deployment & DevOps (AWS, CI/CD)
- **Jayanth Yarlagadda** – Project Manager & Database Designer (ERD, Agile Coordination)

---

## 📦 Setup Instructions

### Prerequisites
- Node.js >= 18
- MySQL Database
- AWS Account

### Local Setup

```bash
# Clone repository
git clone https://github.com/gopinathsjsu/Team-project-20201-code_catalysts.git
cd project_directory_path

# Install dependencies
npm install

#To start Backend
cd server
npm install
node index.js

#To start Frontend
cd..

# Configure environment variables (.env)
cp .env.example .env

# Start development server
npm run dev
