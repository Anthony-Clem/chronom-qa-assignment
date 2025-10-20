# QA Home Assignment – Dog Breeds App

This repository contains a small React (Vite) application used as a **home assignment for a QA Engineer**.  
The exercise simulates a realistic QA task: explore the app, find issues, prioritize them, and propose improvements.

> **What we’re evaluating:** your thoroughness, clarity, prioritization, and attention to detail across functional, UX, and accessibility aspects.

---

## Contents

- [Overview & Scope](#overview--scope)
- [Quick Start (TL;DR)](#quick-start-tldr)
- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Build, Preview & Lint](#build-preview--lint)
- [Data, Auth & State](#data-auth--state)
- [Application Features](#application-features)
- [Your QA Assignment](#your-qa-assignment)
- [Evaluation Criteria](#evaluation-criteria)
- [Expected Deliverables](#expected-deliverables)
- [Severity Rubric](#severity-rubric)
- [Troubleshooting](#troubleshooting)

---

## Overview & Scope

- **Purpose:** Provide an authenticated UI to browse dog breeds, view random images, **like** breeds, and mark a single **favorite**.
- **Scope boundaries:** There is **no real backend**. All data is local fixtures. Security and production hardening are out of scope. Focus on QA of **flows, UX, accessibility, and correctness**.

**Technology Stack**

- React (see `package.json`) + React Router
- Vite (dev/build tooling)
- ESLint (linting)

---

## Quick Start (TL;DR)

```bash
# 1) Install
npm install

# 2) Run dev
npm run dev
# → open the printed URL (typically http://localhost:5173)

# 3) Login
# Use any user from public/users.json (see "Data, Auth & State" below).

# 4) Reset app state (if needed)
# Clear browser localStorage for the app origin.
```

---

## Prerequisites

- **Node.js**: LTS **22+** recommended  
- **npm**: bundled with Node

Check versions:

```bash
node -v
npm -v
```

> If you hit install/build issues, verify you’re on a recent Node 22.x.

---

## Local Development

```bash
git clone https://github.com/chronom-ai/qa-home-assignment qa-home-assignment
cd qa-home-assignment
npm install
npm run dev
```

Vite prints the local URL (usually <http://localhost:5173>). Open it in your browser.

---

## Build, Preview & Lint

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview

# Lint (optional)
npm run lint
```

---

## Data, Auth & State

**Fixtures (mock backend):**

- Static JSON files under `public/` simulate API responses:
  - `public/breeds.json`
  - `public/users.json`

**Authentication:**

- Auth is **mock-only** and driven by `public/users.json`.
- **How to log in:** open `public/users.json` and use any object’s `username` and `password` fields.
  - You may also add a new user entry for testing.

---

## Application Features

1. **Login**: basic username/password check against `users.json`.
2. **Catalog**: browse a list of dog breeds; each breed displays a random image.
3. **Likes**: mark/unmark multiple breeds as “liked”.
4. **Favorite**: exactly **one** breed can be the favorite at any time (switching moves the favorite).

> **Known limitations (by design for the assignment):**
>
> - No backend - All data is stored in local `.json` files.
> - Network errors for fixture fetches can be simulated by blocking requests or renaming files.
> - No real security - Auth is mock-only for testing purposes.

---

## Your QA Assignment

1. **Explore the application** end-to-end (login, catalog, likes, favorite).
2. **Identify issues** across functionality, UX, accessibility, performance, and displayed data.
3. **Document findings** with clear steps to reproduce, expected vs actual, and evidence (screenshots, short clips, network logs).
4. **Prioritize** issues by severity and user impact (see rubric).
5. **Suggest fixes** or improvements when possible (concise and practical).

For report formatting, see **[SUBMISSION_SAMPLE.md](SUBMISSION_SAMPLE.md)**.  
(Note, you don’t need to follow it verbatim, but ensure clarity and completeness.)

---

## Evaluation Criteria

- **Thoroughness** – coverage of features, states, and edge cases.
- **Clarity** – crisp repro steps, expected vs actual, and environment details.
- **Prioritization** – thoughtful severity & impact assessment.
- **Suggestions** – pragmatic and well-reasoned fixes/improvements.
- **Attention to Detail** – catching subtle issues that affect UX/UI.

---

## Expected Deliverables

- A comprehensive **QA report** (Markdown or PDF) with:
  - Title, environment (OS, browser + version, viewport)
  - Steps to reproduce
  - Expected vs actual
  - Evidence (screenshots/clips)
  - **Severity** (per rubric) and **proposed fix**
- Any **tools/scripts** used during your process (if applicable).
- Any **general observations** about the app’s quality and UX.

---

## Severity Rubric

- **Blocker** – prevents testing or core flows (e.g., cannot log in).
- **Critical** – core feature broken with no reasonable workaround (e.g., cannot set a favorite).
- **Major** – significant defect with a workaround; meaningfully harms UX.
- **Minor** – smaller UX/a11y/copy problems; still worth fixing.
- **Trivial** – cosmetic nits or very low impact.

---

## Troubleshooting

- **Port already in use (5173):** stop other Vite servers or set a different port in `vite.config.*`.
- **Fixture fetch issues:** confirm `public/*.json` files exist and are reachable (no CORS issues on `vite` dev).
- **Node version:** ensure Node 22.x. Reinstall deps if you upgraded Node (`rm -rf node_modules && npm install`).
- **Lint errors:** run `npm run lint` to see issues; fix as needed and document in your report.
- **Breeds not loading:** Fix file name spelling in `src/components/Breeds.jsx` (should be `breeds.json` on line 16).
