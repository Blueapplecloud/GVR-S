# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


project structure


college-website/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── assets/            # Static images, pdfs, etc
│
├── src/
│   ├── assets/            # App images, fonts, videos
│   ├── components/        # Reusable components (Navbar, Footer, Card, Button, etc)
│   │   ├── Navbar/
│   │   │     └── Navbar.js
│   │   └── Footer/
│   │        └── Footer.js
│   │
│   ├── constants/         # Static data like navigation links, organization chart data
│   │   └── index.js
│   │
│   ├── context/           # React Context API (if needed for theme, auth, etc)
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/             # Custom hooks (useAuth, useFetch, etc)
│   │   └── useAuth.js
│   │
│   ├── layouts/           # Layouts (MainLayout, AdminLayout)
│   │   └── MainLayout.jsx
│   │
│   ├── pages/             # Pages (Home, About, Courses, Contact, etc)
│   │   ├── About/
│   │   │   ├── Vision
│   │   │   │     └──Vision.jsx
│   │   │   ├── History
│   │   │   │    └──History.jsx
│   │   │   └── About.jsx         # Vision.jsx , History.jsx - configure in About.jsx
│   │   ├── Management/
│   │   │   └── Management.jsx
│   │   ├── Courses/
│   │   │   └── Courses.jsx
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── router/            # React Router setup
│   │   └── index.jsx
│   │
│   ├── services/          # API calls (axios functions etc)
│   │   └── api.js
│   │
│   ├── styles/            # Global CSS, Tailwind config, etc
│   │   ├── index.css
│   │   └── tailwind.css
│   │
│   ├── utils/             # Helper functions (formatDate.js, scrollToTop.js etc)
│   │   └── formatDate.js
│   │
│   ├── App.jsx             #  About.jsx,... - configure in App.jsx
│   ├── main.jsx
│   └── vite-env.d.ts
│
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
