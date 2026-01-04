# 🔐 PassOp

**PassOp** is a modern, privacy-first password manager built with **React** and **Vite**, designed to make credential operations fast, minimal, and secure. It provides a clean, glassmorphic UI for creating, managing, copying, and deleting passwords while communicating with a backend API for persistent storage.

> *Operate your passwords. Securely.*

---

## 🌐 Live Links

* **Frontend:** (https://passop-tau-lake.vercel.app/)
* **Backend API:**(https://passop-l716.onrender.com)


---

## ✨ Key Features

* 🔐 Create, edit, and delete credentials
* 📋 One-click copy with secure toast feedback
* 🧠 Password strength indicator (Weak / Medium / Strong)
* 🎨 Glassmorphism-based modern UI
* 🔔 Real-time notifications using `react-hot-toast`
* 🌐 Backend API integration for persistent storage
* 🧩 Clean, component-driven React architecture

---

## 🧠 Design Philosophy

PassOp is built on one simple idea:

> **Security should feel calm, not complex.**

The interface minimizes cognitive load, avoids visual clutter, and uses subtle motion and feedback to make password operations feel safe and effortless.

---

## 🛠 Tech Stack

| Layer       | Technology                         |
| ----------- | ---------------------------------- |
| Frontend    | React                              |
| Build Tool  | Vite                               |
| UI Feedback | react-hot-toast                    |
| Utilities   | uuid                               |
| Styling     | Modern CSS / Utility-first styling |
| Backend     | Node.js / Express (external)       |

---

## 📁 Project Structure

```text
frontend/
├── public/            # Static assets
├── src/               # Application source code
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── services/      # API interaction logic
│   ├── App.jsx        # Root component (<PassOp />)
│   └── main.jsx       # Application entry point
├── .env               # Environment variables (local)
├── package.json       # Scripts & dependencies
└── vite.config.js     # Vite configuration
```

---

## 🚀 Local Development

### Prerequisites

* Node.js **16+**
* npm or yarn

### Setup & Run

```bash
npm install
npm run dev
```

The app will be available with Hot Module Replacement (HMR) enabled.

---

## ⚙️ Environment Configuration

The frontend reads the backend base URL from an environment variable:

```env
VITE_API_URL=http://localhost:3000/
```

📌 Notes:

* Vite only exposes variables prefixed with `VITE_`
* Create a `.env` file at the project root for local development

---

## 📦 Available Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Create production build          |
| `npm run preview` | Preview production build locally |

---

## 🚢 Deployment

1. Build the application:

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
* CORS is configured to allow the frontend origin
* HTTPS is enabled in production

---

## 🔒 Security Considerations

* ❌ Never store secrets or encryption keys in the frontend
* 🔐 Use HTTPS in production to protect data in transit
* 🧠 Handle sensitive logic (encryption, auth) on the backend

---

## 🧪 Future Enhancements

* User authentication & authorization
* End-to-end encryption for stored credentials
* Password generator & strength analyzer
* Search, filter, and tagging support
* Dark-mode-only premium polish

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit changes with clear messages
4. Open a pull request describing your updates

---

## 📩 Support

For backend-related issues, refer to the backend README.

For frontend issues or feature requests, please open an issue .

---

Built with ❤️ using React + Vite





