# 🧭 Roamio

<p align="center">
  <strong>An AI-powered Airbnb-inspired travel listing platform built with the MERN ecosystem.</strong>
</p>

<p align="center">
Discover, list, and book unique stays with secure authentication, interactive maps, AI-powered features, and Stripe payments.
</p>

---

## 🌐 Live Demo

**🔗 Live Website:** https://roamio-6s3k.onrender.com

**📂 GitHub Repository:** https://github.com/Dhruvpratap2006/Roamio

---

# 📸 Preview

> Add screenshots of your application here.

| Home Page | Listing Details |
|------------|-----------------|
| ![](screenshots/home.png) | ![](screenshots/listing.png) |

| AI Features | Booking |
|--------------|----------|
| ![](screenshots/ai.png) | ![](screenshots/booking.png) |

---

# ✨ Features

## 👤 User Features

- User Registration & Login
- Secure Authentication using Passport.js
- Session-based Login
- Browse Travel Listings
- View Listing Details
- Search & Explore Properties
- Book Listings
- Mobile Responsive Design

---

## 🏠 Host Features

- Create New Listings
- Edit Existing Listings
- Delete Listings
- Upload Property Images
- Cloudinary Image Storage
- Interactive Map Location

---

## 🤖 AI Features

### AI Listing Description Generator

Automatically generates engaging property descriptions using the OpenRouter API based on:

- Listing Title
- Category
- Location

### AI Review Sentiment Analysis

Analyzes all user reviews and generates:

- Overall Sentiment
- AI Summary
- Positive / Neutral / Negative Classification

---

## ⭐ Reviews

- Star Rating System
- User Comments
- Review Authorization
- Author-only Delete Permission

---

## 💳 Booking & Payments

- Stripe Checkout Integration
- Secure Payment Processing
- Booking Confirmation
- Duplicate Booking Prevention

---

## 🔐 Security

- Authentication
- Authorization
- Session Management
- Express Session
- Connect Mongo
- Joi Validation
- Rate Limiting
- Flash Messages
- Environment Variables

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Backend | Node.js, Express.js |
| Frontend | EJS, Bootstrap 5, Custom CSS |
| Database | MongoDB, Mongoose |
| Authentication | Passport.js |
| Validation | Joi |
| AI | OpenRouter API |
| Cloud Storage | Cloudinary |
| Maps | Mapbox GL JS |
| Payments | Stripe Checkout |
| Deployment | Render |

---

# 🏗 Project Architecture

The project follows the **MVC (Model-View-Controller)** architecture for better scalability and maintainability.

```
Roamio
│
├── controllers
│   ├── listings.js
│   ├── reviews.js
│   ├── users.js
│   └── bookings.js
│
├── models
│   ├── Listing.js
│   ├── Review.js
│   ├── User.js
│   └── Booking.js
│
├── routes
│
├── middleware
│
├── utils
│
├── public
│   ├── css
│   ├── js
│   └── images
│
├── views
│
├── cloudConfig.js
├── app.js
└── package.json
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js (v18 or above)
- MongoDB Atlas
- Cloudinary Account
- Mapbox Account
- Stripe Account
- OpenRouter API Key

---

## Installation

Clone the repository

```bash
git clone https://github.com/Dhruvpratap2006/Roamio.git

cd Roamio
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the root directory.

```env
# Database
ATLAS_DB_URL=

# Cloudinary
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=

# Mapbox
MAP_TOKEN=

# Stripe
STRIPE_SECRET_KEY=

# Session
SESSION_SECRET=

# AI
OPENROUTER_API_KEY=
```

Start the application

```bash
npm start
```

or

```bash
npm run dev
```

Visit

```
http://localhost:8080
```

---

# 💡 Key Implementation Highlights

### 🤖 AI Description Generator

Uses OpenRouter's Chat Completion API to generate engaging property descriptions based on user inputs.

---

### 💬 AI Sentiment Analysis

Automatically analyzes reviews and generates:

- Overall sentiment
- AI-generated summary
- Positive / Neutral /Negative classification

Gracefully handles API failures so review submission never breaks.

---

### 🗺 Interactive Maps

Uses Mapbox Geocoding API to:

- Convert addresses into coordinates
- Display custom markers
- Show property location on interactive maps

---

### ☁ Cloud Image Storage

All uploaded property images are stored securely using Cloudinary.

---

### 💳 Secure Payments

Stripe Checkout is used for secure booking payments.

Features include:

- Server-side Checkout Sessions
- Dynamic Success/Cancel URLs
- Duplicate Booking Prevention

---

### 🔒 Authentication

Implemented using Passport.js with:

- Local Strategy
- Session Authentication
- Authorization Middleware
- Protected Routes

---

# 📈 Future Enhancements

- Booking Calendar with Date Availability
- Wishlist Feature
- AI Smart Search
- Host Analytics Dashboard
- Email Notifications
- Payment History
- Booking Cancellation
- Property Availability Management

---

# 🤝 Contributing

Contributions are always welcome.

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 🙏 Acknowledgements

Special thanks to:

- Airbnb (Design Inspiration)
- Bootstrap
- Cloudinary
- Mapbox
- Stripe
- Passport.js
- MongoDB
- OpenRouter

---

# 👨‍💻 Author

## Dhruv Pratap

B.Tech Computer Science Engineering (Data Science)

Noida Institute of Engineering & Technology

**GitHub**

https://github.com/Dhruvpratap2006

**LinkedIn**

_Add your LinkedIn profile here_

---

# 📄 License

This project is licensed under the MIT License.

See the `LICENSE` file for more information.

---

⭐ If you found this project helpful, consider giving it a **Star** on GitHub!
