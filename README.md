# CAT Maester

Adaptive CAT Exam Preparation & Analytics Platform — deployed at **jazdot.github.io/cat-maester**.

---

## Setup on GitHub (One-Time Deployment)

1. **Create repo** at [github.com/new](https://github.com/new)
   - **Repository name:** `cat-maester` ← must be exactly this
   - Owner: `jazdot`
   - Visibility: Public

2. **Enable GitHub Pages**
   - Go to repo **Settings → Pages**
   - Under *Build and deployment*, set **Source = GitHub Actions**
   - Save

3. **Set Environment Secrets (Optional for AI Question Generation & Firebase)**
   - Go to repo **Settings → Secrets and variables → Actions**
   - Add Secret: `VITE_GEMINI_API_KEY`
   - Add Secret: `VITE_FIREBASE_API_KEY`

4. **Push this repo**
   ```bash
   cd /home/richu/jazdot-cat-maester
   git init
   git add .
   git commit -m "Initial CAT Maester standalone release"
   git branch -M main
   git remote add origin https://github.com/jazdot/cat-maester.git
   git push -u origin main
   ```

5. **Wait ~60 seconds** → CAT Maester is live at `https://jazdot.github.io/cat-maester`
