# 🚀 Jabfy Website

Frontend showcase + lightweight backend for the Jabfy project.

Jabfy is an early-stage ecosystem focused on:
- IoT
- Cybersecurity
- Local-first automation
- Structured data interoperability (JSON bus)

---

## 🧠 Project Structure

```
.
├── frontend/ # React + Vite (UI showcase)
├── backend/ # Node.js API (basic endpoints)
├── docker-compose.yml
├── Makefile
└── README.md
```

---

## ⚙️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- lucide-react

### Backend
- Node.js
- Express

### DevOps
- Docker
- Docker Compose

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone git@github.com:jabfy-corp/jabfy-website.git
cd jabfy-website
```

### 2. Build the project

```bash
make build
```

> Or manually:

```bash
docker compose up --build -d
```

### 3. Run the project

```bash
make
```

> Or manually:

```bash
docker compose up -d
```

---

## 🌐 Access

| Service  | URL                                                    |
| -------- | ------------------------------------------------------ |
| Frontend | [http://localhost:5173](http://localhost:5173)         |
| Backend  | [http://localhost:3001/api](http://localhost:3001/api) |

> Health check:

```bash
curl http://localhost:3001/api/health
```

---

## 🛠️ Available Commands

```bash
make           # start everything
make build     # build + start
make down      # stop containers
make del       # remove everything (including volumes)
```

---

## 📦 Development


### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 📦 Production images

Every push to `main` publishes two OCI images to GitHub Container Registry:

```text
ghcr.io/jabfy-corp/jabfy-website-frontend:latest
ghcr.io/jabfy-corp/jabfy-website-backend:latest
```

Each image also receives a `sha-<commit>` tag and an immutable digest. Production
deployments must use the digest reported by the workflow, not `latest`. The
frontend listens on port `8080`; the backend listens on port `3001` and requires
`FRONTEND_URL` to match the public frontend URL.

### Backend

```bash
cd backend
npm install
npm run dev
```

---

## ⚠️ Notes

- node_modules are NOT committed
- Containers install dependencies automatically
- Frontend runs in Vite dev mode
- Backend is minimal (expand as needed)

---

## 🧩 Roadmap

- [ ] IoT core API
- [ ] Auth system
- [ ] Device registry
- [ ] JSON communication bus
- [ ] Security hardening
- [ ] Production deployment

---

## 🧠 Vision

> Jabfy aims to build a secure, local-first smart-home ecosystem where devices communicate through a unified and structured data layer.

---

## 📄 License

> MIT (or change it before someone else does something weird with your code)
