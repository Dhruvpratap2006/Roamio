<div align="center">

# 🧭 Roamio

**A full-stack travel listing platform (Airbnb-inspired) built with the MERN stack, AI features, and Stripe payments.**

[![Live Demo](https://img.shields.io/badge/Demo-Live_Site-FF5A5F?style=for-the-badge&logo=render&logoColor=white)](https://roamio-6s3k.onrender.com)
[![GitHub](https://img.shields.io/badge/Repo-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Dhruvpratap2006/Roamio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dhruv-pratap-1a3aaa344/)

</div>

---

## What it does

Roamio lets users create, browse, review, and book travel listings. Hosts can auto-generate listing descriptions using AI, and reviews get summarized into a quick sentiment overview. Payments run through Stripe.

## Features

- 🔐 Auth with Passport.js + session storage in MongoDB
- 🏡 Full listing CRUD with Cloudinary image uploads
- 🗺️ Mapbox geocoding — every listing shows on an interactive map
- 🤖 AI-generated listing descriptions (OpenRouter API)
- 💬 AI review sentiment summary (with graceful fallback if API is down)
- 💳 Stripe Checkout for bookings
- 🛡️ Rate limiting on key routes

## Tech Stack

`Node.js` `Express` `MongoDB + Mongoose` `EJS` `Bootstrap` `Passport.js` `Cloudinary` `Mapbox` `Stripe` `OpenRouter API` `Render`

## Screenshots

| Homepage | Explore Listings |
|---|---|
| ![Homepage](public/images/homepage.png) | ![Explore](public/images/explore-listings.png) |

| Listing + Map | AI Description |
|---|---|
| ![Listing](public/images/listing-details.png) | ![AI Description](public/images/ai-description.png) |

| AI Sentiment Summary | Stripe Checkout |
|---|---|
| ![AI Sentiment](public/images/ai-sentiment.png) | ![Payment](public/images/payment-page.png) |

## Run it locally

```bash
git clone https://github.com/Dhruvpratap2006/Roamio.git
cd Roamio
npm install
```

Add a `.env` file:

```
ATLAS_DB_URL=your_mongodb_uri
SESSION_SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
MAP_TOKEN=your_mapbox_token
STRIPE_SECRET_KEY=your_stripe_key
OPENROUTER_API_KEY=your_openrouter_key
```

```bash
npm run dev
```

Runs at `http://localhost:8080`

## Roadmap

- [ ] Booking calendar with date-blocking
- [ ] Search & filter by location/amenities
- [ ] Host dashboard with revenue stats
- [ ] Email notifications on booking

## Author

**Dhruv Pratap Singh** — B.Tech CSE (Data Science), NIET
[GitHub](https://github.com/Dhruvpratap2006) • [LinkedIn](https://www.linkedin.com/in/dhruv-pratap-1a3aaa344/)

---

⭐ If you found this useful, drop a star!
