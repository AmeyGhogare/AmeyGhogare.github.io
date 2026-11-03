# Amey Anil Ghogare - Personal Portfolio Website

A premium, modern, fully responsive, and interactive personal portfolio website designed and developed for **Amey Anil Ghogare** (Data Analyst | Python Developer | Machine Learning Enthusiast).

---

## 🌟 Key Features

- **Executive Aesthetic & Design System**:
  - Dark theme with deep navy/black backgrounds (`#060913`, `#0b1120`, `#0f172a`).
  - Electric blue, cyan, and purple gradient accents.
  - Subtle glassmorphism (`backdrop-filter: blur(16px)`), modern card hover lifts, and glowing ambient backdrops.
  - Light/Dark theme toggle with user preference persistence via `localStorage`.
- **Dynamic Hero Section**:
  - Animated typewriter cycling through: *Data Analyst*, *Python Developer*, *Machine Learning Enthusiast*, *Software Developer*.
  - Call-to-action buttons for project exploration and direct resume download.
  - Working social links to GitHub and LinkedIn.
  - Interactive Developer & Analytics telemetry visual card.
- **Interactive Skills Section**:
  - Filterable by domain categories: *Programming*, *Data Analytics*, *Machine Learning*, *NLP & Deep Learning*, *Web & Database*, *Developer Tools*.
  - Clean badge styling with hover micro-interactions.
- **Professional Experience Timeline**:
  - Highlighted training at Codenera Pvt Ltd (June 2026 – Present) with curriculum milestones and competencies.
- **Featured Projects Showcase**:
  - Interactive category filtering (*All*, *Data Analytics & BI*, *Machine Learning & AI*, *Python & Computer Vision*).
  - High-resolution custom SVG telemetry illustrations for all 4 major projects:
    1. **FocusGuard AI** – Attention Monitoring & Analytics Dashboard
    2. **OLA Data Analyst Project** – Power BI & SQL
    3. **ATM Cash Utilization & Downtime Analysis**
    4. **Customer Churn Prediction**
  - Direct working links to official GitHub repositories.
- **Education & Credentials**:
  - Bachelor of Engineering in Computer Science & Engineering from Prof. Ram Meghe Institute of Technology & Research, Badnera (S.G.B.A. University).
  - 6 verified certification cards: AWS Academy Cloud Foundations, NPTEL Python for Data Science, Google Cloud GenAI Study Jams 2024, Google Cloud AI & ML, AWS Academy Cloud Architecting, and Cisco Introduction to Cybersecurity.
- **Contact & Conversion**:
  - Clean contact form with client-side validation.
  - Direct email with one-click "Copy" button.
  - Back-to-top button with smooth scroll.
  - Real, downloadable ATS-friendly PDF resume included in `assets/resume.pdf`.

---

## 📁 Project Structure

```text
amey-ghogare-portfolio/
├── index.html                   # Semantic HTML5 structure & accessibility landmarks
├── css/
│   ├── style.css                # Design system tokens, variables, typography, animations
│   └── responsive.css           # Breakpoints for mobile, tablet, and ultra-wide screens
├── js/
│   └── script.js                # Typewriter, theme switcher, scrollspy, filter, contact validation
├── assets/
│   ├── favicon.svg              # Custom monogram SVG favicon
│   ├── resume.pdf               # Downloadable resume PDF
│   └── images/
│       ├── hero-visual.svg      # Live code & analytics telemetry graphic
│       ├── project-focusguard.svg # FocusGuard AI computer vision visual
│       ├── project-ola.svg      # OLA cab bookings Power BI & SQL visual
│       ├── project-atm.svg      # ATM cash demand & downtime risk visual
│       └── project-churn.svg    # Customer churn ML classification visual
└── README.md                    # Setup, running, and deployment guide
```

---

## 🚀 How to Run Locally

### Option 1: VS Code Live Server (Recommended)
1. Open Visual Studio Code.
2. Select **File > Open Folder...** and select the `amey-ghogare-portfolio` directory.
3. Install the **Live Server** extension (by Ritwick Dey) from the VS Code Extensions marketplace (`Ctrl+Shift+X` and search for "Live Server").
4. Right-click on `index.html` and choose **"Open with Live Server"** (or click **"Go Live"** in the bottom status bar).
5. The portfolio will automatically open at `http://127.0.0.1:5500/index.html`.

### Option 2: Python Built-in HTTP Server
If you prefer running from the command line:
```bash
# Navigate to the portfolio folder
cd path/to/amey-ghogare-portfolio

# Start a local web server (Python 3)
python -m http.server 8000
```
Open your browser and navigate to: `http://localhost:8000`.

---

## 🌐 Free Deployment Options

### 1. GitHub Pages (100% Free & Fast)
1. Create a new repository on [GitHub](https://github.com/) (e.g., `amey-portfolio` or `AmeyGhogare.github.io`).
2. Push your portfolio code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git branch -M main
   git remote add origin https://github.com/AmeyGhogare/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. In your GitHub repository, go to **Settings > Pages**.
4. Under **Source**, select `Deploy from a branch`, choose branch `main` and folder `/ (root)`, then click **Save**.
5. Your website will be live in ~1 minute at `https://AmeyGhogare.github.io/YOUR-REPO-NAME/`!

### 2. Vercel (One-Click Free Deployment)
1. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **"Add New Project"** and import your portfolio repository.
3. Click **"Deploy"**. Vercel will instantly build and provide a fast global edge URL with free SSL.

### 3. Netlify
1. Go to [netlify.com](https://www.netlify.com/) and sign in.
2. Drag and drop the `amey-ghogare-portfolio` folder directly into the Netlify dashboard, or connect your GitHub repository for continuous deployment.
