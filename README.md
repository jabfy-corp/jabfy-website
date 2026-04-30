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
