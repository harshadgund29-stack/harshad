Harshad  — Personal Portfolio

A modern, responsive portfolio site built to showcase projects, skills, and experience.

Table of Contents

About

Demo

Features

Technologies

Getting Started

Prerequisites

Installation

Running Locally

Building for Production

Folder Structure

Deployment

Usage

Customization

Contributing

License

Contact

About

This portfolio site is created to highlight my work, showcase my professional skills, and give visitors an overview of my background, projects, and contact information. It is designed to be responsive, fast, and accessible.

Demo

Visit the live site: https://harshad-bice.vercel.app/

Features

Responsive design (mobile, tablet, desktop)

Hero section with introduction

About section including skills and background

Project showcase gallery

Contact form or contact details

Clean, modern UI with smooth scrolling/navigation

Light/dark theme support (if implemented)

SEO-friendly meta tags and fast load times

Technologies

Framework / Library: e.g., React, Next.js, or whichever you used

Styling: CSS, SCSS, Tailwind CSS or styled-components

Deployment: Vercel

Any other relevant libraries (e.g., Framer Motion for animations)

Note: Update this list with the actual tech stack used.

Getting Started
Prerequisites

Node.js (version X or above)

npm or Yarn

Installation
git clone https://github.com/your-username/harshad-bice-portfolio.git
cd harshad-bice-portfolio
npm install
# or
yarn install

Running Locally
npm run dev
# or
yarn dev


This will start a development server (commonly at http://localhost:3000
) where you can preview changes live.

Building for Production
npm run build
# or
yarn build


Then run:

npm run start
# or
yarn start


to serve the production build.

Folder Structure

Here’s an example / typical structure:

├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── data/
├── .gitignore
├── package.json
├── README.md
└── next.config.js (or equivalent)


You can adjust based on your actual structure.

Deployment

This project is deployed via Vercel. To deploy:

Connect the GitHub (or other VCS) repo to Vercel

Set up build command (npm run build) and output directory (.next, build, or dist)

Trigger deploy (Vercel handles hosting and CI/CD)

Usage

Update content in the “data” folder (projects list, your bio, skills)

Add or modify pages/components for new sections

Use your own domain if desired (configure in Vercel domain settings)

Ensure images are optimized (e.g., use next/image if using Next.js)

Test on different screen sizes and devices

Customization

You may want to customize:

Color theme / branding

Fonts (via Google Fonts or other providers)

Layout of projects grid or hero section

Animation timing or scroll behaviour

Add blog section / case studies if desired

Internationalisation (i18n) support

Contributing

This is a personal portfolio, so contributions may not apply. But if you’d like:

Fork the repo

Create feature branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m ‘Add some feature’)

Push to branch (git push origin feature/your-feature)

Open a pull request

License

Specify your license here. For example:
MIT License © 2025 Harshad Bice

