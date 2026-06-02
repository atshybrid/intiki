# Intiki — From Home, With Love

A premium Home-to-Home Marketplace + Courier Platform connecting Indian families with NRIs worldwide.

## Business Model

Intiki is **not a courier company**. It's a multi-revenue marketplace:

| Service | Description |
|---------|-------------|
| **Send From Family** | Door pickup → quality check → export packaging → customs → delivery |
| **Buy From India** | Shop pickles, millets, sarees, handlooms from verified vendors |
| **Sample Box** (USP) | Try samples before ₹10,000+ bulk orders |
| **Amma Box** | Monthly subscription of pickles, snacks, seasonal foods |
| **Festival Boxes** | Sankranti, Ugadi, Diwali, Rakhi, Christmas packages |
| **Video Verification** | 30-second pre-shipment video for trust |
| **Family Concierge** | Premium service for sarees, temple offerings, gifts |

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Shadcn UI** (Radix primitives)
- **Framer Motion**
- **React Query** (@tanstack/react-query)
- **Zustand** (cart, wishlist, auth state)
- **Prisma** (PostgreSQL)
- **PWA** ready

## Getting Started

```bash
cd intiki
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
intiki/
├── prisma/schema.prisma      # Database schema
├── public/
│   ├── images/intiki-logo.png
│   └── manifest.json          # PWA manifest
├── src/
│   ├── app/
│   │   ├── (main)/            # Customer-facing pages
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── shop/          # Product catalog
│   │   │   ├── send/          # Send package flow
│   │   │   ├── track/         # Shipment tracking
│   │   │   ├── sample-box/    # Sample box (USP)
│   │   │   ├── subscription/  # Amma Box plans
│   │   │   ├── festival/      # Festival collections
│   │   │   ├── account/       # User account
│   │   │   └── dashboard/     # Order history
│   │   ├── (auth)/            # Login & register
│   │   ├── admin/             # Admin panel
│   │   └── api/               # API routes
│   ├── components/
│   │   ├── ui/                # Shadcn UI components
│   │   ├── layout/            # Header, footer, bottom nav
│   │   └── home/              # Homepage sections
│   ├── lib/                   # Utils, constants, mock data
│   ├── stores/                # Zustand stores
│   ├── providers/             # React Query provider
│   └── types/                 # TypeScript types
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, sample box, categories, subscriptions |
| Shop | `/shop` | Product catalog with search & filters |
| Product | `/shop/[slug]` | Product details with add to cart |
| Send | `/send` | Multi-step package sending flow |
| Track | `/track` | Real-time shipment tracking |
| Sample Box | `/sample-box` | Select & order samples |
| Subscription | `/subscription` | Amma Box plans |
| Festival | `/festival` | Festival box collections |
| Account | `/account` | User profile & menu |
| Dashboard | `/dashboard` | Orders, samples, subscriptions |
| Admin | `/admin` | Management panel |
| Login | `/login` | Authentication |
| Register | `/register` | Account creation |

## Mobile Experience

- Bottom navigation: Home, Shop, Send, Track, Account
- Mobile-first responsive design
- PWA manifest for installable app experience
- Safe area insets for notched devices

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/products` | List products (filter by category/search) |
| GET | `/api/products/[slug]` | Get product by slug |
| GET/POST | `/api/shipments` | Track/create shipments |
| POST | `/api/shipping/calculate` | International shipping calculator |
| GET/POST | `/api/sample-box` | Sample box requests |

## Database

PostgreSQL with Prisma ORM. Key models:

- User, Address, Product, Category, Vendor
- Order, OrderItem, Shipment, ShipmentEvent
- SampleRequest, Subscription, FestivalBox
- Coupon, Referral

```bash
npx prisma generate
npx prisma db push
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#005696` | Primary, navigation, trust |
| Gold | `#FFC20E` | Highlights, sample box, CTAs |
| Orange | `#F47920` | Action buttons, energy |
| Green | `#008751` | Success, subscriptions |
| Cream | `#FFF8F0` | Backgrounds, warmth |

## License

Private — Intiki © 2026
