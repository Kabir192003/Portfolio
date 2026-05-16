# Portfolio Repository

Welcome to the source code for my professional portfolio. This repository houses a fully responsive, modern web application designed to showcase my work in UI/UX Design, User Research, and Full-Stack Development.

## Overview

This portfolio is built as a Single Page Application (SPA) utilizing modern React patterns and the Framer Motion library to deliver a highly interactive, animated user experience. The design system leverages CSS variables to maintain a consistent "glassmorphism" aesthetic across all components.

## Architecture & Technology Stack

The application relies on a modern JavaScript stack tailored for fast rendering and fluid animations.

*   **Framework:** React 18
*   **Build Tool:** Vite
*   **Routing:** React Router v6
*   **Animation & Gesture:** Framer Motion
*   **Styling:** Vanilla CSS (custom variables, flexbox/grid architectures, glassmorphic UI)

### Project Structure

The repository is structured to separate concerns, allowing for scalable data management and easy component reuse.

*   `src/components/`: Reusable UI elements (Navigation, GeometricBackground, dynamic scrolling wrappers).
*   `src/pages/`: Top-level route components (Home, Projects, Experience, Contact, and individual case studies).
*   `src/data/`: Centralized JSON/JS data files housing all case study content, metrics, and image references, ensuring the React components remain logic-focused and lightweight.
*   `public/`: Static assets, optimized images, and site icons.

## Key Projects Featured

The application dynamically renders comprehensive case studies. Highlights include:

1.  **Workhive (UX/UI Design):** A comprehensive web platform concept designed to unify job searching, candidate networking, and salary comparison. Showcases complex data visualization and multi-sided marketplace architecture.
2.  **Trekmate (Mobile Design):** A niche e-commerce mobile application targeting outdoor enthusiasts. Focuses on progressive disclosure during checkout and specialized product taxonomy.
3.  **This or That (Full Stack):** A deployed community decision platform utilizing React, Node.js, Express, and MongoDB. Features an algorithm-driven personalized feed and secure anonymous posting.
4.  **The Hunger Games (UX Research):** A deep-dive comparative usability study between major food delivery giants, synthesized from quantitative survey data and qualitative interviews.

## Local Development Setup

To run this project locally, ensure you have Node.js installed (v16+ recommended).

1.  **Clone the repository:**
    `git clone https://github.com/Kabir192003/Portfolio.git`

2.  **Navigate to the project directory:**
    `cd web-portfolio`

3.  **Install dependencies:**
    `npm install`

4.  **Start the development server:**
    `npm run dev`

5.  The site will be available locally (typically at `http://localhost:5173`).

## Build & Deployment

The application is configured to build into a highly optimized static bundle.

To create a production build:
`npm run build`

The output will be generated in the `dist` directory, ready to be served by any static hosting provider. This repository is currently configured with GitHub Actions for automated CI/CD deployment to GitHub Pages.

## Contact

Kabir Sharma
Product Designer & Developer
[Review my portfolio for contact details]
