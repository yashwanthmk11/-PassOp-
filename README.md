# 🔐 PassOp

**PassOp** is a modern, privacy-first password manager built with **React** and **Vite**, designed to make credential operations fast, minimal, and secure. It provides a clean, glassmorphic UI for creating, managing, copying, and deleting passwords while communicating with a backend API for persistent storage.

> *Operate your passwords. Securely.*

---

## 🌐 Live Links

* **Frontend:** [FRONTEND_LIVE_URL]
* **Backend API:** [BACKEND_LIVE_URL]

*(Replace the placeholders with actual deployment URLs)*

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

A key part of this philosophy is the **living background system** — a subtle, animated visual layer that reinforces the feeling of an active, secure vault without distracting the user.

---

## 🎨 Visual Identity & Live Background

PassOp features a **dynamic, animated background system** designed to give the application a premium, alive, and security-focused feel.

### Background Highlights

* 🌊 **Floating wavy lines** that move gently upward and downward
* ✨ Subtle glow effects representing encrypted data flow
* 🧲 Slow, continuous motion to avoid visual fatigue
* 🎥 Lightweight SVG + CSS animations (no heavy canvas libraries)
* 🕶 Always rendered behind the UI to preserve clarity

### Design Intent

The animated background is intentionally:

* **Non-distracting** — motion is slow, soft, and ambient
* **Purpose-driven** — visually represents secure data movement
* **Performance-safe** — GPU-friendly transforms only

This creates the feeling of a *living vault* without pulling attention away from credential operations.

---

## 🌊 Live Background Concept (Visual Reference)

The following SVG-style wave concept illustrates the **floating encrypted streams** used in PassOp’s background:

```svg
<svg viewBox="0 0 1440 320" preserveAspectRatio="none">
  <path fill="#5EEAD4" fill-opacity="0.08"
    d="M0,160 C120,120 240,200 360,190 480,180 600,120 720,128 840,136 960,200 1080,202 1200,204 1320,144 1440,128 L1440,0 L0,0 Z">
    <animateTransform
      attributeName="transform"
      type="translate"
      from="0 0"
      to="0 -40"
      dur="12s"
      repeatCount="indefinite" />
  </path>
</svg>
```

🔹 In the actual application, multiple such waves are layered with different speeds and opacities to create a **depth-based floating effect**.

🔹 Motion alternates subtly **upward and downward**, reinforcing a calm, continuous flow rather than constant direction.

---

### Why This Matters

Most password managers focus only on functionality. PassOp adds **emotional confidence** — the background quietly communicates that something secure and active is happening, without demanding attention.

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

For frontend issues or feature requests, please open an issue or contact the maintainer.

---

Built with ❤️ using React + Vite
