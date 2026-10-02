# ⚡ Suraj Kumar Sahoo — Distributed Systems & Agentic AI Portfolio

A world-class, cyber-precision developer portfolio engineered to showcase **Suraj Kumar Sahoo's** resume, enterprise multi-agent platforms, and scalable distributed systems architectures.

Built with **Zero Build Dependencies** (pure Vanilla CSS3, modern HTML5, and ES6+ JavaScript), making it 100% compatible for instant, 0-downtime deployment to **GitHub Pages** and **Vercel**.

---

## 🌟 What This Portfolio Features

1. **Interactive Enterprise Multi-Agent Architecture Explorer**:
   - Multi-tier visual blueprint of the enterprise multi-agent mesh.
   - Click-to-inspect specification drawer for **Master Coordinator (Port 50051)**, **Production Analytics Agent (1.3M+ records)**, **Central MongoMCP Microservice (Port 8085)**, **Qdrant Vector DB**, and **Medallion Data Lakehouse**.
   - Displays real production specs, AST-level query validation guardrails, and implementation code snippets.

2. **Interactive Live Query Pipeline Simulator**:
   - Test realistic production and statutory regulatory queries across 1.3M+ records.
   - Visualizes live security scanning (PII & injection prevention), semantic routing, entity normalization, AST query compilation, and SSE response streaming.

3. **Production Benchmark & Reliability Scorecard**:
   - Highlights the empirical **Large-Scale Production Analytics Benchmark**: 100.0% factual precision (150/150 ground-truth facts), 0 runtime crashes, 11.26s P50 latency, and <10ms agentic memory hits.

4. **Complete Resume & Professional Experience**:
   - National Informatics Centre (NIC) experience as Software Developer & AI Engineer Intern.
   - Comprehensive technical skills matrix with filterable categories.
   - Embedded interactive PDF resume viewer + direct download button.
   - One-click copy for email, phone, and direct links to GitHub (`Suraj-729`) and LinkedIn.

---

## 🚀 How to Run Locally

You can preview the portfolio immediately on your machine without installing any npm packages:

```bash
# Navigate to the portfolio folder
cd d:/SAINETMODEL/sainetdeploy/portfolio

# Start a lightweight Python HTTP server
python -m http.server 3000
```
Open your browser and navigate to: `http://localhost:3000`

---

## 🌐 Deploy to Vercel (Instant 1-Click)

### Option A: Via Vercel Web Dashboard (Easiest)
1. Push this `portfolio` directory to a new GitHub repository (e.g., `https://github.com/Suraj-729/portfolio`).
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New Project"** ➔ Import your repository.
4. Framework Preset: Leave as **Other / None**.
5. Click **"Deploy"**. Your portfolio will be live worldwide on a `.vercel.app` domain in seconds!

### Option B: Via Vercel CLI
```bash
# In the portfolio directory:
cd d:/SAINETMODEL/sainetdeploy/portfolio

# Run vercel deploy (install via npm i -g vercel if not already installed)
vercel --prod
```

---

## 🐙 Deploy to GitHub Pages

### Method 1: Host as your primary user site (`Suraj-729.github.io`)
1. Create a new GitHub repository named: **`Suraj-729.github.io`**
2. In your terminal, initialize and push the contents of the `portfolio` folder:
   ```bash
   cd d:/SAINETMODEL/sainetdeploy/portfolio
   git init
   git add .
   git commit -m "feat: Initial commit for portfolio"
   git branch -M main
   git remote add origin https://github.com/Suraj-729/Suraj-729.github.io.git
   git push -u origin main
   ```
3. In GitHub repo settings ➔ **Pages** ➔ Set Branch to `main` and folder to `/(root)`.
4. Your site will automatically go live at: **`https://suraj-729.github.io`**

### Method 2: Host as a project page (`Suraj-729.github.io/portfolio`)
1. Push to a repository named `portfolio`.
2. Go to Repository **Settings** ➔ **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** ➔ select branch `main` ➔ `/ (root)` ➔ Click **Save**.

---

## 📁 Directory Structure

```
portfolio/
├── index.html               # Main single-page application & responsive layout
├── css/
│   └── styles.css           # Custom cyber-precision & glassmorphism design system
├── js/
│   ├── main.js              # Header scroll, skills filter, clipboard toast & resume modal
│   ├── architecture.js      # Interactive SAINET architecture inspector & specs
│   └── simulator.js         # Live query pipeline simulator & console stream
├── assets/                  # Icons & optional imagery
├── resume_suraj.pdf         # Suraj Kumar Sahoo's verified CV for direct download & preview
├── vercel.json              # Optimized deployment headers for Vercel
└── README.md                # Deployment and project guide
```
