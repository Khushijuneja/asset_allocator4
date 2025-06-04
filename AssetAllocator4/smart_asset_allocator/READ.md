## react setup with tailwin css

install theme
https://vite.dev/guide/

open terminal

1. npm create vite@latest
2. choose files project name ,react, javascript
3. run cd project name
4. npm install (all depend.. added)
5. npm run dev
6. mobile view "dev": "vite --host", package,json
7. tailwind css
   terminal
   -- npm install tailwindcss @tailwindcss/vite
   -- vite.config telwin import added telwin code
   -- src index.css file import tailwin css
   -- Terminal : npm run dev
   css page default css use

# react router setup

8. install npm i react-router-dom
9. react router setup app.js
   github : git clone link add prooject reference
   npm i react-router
   src madhe folder components header footer
   layout layout file
   pages folder create tya mdhe all pages including
   layout
   app.jsx routes set

10. react carsoule setup
    install npm i antdn
    install frame-motion

11. git added vscode
    git add ,
    git commit -m "Initial commit"
    git push -u origin main

12. Hostinger upload
    hostinger upload npm run build then create dist file and upload only dist file

   <!-- end react setup -->

Modify vite.config.js to set the base path (important if your app is not at the root domain):
js
Copy
Edit
export default defineConfig({
base: "./", // Ensures correct asset loading
plugins: [react()]
});

Upload Files to Hostinger
Login to Hostinger → Go to hPanel.
Open File Manager → Navigate to public_html/.
Delete existing files (if necessary).
Upload the contents of dist/ (not the folder itself).

<!-- description -->

# React Setup with Tailwind CSS

## Installation Steps

### 1. Install Vite

Vite is a fast frontend build tool that provides an excellent development experience.

```sh
npm create vite@latest
```

- Choose the project name.
- Select `React` as the framework.
- Select `JavaScript` as the variant.

Navigate into the project directory:

```sh
cd project-name
```

Install dependencies:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

---

## 2. Install Tailwind CSS

To set up Tailwind CSS, install the required dependencies:

```sh
npm install -D tailwindcss postcss autoprefixer
```

Initialize Tailwind CSS:

```sh
tailwindcss init -p
```

This will generate two files:

- `tailwind.config.js`
- `postcss.config.js`

### 3. Configure Tailwind

Open `tailwind.config.js` and update the `content` array:

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 4. Import Tailwind CSS

In `src/index.css`, import Tailwind’s base styles:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run the development server again:

```sh
npm run dev
```

---

## 5. GitHub Integration

Clone a GitHub repository:

```sh
git clone <repository-link>
```

Push your project to GitHub:

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

---

## 6. Install React Router

React Router is used for navigation.

```sh
npm install react-router-dom
```

---

## 7. Enable Mobile View

Update the `scripts` section in `package.json`:

```json
"scripts": {
  "dev": "vite --host",
  "build": "vite build",
  "preview": "vite preview"
}
```

This ensures the development server is accessible on a mobile device.

---

## 8. Project Structure

Organize your project with the following folder structure:

```
project-name/
│── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   ├── layout/
│   │   ├── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│── index.html
│── package.json
│── tailwind.config.js
│── postcss.config.js
```

### 9. Set Up Routes in `App.jsx`

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
```

Now, you have a complete React setup with Tailwind CSS, React Router, and a structured project layout.

# React Setup with Tailwind CSS

## Installation Steps

### 1. Install Vite

Vite is a fast frontend build tool that provides an excellent development experience.

```sh
npm create vite@latest
```

- Choose the project name.
- Select `React` as the framework.
- Select `JavaScript` as the variant.

Navigate into the project directory:

```sh
cd project-name
```

Install dependencies:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

---

## 2. Install Tailwind CSS

To set up Tailwind CSS, install the required dependencies:

```sh
npm install -D tailwindcss postcss autoprefixer
```

Initialize Tailwind CSS:

```sh
tailwindcss init -p
```

This will generate two files:

- `tailwind.config.js`
- `postcss.config.js`

### 3. Configure Tailwind

Open `tailwind.config.js` and update the `content` array:

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 4. Import Tailwind CSS

In `src/index.css`, import Tailwind’s base styles:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run the development server again:

```sh
npm run dev
```

---

## 5. GitHub Integration

Clone a GitHub repository:

```sh
git clone <repository-link>
```

Push your project to GitHub:

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

---

## 6. Install React Router

React Router is used for navigation.

```sh
npm install react-router-dom
```

---

## 7. Enable Mobile View

Update the `scripts` section in `package.json`:

```json
"scripts": {
  "dev": "vite --host",
  "build": "vite build",
  "preview": "vite preview"
}
```

This ensures the development server is accessible on a mobile device.

---

## 8. Project Structure

Organize your project with the following folder structure:

```
project-name/
│── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   ├── layout/
│   │   ├── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│── index.html
│── package.json
│── tailwind.config.js
│── postcss.config.js
```

### 9. Set Up Routes in `App.jsx`

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
```

Now, you have a complete React setup with Tailwind CSS, React Router, and a structured project layout.
git add ,
git commit -m "Initial commit"
git push -u origin main
