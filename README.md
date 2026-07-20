# DevPlus

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma)


AI-powered GitHub Developer Analytics Chrome Extension.

DevPlus analyzes public GitHub profiles to generate repository analytics, a custom developer score, and AI-powered insights. It combines GitHub repository data with Google Gemini to provide an overview of a developer's activity, strengths, and areas for improvement directly within GitHub.

## Preview

### Analytics Dashboard

<p align="center">
  <img src="./assets/dashboard.png" alt="DevPlus Dashboard" width="900">
</p>

### AI Developer Insights

<p align="center">
  <img src="./assets/ai-insights.png" alt="DevPlus AI Insights" width="900">
</p>

## Live API

**Backend:** https://devplus-backend-85gu.onrender.com

## Features

- Analyze any public GitHub profile
- Custom developer scoring algorithm
- Repository analytics (stars, forks, languages, repositories)
- AI-generated developer insights
- PostgreSQL caching for improved performance
- Chrome Extension integration
- Dockerized backend deployment

## Tech Stack

### Backend

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Docker

### Frontend

- React
- TypeScript
- Chrome Extension (Manifest V3)

### APIs & AI

- GitHub REST API
- Google Gemini API

## System Architecture

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
GitHub REST API
      │
      ▼
Analytics Engine
      │
      ▼
Google Gemini
      │
      ▼
Developer Insights
```

## API

### Analyze a GitHub User

```http
GET /api/analyze/:username
```

Example

```http
GET /api/analyze/octocat
```

## Local Setup

```bash
git clone https://github.com/rugdesai/DevPlus.git

cd DevPlus/backend

npm install
npm run dev
```

## Project Structure

```text
DevPlus/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── prisma/
│   ├── routes/
│   ├── services/
│   └── server.ts
│
└── extension/
```

## Contributors

| Name | Responsibilities |
|------|------------------|
| **Rugveda Desai** | Backend Architecture, REST API Development, GitHub API Integration, Analytics Engine, Developer Scoring Algorithm, PostgreSQL Database Design, Prisma ORM, AI Integration (Google Gemini), Dockerization, Backend Deployment |
| **Gautam Misra** | Chrome Extension Development (Manifest V3), React Frontend Development, TypeScript Integration, GitHub Content Script Injection, Extension UI/UX Design, Data Visualization & Charts |

## Future Improvements

- Contribution analytics
- Pull request analytics
- Repository trend tracking
- Team comparison dashboard
- Historical developer insights

## License

MIT License.