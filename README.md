# 🚀 DevPlus

> AI-powered GitHub Developer Analytics Chrome Extension

DevPlus helps developers better understand their GitHub profile through analytics, a custom developer score, and AI-generated insights. It combines GitHub repository data with AI to provide meaningful feedback on coding habits, strengths, and areas for improvement.
Think of it as **Spotify Wrapped + Grammarly** for GitHub Developers
---

## ✨ Features

- Analyze any public GitHub profile
- Custom Developer Score
- Repository analytics (stars, forks, languages, repositories)
- AI-generated developer insights
- Intelligent caching using PostgreSQL
- Chrome Extension integration

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM

### AI & APIs
- GitHub REST API
- Google Gemini API

### Frontend
- React
- TypeScript
- Chrome Extension (Manifest V3)

---

## 🏗 How it Works

```text
GitHub Profile
      │
      ▼
Chrome Extension
      │
      ▼
Express Backend
      │
      ▼
GitHub API
      │
      ▼
Analytics + Developer Score
      │
      ▼
Gemini AI
      │
      ▼
Response displayed inside the extension
```

---

## 🚀 Getting Started

```bash
git clone <repo-url>

cd backend

npm install

npm run dev
```

---

## 📡 API

### Analyze a GitHub User

```http
GET /api/analyze/:username
```

Example

```
GET /api/analyze/octocat
```

---

## 📂 Project Structure

```
backend/
├── controllers
├── services
├── routes
├── config
├── prisma
└── server.ts

extension/
```

---

## 👥 Contributors

- **Rugveda Desai** — Backend Development, Database, Analytics Engine, AI Integration
- **Gautam Misra** — Chrome Extension, React Frontend, UI/UX

---

## 🚧 Roadmap

- GitHub contribution insights
- Pull request analytics
- Developer trend tracking
- Team comparisons
- Deployment

If you found this project interesting, consider giving it a ⭐ on GitHub!