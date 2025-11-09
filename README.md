# 🌸 Mystic India Guide

A modern, pastel-themed web application built with React and TailwindCSS, designed for travelers to explore India's beauty, heritage, and culture across all 29 states.

## Features

- 🎨 Beautiful pastel-themed UI with smooth animations
- 🇮🇳 Explore all 29 states of India
- 🏰 Discover Heritage & Architecture
- 🌿 Explore Nature & Landscapes
- 🎭 Learn about Culture & Festivals
- 🧵 Experience Local Life
- 💎 Find Hidden Gems

## Tech Stack

- **React 18** - UI framework
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Project Structure

```
src/
  ├── pages/
  │   ├── Login.jsx
  │   ├── Signup.jsx
  │   ├── Home.jsx
  │   ├── StateDetail.jsx
  │   └── Category.jsx
  ├── components/
  │   ├── Navbar.jsx
  │   ├── StateCard.jsx
  │   ├── CategoryCard.jsx
  │   └── PlaceCard.jsx
  ├── data/
  │   ├── states.json
  │   ├── categories.json
  │   └── sample_places.json
  ├── App.jsx
  ├── main.jsx
  └── index.css
```

## Features Overview

### 1. Authentication
- Clean login/signup page with toggle
- Pastel gradient background
- Simple form validation

### 2. Home Page
- Grid layout displaying all 29 states
- Hover animations on state cards
- Responsive design

### 3. State Detail Page
- Banner image with state name
- About section with description
- Five category cards for navigation

### 4. Category Page
- Subcategory buttons for filtering
- Place cards with images and descriptions
- "View on Map" button with Google Maps integration (placeholder)

## Google Maps Integration

The app includes placeholder for Google Maps API. To enable maps:

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Replace `YOUR_GOOGLE_MAPS_KEY` in `PlaceCard.jsx` with your actual API key

## Notes

- All data is stored in JSON files (no backend required)
- Images use Unsplash placeholders (can be replaced with actual images)
- The app is fully responsive and mobile-friendly

## License

This project is open source and available under the MIT License.




