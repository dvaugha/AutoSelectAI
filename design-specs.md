# Alpha Intelligence | Quant Strategy & Architecture

## 1. App Architecture
The application is designed as a **Progressive Web App (PWA)** to provide a native mobile experience without App Store friction.
- **Frontend**: Vanilla JS with Tailwind CSS (CDN) and Lucide Icons.
- **Logic Engine**: Client-side ranking simulation based on asymmetric risk-reward profiles.
- **Data Sync**: Service Worker handles offline caching and 15-minute polling logic.

## 2. AI Ranking Formula (The Alpha Score)
The system calculates a Probability-Weighted Return (PWR):
`AlphaScore = (E(R) * P(S)) / (ATR_Volatility * Risk_Factor)`

Where:
- `E(R)`: Expected 7-day return (Momentum Acceleration + Volume Flow).
- `P(S)`: Probability of Success (ML classification on historical breakout setups).
- `ATR_Volatility`: Reward normalization against volatility expansion.
- `Risk_Factor`: Dynamic adjustment based on the "Aggression Level" (Conservative vs. High Risk).

## 3. Tech Stack Recommendation
For a full-scale production launch:
- **Framework**: Next.js (React) for high-performance UI and SEO.
- **Backend**: FastAPI (Python) for heavy-lifting AI/ML computations and market data scraping.
- **Database**: Supabase (PostgreSQL) for real-time data sync and user management.
- **Messaging**: Redis/BullMQ for handling data refresh tasks every 15 minutes.
- **Hosting**: Vercel (Frontend) and AWS/GCP (AI Workers).

## 4. Monetization Model (Subscription Tiers)
- **Basic (Free)**: Access to Rank #1 stock only; 30-minute delayed data updates.
- **Pro ($99/mo)**: Full Top 5 access, sector filters, real-time alerts.
- **Whale ($499/mo)**: Unusual options activity feed, Dark Pool data, and "High Risk" aggression mode unlocked.

## 5. Branding Strategy
- **Visual Identity**: "Dark Quant" aesthetic. Uses Deep Charcoal (#09090b) and Emerald Neon (#10b981).
- **Typography**: Orbitron (Headings) and Inter (UI/Data).
- **Tone**: Aggressive, precise, institutional.

---
*Created by Antigravity for Alpha Intelligence.*
