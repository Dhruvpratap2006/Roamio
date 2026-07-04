# 🧭 Roamio

A full-stack travel listing platform where users can discover, list, and book unique stays around the world — inspired by Airbnb, built from scratch with AI-powered features and secure payments.

**[Live Demo](#)** · **[Report Bug](#)** · **[Request Feature](#)**

---

## 📸 Preview

<!-- Add 2-3 screenshots here, e.g. -->
<!-- ![Homepage](public/images/preview-home.png) -->
<!-- ![Listing Page](public/images/preview-listing.png) -->

---

## ✨ Features

- 🔐 **Authentication & Authorization** — secure signup/login with Passport.js, session-based auth, and role-based access control (only owners can edit/delete their listings)
- 🏡 **Full CRUD for Listings** — create, browse, filter, edit, and delete travel listings with image uploads via Cloudinary
- 🗺️ **Interactive Maps** — automatic geocoding (Mapbox API) converts addresses into map coordinates with custom markers and popups
- 🤖 **AI Listing Description Generator** — integrates OpenRouter API to auto-generate engaging property descriptions from title, location, and category
- 💬 **AI Review Sentiment Analysis** — analyzes all reviews for a listing and generates an overall sentiment label + summary using AI
- ⭐ **Reviews & Ratings** — users can leave star ratings and comments, with author-only delete permissions
- 💳 **Secure Payments** — Stripe Checkout integration for booking payments (INR), with booking state tracking to prevent duplicate reservations
- 🛡️ **Rate Limiting** — protects AI endpoints from abuse using `express-rate-limit`
- 📱 **Fully Responsive** — clean, mobile-first UI built with Bootstrap 5 and custom CSS

---

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js, MongoDB, Mongoose
**Frontend:** EJS, Bootstrap 5, Custom CSS
**Authentication:** Passport.js, express-session, connect-mongo
**AI Integration:** OpenRouter API
**Payments:** Stripe Checkout
**Media & Maps:** Cloudinary, Mapbox GL JS
**Validation:** Joi
**Deployment:** Render

---

## 🏗️ Architecture

The project follows the **MVC (Model-View-Controller)** pattern for clean separation of concerns:

```
Roamio/
├── controllers/     # Business logic for listings, reviews, users
├── modules/         # Mongoose models (Listing, Review, User, Booking)
├── routes/          # Express route definitions
├── views/           # EJS templates
├── utils/           # Helper services (AI service, Stripe service, error handling)
├── public/          # Static assets (CSS, JS, images)
└── app.js           # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Cloudinary account
- Mapbox account
- Stripe account
- OpenRouter API key

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Dhruvpratap2006/Roamio.git
   cd Roamio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory
   ```env
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_key
   CLOUD_API_SECRET=your_cloudinary_secret
   MAP_TOKEN=your_mapbox_token
   ATLAS_DB_URL=your_mongodb_connection_string
   STRIPE_SECRET_KEY=your_stripe_secret_key
   SESSION_SECRET=your_session_secret
   OPENROUTER_API_KEY=your_openrouter_key
   ```

4. Run the app
   ```bash
   npm start
   ```

5. Visit `http://localhost:8080`

---

## 🔑 Key Implementation Highlights

- **AI-grounded content generation:** Description generator uses structured prompts and OpenRouter's chat completions API, with graceful fallback handling for inconsistent free-tier model responses.
- **Booking integrity:** A dedicated `Booking` model tracks confirmed reservations per user-listing pair, preventing duplicate bookings and reflecting real-time booking state in the UI.
- **Resilient AI error handling:** Sentiment analysis wraps AI calls in try/catch so a failed API call never blocks a review from saving — the app degrades gracefully instead of crashing.
- **Secure payment flow:** Stripe Checkout sessions are generated server-side with dynamic success/cancel URLs, keeping card data off the application server entirely.

---

## 📌 Roadmap

- [ ] Booking calendar with date-based availability
- [ ] AI-powered smart search with natural language filters
- [ ] Wishlist / saved listings
- [ ] Host analytics dashboard

---

## 👨‍💻 Author

**Dhruv Pratap**
Computer Science Engineering student at NIET, Greater Noida

- GitHub: [@Dhruvpratap2006](https://github.com/Dhruvpratap2006)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
