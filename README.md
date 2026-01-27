# 👨‍💻 Digital Portfolio

A modern, responsive, and type-safe personal portfolio website built with **Vue 3**, **TypeScript**, and **Vite**.

This project is designed to showcase skills, projects, and professional experience with a clean architecture and smooth user experience.

LIVE: https://schuetz-n.github.io/digital-portfolio/

## 🚀 Features

* **⚡ Powered by Vite:** Lightning-fast development server and optimized build.
* **Vue 3 Composition API:** Utilizing `<script setup>` for clean and performant code.
* **TypeScript:** Full type safety for data models (Projects, Skills, Timeline).
* **Centralized Data Management:** Content is separated from logic. You can easily update your portfolio by editing files in the `src/data` folder.
* **Responsive Design:** Fully responsive layout using modern CSS variables and flexbox/grid.
* **Smooth Animations:** Custom composables for scroll-triggered animations.

## 🛠️ Tech Stack

* [Vue.js 3](https://vuejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [Vue Router](https://router.vuejs.org/)
* [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## 📂 Project Structure

The project follows a modular structure to keep concerns separated:

```text
src/
├── assets/          # Static assets (Images, Global CSS)
├── components/      # Reusable UI components (Layout, Cards, etc.)
├── data/            # ✏️ EDIT CONTENT HERE (Projects, Skills, Resume)
├── router/          # Routing configuration
├── types/           # TypeScript interfaces and definitions
└── views/           # Main page views (Home, Projects, Contact, etc.)

📦 Project Setup
Prerequisites

    Node.js (LTS version recommended)

    npm (comes with Node.js)

Installation
Bash

npm install

Compile and Hot-Reload for Development
Bash

npm run dev

Type-Check, Compile and Minify for Production
Bash

npm run build

Lint with ESLint
Bash

npm run lint

📝 Customization

This portfolio is data-driven. You don't need to touch the .vue files to update your content.

    Personal Info: Update src/data/contact.ts.

    Projects: Add or remove projects in src/data/projects.ts.

    Skills: Update your tech stack in src/data/skills.ts.

    Resume/Timeline: Edit your work history in src/data/timeline.ts.

⚙️ Recommended IDE Setup

    WebStorm (native support for Vue & TypeScript)

    Alternatively: VS Code + Vue - Official extension.

📄 License

MIT
