Build a modern, pastel-themed web app UI called Mystic India Guide using React + TailwindCSS.
The app should be visually clean, lightweight, and mobile-friendly, designed for travelers to explore India’s beauty, heritage, and culture.
🌸 App Overview
Name: Mystic India Guide
Theme: Soft pastel tones (mint green, peach, cream, lavender)
Font: Elegant and readable (like Poppins or Inter)
Purpose: A discovery app where users can explore all 29 states of India and learn about their:
Nature & Landscapes
Heritage & Architecture
Culture & Festivals
Local Life
Hidden Gems
Note: Do not call any external APIs. Use placeholder data (JSON files) and dummy images.
Any API keys (for future integration like Google Maps) should be added as placeholders (e.g., YOUR_MAP_API_KEY).
🧭 Pages & Flow
1️⃣ Login & Signup Page
A clean, minimal authentication screen with toggle between Login and Signup.
Pastel background gradient (lavender → cream).
Simple input fields (Email, Password, Confirm Password).
“Continue” button that redirects to Home.
2️⃣ Home Page
Title: “Explore the 29 States of Incredible India 🇮🇳”
Grid layout showing 29 state cards.
Each card: image, name of the state, soft shadow, hover animation.
Clicking a state opens that state’s Detail Page.
3️⃣ State Detail Page
Banner with state photo and name.
Short “About” section describing the state.
Below that, show five category cards/buttons:
🌿 Nature
🏰 Heritage
🎭 Culture
🧵 Local Life
💎 Hidden Gems
Each card redirects to a Category Page for that state.
4️⃣ Category Page
Title: e.g., “Local Life of Rajasthan”
Display sub-category buttons depending on the main category:
For Local Life: Shopping, Street Foods, Restaurants, Hotels
For Nature: Beaches, Forests, Hills, Waterfalls, Deserts
For Heritage: Monuments, Forts, Palaces, Museums
For Culture: Dances, Festivals, Handicrafts, Cuisines
For Hidden Gems: Unexplored or Insta-famous spots
Clicking a sub-category shows cards or a grid list of relevant spots (from placeholder JSON data).
Each spot card should have:
Photo (dummy image)
Title
Short description
“View on Map” button → Opens Google Map iframe with placeholder key (YOUR_GOOGLE_MAPS_KEY).
🗂️ Folder Structure
/src
  /pages
    - Login.jsx
    - Signup.jsx
    - Home.jsx
    - StateDetail.jsx
    - Category.jsx
  /components
    - Navbar.jsx
    - StateCard.jsx
    - CategoryCard.jsx
    - PlaceCard.jsx
  /data
    - states.json
    - categories.json
    - sample_places.json
💡 Design Guidelines
Backgrounds: soft gradient (mint–peach or lavender–cream)
Buttons: rounded-xl, soft shadows, hover color transitions
Cards: minimal with drop shadows and pastel accent borders
Use Framer Motion for smooth fade/slide animations
Make the UI responsive and aligned to a spiritual + cultural aesthetic
⚙️ Technical Notes
No backend or database — use local state/JSON.
No real API calls — only placeholders for:
Google Maps: YOUR_GOOGLE_MAPS_KEY
Image URLs: use dummy images (e.g., Unsplash placeholders)
Navigation via React Router.
Code should be modular and clean.
