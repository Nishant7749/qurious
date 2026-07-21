# 🚀 Qurious

> Qurious is a full-stack MERN quiz platform that transforms learning into an interactive experience by enabling users to create, publish, and play engaging quizzes through a modern, responsive interface.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Node.js](https://img.shields.io/badge/Node.js-20-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)

---

## 📖 Overview

**Qurious** is a full-stack quiz creation and learning platform built with the **MERN stack** that enables users to create, manage, discover, and play interactive quizzes. The application provides an intuitive interface for designing quizzes with multiple-choice questions while offering a seamless experience for participants to attempt quizzes and view their results.

The platform features secure user authentication, allowing users to create and manage their own quizzes through protected routes. Quiz creators can add quiz details, build questions with multiple options, preview their work, and publish quizzes for others to explore. Users can browse available quizzes, play them in an interactive interface, track their scores, and manage their own collection of created quizzes.

Built with a scalable client-server architecture, Qurious uses RESTful APIs and MongoDB for efficient data management, ensuring a responsive and maintainable application. The project demonstrates full-stack development principles, including authentication, CRUD operations, state management, API integration, and responsive UI design.


---

## ✨ Features

* Secure user authentication with JWT
* Create, edit, preview, publish, and delete quizzes
* Multi-step quiz creation workflow
* Interactive quiz-playing experience
* Automatic score calculation and result display
* Explore publicly available quizzes
* Personal dashboard to manage created quizzes
* Responsive and modern user interface
* RESTful API architecture
* MongoDB database integration
* Protected routes for authenticated users
* Form validation and error handling
* Modular MERN stack architecture
* Scalable and maintainable codebase

---

## 📸 Screenshots

### Home Page

<p align="center">
<img width="1331" height="572" alt="qurious" src="https://github.com/user-attachments/assets/f779d9fa-056c-412a-98b7-6e5fcde077b3" />
</p>

---

## 🛠 Tech Stack

### Frontend

* React.js
* CSS3
* JavaScript (ES6+)
* Tailwind CSS
* Context API
* React Router
* Axios
* Framer Motion
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* RESTful APIs
* CORS
* Environment Variables (dotenv)


### Deployment

* Vercel
* Render
* MongoDB Atlas


### Development Tools

* VS Code
* Git
* GitHub
* Postman
* Figma

---

## 🏗 Project Structure

```
project-name/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Nishant7749/qurious.git
```

Move into the project

```bash
cd qurious
```

Install frontend dependencies

```bash
cd client
npm install
```

Install backend dependencies

```bash
cd ../server
npm install
```

---

## ▶ Running the Project

Backend

```bash
cd server
npm run dev
```

Frontend

```bash
cd client
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/quizzes     | Fetch all items   |
| GET    | /api/quiz/:id | Fetch single item |
| POST   | /api/create-quiz     | Create item       |
| PUT    | /api/quiz/:id | Update item       |
| DELETE | /api/quiz/:id | Delete item       |

---

## 🗄 Database Schema

Example

```
User
│
├── name
├── email
├── password
└── createdAt

Quiz
│
├── title
├── description
├── creator name
├── questions + options
├── difficulty
├── language
├── category
└── createdAt
```

---

## 🔄 Application Workflow

```text
                  ┌────────────────────┐
                  │      User          │
                  └─────────┬──────────┘
                            │
                            ▼
                   Login / Register
                            │
                            ▼
                  JWT Authentication
                            │
            ┌───────────────┴───────────────┐
            │                               │
            ▼                               ▼
      Create Quiz                     Explore Quizzes
            │                               │
            ▼                               ▼
     Fill Quiz Details               Select a Quiz
            │                               │
            ▼                               ▼
      Add Questions                  Play the Quiz
            │                               │
            ▼                               ▼
      Preview & Publish             Submit Answers
            │                               │
            ▼                               ▼
   Quiz Stored in MongoDB          Score Calculation
            │                               │
            └───────────────┬───────────────┘
                            ▼
                    View Results / My Quizzes
```

---

## 🔐 Authentication Workflow

```text
                 User
                   │
                   ▼
          Register / Login
                   │
                   ▼
         Form Validation
                   │
                   ▼
      Express Authentication API
                   │
                   ▼
      Verify Credentials (MongoDB)
                   │
          ┌────────┴────────┐
          │                 │
          ▼                 ▼
      Invalid User      Valid User
          │                 │
          ▼                 ▼
     Error Response     Generate JWT
                            │
                            ▼
                 Store Token in Local Storage
                            │
                            ▼
               Access Protected Routes
                            │
                            ▼
      Create • Edit • Delete • My Quizzes
```

---

## 🧪 Future Improvements

* OAuth Login
* Admin Panel
* Notifications
* Multi-language Support
* AI Features
* PWA Support
* Docker Deployment
* Unit & Integration Tests

---

## 🤝 Contributing

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Nishant Chaudhary**

* GitHub: https://github.com/Nishant7749
* LinkedIn: https://linkedin.com/in/nishant-chaudhary77/
* Portfolio: https://nishant-chaudhary.vercel.app
* Email: nishant7749@gmail.com

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub. It helps others discover the project and motivates future improvements.
