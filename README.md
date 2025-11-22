# FloraVision - Premium Plant E-Commerce Store

A modern, premium plant e-commerce website built with Next.js 16, React 19, and Tailwind CSS v4.

## Features

- Premium plant product showcase with 3D animations and motion effects
- Beautiful card-based design with emerging plant images and glitter border effects
- Interactive hero section with "Earth's Exhale" showcase
- Top selling plants collection (3 featured products)
- Customer reviews carousel
- Best O2 Plants showcase
- 3D plant gallery with mouse-tracking and rotation effects
- Responsive mobile-first design
- Dark green premium theme with glassmorphism

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS v4
- Radix UI components
- Lucide React Icons
- Recharts

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/plant-website.git
cd plant-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run development server:
\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000`

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
├── components/
│   ├── header.jsx
│   ├── hero.jsx
│   ├── hero-3d-plants.jsx
│   ├── top-selling-plants.jsx
│   ├── plant-card.jsx
│   ├── customer-reviews.jsx
│   ├── best-o2-plants.jsx
│   ├── interactive-plant-showcase.jsx
│   ├── plant-gallery-3d.jsx
│   ├── categories-section.jsx
│   ├── benefits-section.jsx
│   └── footer.jsx
├── public/
│   └── images/
├── package.json
├── render.yaml
└── README.md
\`\`\`

## Deployment

### Deploy on Render

1. Push code to GitHub (see instructions below)
2. Visit [render.com](https://render.com)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Fill in the details:
   - **Name**: `floravision-plant-store`
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. Click "Deploy"

Your site will be live at: `https://floravision-plant-store.onrender.com`

### Push to GitHub

1. Initialize git:
\`\`\`bash
git init
\`\`\`

2. Add all files:
\`\`\`bash
git add .
\`\`\`

3. Create first commit:
\`\`\`bash
git commit -m "Initial commit: FloraVision v20 - Production Ready"
\`\`\`

4. Add GitHub remote (replace YOUR_USERNAME):
\`\`\`bash
git remote add origin https://github.com/YOUR_USERNAME/plant-website.git
\`\`\`

5. Push to GitHub:
\`\`\`bash
git branch -M main
git push -u origin main
\`\`\`

## Environment Variables

Currently, no environment variables are required for local development. If needed in the future, add them to `.env.local` and they'll be available in your code.

## License

MIT License - Feel free to use this project

## Author

Created with v0 by Vercel
