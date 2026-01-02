# Password Manager — Backend (Node.js)

This directory contains the backend API for the Password Manager project. The backend exposes a simple REST API for storing, retrieving, updating, and deleting credential entries. It is designed to be lightweight and easy to run locally during development.

**Project Status:** In development

**Live Backend:** [BACKEND_LIVE_URL]

**Quick overview:**
- **Runtime:** Node.js
- **Main file:** `server.js`
- **Purpose:** Provide persistent storage and API endpoints for the frontend

**Local development (Backend)**

Prerequisites:
- Node.js 16+ and npm

To install and run the backend locally:

```bash
cd Backend
npm install
npm start
```

By default the server listens on port `3000`. If you need to change the port, edit `server.js` or set `PORT` in your environment.

**Available scripts**

- `npm start` — Start the backend server
- `npm run dev` — Start the server with nodemon (if configured)

**CORS & security**

- Ensure CORS is configured to allow requests from your frontend origin during development and production.
- Do not commit production secrets to the repository. Use environment variables for database credentials or API keys.

**Deployment notes**

- Host the backend on any Node-capable platform (Heroku, Render, AWS Elastic Beanstalk, VPS, etc.).
- Update the frontend `VITE_API_URL` to the deployed backend URL and enable CORS for the frontend origin.

**Contact / Support**

If you need help running the backend locally, open an issue or contact the maintainer.
