# Our Wings Group — Overseas Recruitment & Manpower Consultancy

A Next.js 16 web application featuring the **Indigo + Sand** design system for **Our Wings Group**, an MEA-approved government-authorized international recruitment and visa assistance agency.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/zenmeraki7/our-wings-group)

---

## Deploying on Render

### Option 1: 1-Click Deploy via Render Blueprint (Recommended)

1. Click the **Deploy to Render** button above, or go to [render.com/deploy?repo=https://github.com/zenmeraki7/our-wings-group](https://render.com/deploy?repo=https://github.com/zenmeraki7/our-wings-group).
2. Sign in to your Render account.
3. Render automatically reads `render.yaml` with all the build, start, and Node settings pre-configured.
4. Click **Apply** to launch your service.

---

### Option 2: Manual Web Service Setup on Render

1. Log in to your [Render Dashboard](https://dashboard.render.com).
2. Click **New +** → **Web Service**.
3. Select **Build and deploy from a Git repository** and connect `zenmeraki7/our-wings-group`.
4. Configure the service settings:
   - **Name**: `our-wings-group`
   - **Region**: Any (e.g. *Oregon* or *Frankfurt*)
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Plan**: `Free`
5. Under **Environment Variables**, add:
   - `NODE_VERSION`: `20.18.0`
6. Click **Create Web Service**.

Render will install dependencies, build the Next.js production bundle, and launch your site with free SSL (`https://our-wings-group.onrender.com`).

---

## Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Production Build

```bash
npm run build
npm run start
```
