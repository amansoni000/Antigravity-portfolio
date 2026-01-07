# 🌌 AntiGravity Portfolio

> A premium, interactive developer portfolio featuring a "Luxury Dark & Digital" aesthetic, gravity-defying physics, and seamless animations.

![Portfolio Preview](https://via.placeholder.com/1200x600/000000/ffffff?text=AntiGravity+Portfolio+Preview)

## ✨ Features

-   **Aurora Background**: A deep, living gradient mesh that creates an immersive atmosphere.
-   **👨‍🚀 Cosmo the Astronaut**: An interactive character that roams the screen and reacts to gravity (click him to break physics!).
-   **💎 Glassmorphism UI**: Modern, frosted glass elements with ultra-thin borders and noise textures.
-   **📧 Functional Contact Form**: Integrated with **EmailJS** for real-time email delivery without a backend.
-   **🖱️ Custom Cursor**: A fluid, magnetic cursor that enhances interactivity.
-   **📜 Smooth Scrolling**: Powered by **Lenis** for a buttery-smooth navigation experience.
-   **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices.

## 🛠️ Tech Stack

-   **Core**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Scrolling**: [Lenis](https://github.com/studio-freight/lenis)
-   **Email**: [EmailJS](https://www.emailjs.com/)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
-   **Styling**: Vanilla CSS (Modern Variables & Glass Effects)

## 🚀 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/antigravity-portfolio.git
    cd antigravity-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## ⚙️ Configuration

### EmailJS Setup
The contact form is pre-configured to use EmailJS. To make it work with your own account:

1.  Sign up at [EmailJS](https://www.emailjs.com/).
2.  Create a **Service** (e.g., Gmail) and a **Template**.
3.  Open `src/components/ContactForm.jsx`.
4.  Update the constants with your keys:
    ```javascript
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    ```

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate optimized static files in the `dist` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.

---

Designed & Built with ❤️ by **Aman Swarnkar**
