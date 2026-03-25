# Tranzo.money

![Tranzo Preview](https://github.com/tranzolabs/Tranzo/assets/preview-placeholder)

The fundamental financial architecture for boundaryless scale. **Tranzo** is a premium, minimalist Web3 fintech interface built with extreme brutalist design principles—abandoning complex gradients and clutter for stark monochrome rendering, absolute legibility, and massive typography.

## ⚡ Tech Stack

Engineered for raw velocity and flawless transitions:

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite (Ultra-fast HMR)
- **Styling:** Tailwind CSS (Pure Monochrome Palette configuration)
- **Animations:** Framer Motion
- **Routing:** React Router v6

## 🕶 Design Philosophy (The Avici Standard)

The frontend adheres to strict visually-driven parameters:
- **No Colors:** Pure `#000000` backgrounds, `#111111` surfaces, and `#FFFFFF` contrasting typography.
- **Aggressive Typography:** Overly massive `font-sans` headings (`Inter` natively injected) featuring uncomfortably tight tracking (`tracking-[-0.05em]`) for that definitive brutalist weight.
- **Glassmorphism:** Absolute minimal borders (`border-white/10`) coupled with extensive frosted glass backdrops (`backdrop-blur-xl`).
- **Pill Arrays:** Heavy emphasis on gigantic border radii (`rounded-[48px]`, `rounded-[32px]`) to establish deep bento-box layouts.

## 🚀 Getting Started

To initialize the development server locally:

```bash
# Clone the repository
git clone https://github.com/tranzolabs/Tranzo.git

# Enter the directory
cd tranzo-landing

# Install dependencies (NPM or Yarn)
npm install

# Boot development engine
npm run dev
```

## 📂 Project Structure

- `/src/components` - The core building blocks (Navbar, Hero, Benefits, ProductShowcase, Features, FinalCTA)
- `/src/pages` - Legal and routed domains (`Terms.tsx`, `Privacy.tsx`)
- `index.css` - Global zero-color resets and base typography injections
- `tailwind.config.js` - Stripped down theme configuration

## 🌐 Deployment

This application is strictly optimized for **Vercel** with integrated SPA rewrites (`vercel.json`) to gracefully handle `react-router-dom` deep links like `/terms` and `/privacy`.

Simply connect the repository to your Vercel project and deploy with ZERO build configuration required.

## 📜 Legal Links

Includes heavily vetted and dynamically formatted placeholder pages for:
- [Privacy Policy](/privacy)
- [Terms & Conditions](/terms)

---
*Built to execute point-of-sale transactions isolated from exchange volatility.*
