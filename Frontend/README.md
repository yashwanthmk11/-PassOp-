# 🔐 Password Manager — Frontend (React + Vite)

A modern, secure, and responsive **Password Manager frontend** built with **React** and **Vite**. This application allows users to create, view, edit, copy, and delete credentials through a clean UI while communicating with a dedicated backend API for persistent storage.

> ⚠️ **Project Status:** In Development

---

## 🌐 Live Links

* **Frontend:** [FRONTEND_LIVE_URL]
* **Backend API:** [BACKEND_LIVE_URL]

*(Replace the placeholders with actual deployment URLs)*

---

## ✨ Key Features

* 🔑 Create, update, and delete saved credentials
* 📋 One-click copy for usernames and passwords
* 🔄 Real-time UI updates with smooth UX
* 🔔 User-friendly toast notifications (`react-hot-toast`)
* 🧩 Clean component-based architecture
* 🌐 Backend API integration for persistent storage

---

## 🛠 Tech Stack

| Category    | Technology                 |
| ----------- | -------------------------- |
| Framework   | React                      |
| Build Tool  | Vite                       |
| UI Feedback | react-hot-toast            |
| Utilities   | uuid                       |
| Styling     | CSS / Utility-first styles |

---

## 📁 Project Structure

```text
frontend/
├── public/            # Static assets
├── src/               # Application source code
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── services/      # API interaction logic
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
├── .env               # Environment variables (local)
├── package.json       # Scripts & dependencies
└── vite.config.js     # Vite configuration
```

---

## 🚀 Local Development

### Prerequisites

* Node.js **16+**
* npm (or yarn)

### Setup & Run

```bash
npm install
npm run dev
```

The application will start with Hot Module Replacement (HMR) enabled.

---

## ⚙️ Environment Configuration

The frontend communicates with the backend using an environment variable:

```env
VITE_API_URL=http://localhost:3000/
```

📌 Notes:

* Environment variables **must** be prefixed with `VITE_` to be accessible in the app.
* Create a `.env` file at the project root for local development.

---

## 📦 Available Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Generate production build        |
| `npm run preview` | Preview production build locally |

---

## 🚢 Deployment

1. Build the project:

   ```bash
   npm run build
   ```
2. Deploy the generated `dist/` folder using any static hosting service:

   * Vercel
   * Netlify
   * AWS S3 + CloudFront
   * Surge

🔐 Ensure:

* Backend API is publicly accessible
* CORS is properly configured on the backend
* HTTPS is enabled in production

---

## 🔒 Security Considerations

* ❌ Do not store secrets, tokens, or encryption keys in the frontend
* 🔐 Always use **HTTPS** in production
* 🧠 Handle sensitive logic only on the backend

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes with clear messages
4. Open a pull request describing your updates

---

## 📩 Support

For backend-related concerns, please refer to the **Backend README**.

For frontend issues or suggestions, feel free to open an issue or contact the maintainer.

---

### 🌟 Future Enhancements (Planned)

* Authentication & user accounts
* Password strength meter
* Encryption at rest
* Search & filter credentials
* Dark mode support

---

Built with ❤️ using React + Vite
