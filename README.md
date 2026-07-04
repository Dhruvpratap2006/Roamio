<div align="center">

# 🧭 Roamio

### **Full-Stack AI-Powered Travel Listing Platform**

Roamio is a robust, production-ready travel listing application inspired by Airbnb. Built on the MERN stack architecture, it seamlessly integrates GenAI features, secure third-party financial processing, dynamic geocoding, and strict role-based access control (RBAC) to deliver an optimized, scalable user experience.

[![Live Demo](https://img.shields.io/badge/Demo-Live_Site-FF5A5F?style=for-the-badge&logo=render&logoColor=white)](https://roamio-6s3k.onrender.com)
[![GitHub Repository](https://img.shields.io/badge/Repository-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Dhruvpratap2006/Roamio)

---
</div>

## 🛠️ Tech Stack & Ecosystem

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Architecture** | EJS (Embedded JavaScript), Bootstrap 5, Vanilla JS, Custom CSS3 |
| **Backend Core** | Node.js, Express.js |
| **Database & ORM** | MongoDB Atlas, Mongoose ODM |
| **Authentication & Security** | Passport.js (Local Strategy), Express-Session, Connect-Mongo, Joi |
| **Artificial Intelligence** | OpenRouter API (LLM Integration for NLP & Sentiment Tasks) |
| **Cloud Infrastructure & APIs** | Cloudinary API (Media), Mapbox GL JS API (Geospatial), Stripe API (Payments) |
| **Deployment & Hosting** | Render |

---

## 🚀 Key Architectural & Engineering Highlights

### 🤖 1. Context-Aware GenAI Features
* **Automated Listing Optimizer:** Leverages OpenRouter API to programmatically generate engaging, high-conversion property descriptions using structured inputs (Title, Category, Location).
* **Aggregate Sentiment Analytics Engine:** Implements runtime NLP processing to analyze multi-user text reviews. It compiles qualitative data into quantitative metrics, rendering overall sentiment classifications alongside an AI-generated property summary. Built with a **graceful fallback architecture** to guarantee continuous uptime if the upstream API encounters rate limits.

### 🗺️ 2. Geospatial Mapping & Geocoding Pipeline
* Integrated **Mapbox GL JS** API to convert unstructured string addresses into geographic coordinates ($Latitude, Longitude$) asynchronously during listing creation, rendering precise, interactive client-side location maps.

### 💳 3. Secure Financial Transaction Processing
* Engineered a server-side **Stripe Checkout** workflow handling secure webhooks, state tracking, and tokenized payment processing to mitigate client-side tampering and enforce duplicate booking prevention.

### 🔐 4. Session Architecture & Security Hardening
* Implemented stateful session-based authentication using **Passport.js** and distributed storage via `connect-mongo`.
* Secured applications using **Joi Schema Validation** for incoming payloads, protected routes via modular access control middleware, and mitigated DoS risks using `express-rate-limit`.

---

## 📸 Product Interface

<details>
<summary>📋 Click to expand interface previews</summary>

### 🏠 App Homepage
![Homepage](public/images/homepage.png)

### 🌍 Dynamic Explore Grid
![Explore Listings](public/images/explore-listings.png)

### 🏡 Granular Listing & Mapping Details
![Listing Details](public/images/listing-details.png)

### 🤖 AI Listing Engine & Sentiment UI
![AI Description](public/images/ai-description.png)
![AI Sentiment](public/images/ai-sentiment.png)

### 💳 Secure Stripe Interface
![Payment](public/images/payment-page.png)
</details>

---

## 🏗️ Project Structure

```text
Roamio/
├── controllers/          # Business logic handlers separated from routing
├── middleware/           # RBAC, Authentication checks, and Joi validation
├── models/               # Mongoose schemas (User, Listing, Review)
├── public/               # Client-side static assets
│   ├── css/              # Structured UI component styling
│   ├── js/               # Asynchronous logic & Mapbox implementations
│   └── images/
├── routes/               # Modular Express routing pipelines
├── utils/                # Global error handlers and wrapper wrappers
├── views/                # Dynamic EJS UI view templates
├── app.js                # Application entry point and server configuration
└── cloudConfig.js        # Multi-cloud SDK initialization (Cloudinary)

⚙️ Local Development Setup
Prerequisites
Node.js (v18.x or higher)

MongoDB Atlas cluster or local URI

Installation Workflow
Clone & Navigate:

Bash
git clone [https://github.com/Dhruvpratap2006/Roamio.git](https://github.com/Dhruvpratap2006/Roamio.git)
cd Roamio
Install Ecosystem Dependencies:

Bash
npm install
Configure Environment Matrix: Create a .env file in the root directory and populate your keys:

Code snippet
ATLAS_DB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/roamio
SESSION_SECRET=your_high_entropy_session_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
MAP_TOKEN=your_mapbox_public_token
STRIPE_SECRET_KEY=your_stripe_secret_key
OPENROUTER_API_KEY=your_openrouter_api_key
Initialize Boot Sequence:

Bash
# Development hot-reloading
npm run dev

# Production mode
npm start
The local environment will mount at http://localhost:8080.

📈 Roadmap & Upcoming Features
[ ] Temporal Scheduling: Full booking calendar engine with active date-blocking matrix.

[ ] Smart Search Engine: Multi-parameter filtering algorithms based on coordinates and amenities.

[ ] Host Telemetry Dashboard: Integrated charts displaying revenue metrics and booking frequencies.

[ ] Automated Notifications: Event-driven email dispatch for booking confirmations via Nodemailer.

👨‍💻 Engineer Profiles & Links
Dhruv Pratap Singh
B.Tech in Computer Science Engineering (Data Science) Noida Institute of Engineering & Technology (NIET), Greater Noida

GitHub: @Dhruvpratap2006

LinkedIn: https://www.linkedin.com/in/dhruv-pratap-1a3aaa344/

Email: your-email@example.com

Licensed under the MIT License.

Distributed with structural optimization for modern web application design. Give this project a ⭐ if you find it valuable!
