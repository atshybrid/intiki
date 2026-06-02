export const BRAND = {
  name: "Intiki",
  tagline: "From Home, With Love.",
  description:
    "International courier & marketplace — send homemade food, pickles, clothes and shop authentic Indian products delivered worldwide.",
  courierTagline: "International Courier from India to 150+ Countries",
  subtext: "India to NRIs",
} as const;

export const COLORS = {
  navy: "#005696",
  gold: "#FFC20E",
  orange: "#F47920",
  green: "#1B4332",
  greenLight: "#008751",
  saffron: "#FF9933",
  cream: "#FFF9F0",
  warmBrown: "#8B4513",
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home", icon: "Home" },
  { href: "/shop", label: "Shop", icon: "ShoppingBag" },
  { href: "/send", label: "Send", icon: "Package" },
  { href: "/track", label: "Track", icon: "MapPin" },
  { href: "/account", label: "Account", icon: "User" },
] as const;

export const DESKTOP_NAV = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/send", label: "International Courier" },
  { href: "/track", label: "Track Courier" },
  { href: "/sample-box", label: "Sample Box", badge: "New" },
  { href: "/festival", label: "Festival Boxes" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const COURIER_STEPS = [
  { label: "Door Pickup", desc: "We collect from your family's home in India", icon: "Home" },
  { label: "Quality Check & Packing", desc: "Export-safe packaging with video verification", icon: "Package" },
  { label: "Customs Clearance", desc: "Full documentation & export clearance handled", icon: "FileCheck" },
  { label: "International Flight", desc: "Courier shipped via air freight worldwide", icon: "Plane" },
  { label: "Doorstep Delivery", desc: "Delivered to your NRI address abroad", icon: "CheckCircle" },
] as const;

export const COURIER_COUNTRIES = [
  "🇺🇸 USA", "🇬🇧 UK", "🇨🇦 Canada", "🇦🇺 Australia",
  "🇦🇪 UAE", "🇸🇬 Singapore", "🇩🇪 Germany", "🇳🇿 New Zealand",
] as const;

export const TRUST_BADGES = [
  { label: "Free Door Pickup & Packing", icon: "Home" },
  { label: "100% Authentic Products", icon: "Shield" },
  { label: "Hygienically Packed", icon: "Package" },
  { label: "Delivered Worldwide", icon: "Globe" },
] as const;

export const FREE_PACKING_FEATURES = [
  {
    title: "Free Door Pickup",
    desc: "Intiki agent comes to your family's home — no travel needed",
  },
  {
    title: "Free Export Packing",
    desc: "Professional food-safe packaging at no extra cost",
  },
  {
    title: "Quality Check Included",
    desc: "Every item checked before packing & shipping",
  },
  {
    title: "Video Verification",
    desc: "30-second video of packed items sent to you before dispatch",
  },
] as const;

export const FEATURES_BAR = [
  { title: "Free Door Pickup", desc: "We Come To Your Home", icon: "Home" },
  { title: "Free Packing", desc: "Export-Safe At No Cost", icon: "Package" },
  { title: "Traditional Recipes", desc: "Authentic Taste", icon: "ChefHat" },
  { title: "100% Natural", desc: "No Added Preservatives", icon: "Leaf" },
  { title: "Fast Delivery", desc: "DHL, FedEx & UPS", icon: "Truck" },
  { title: "Dedicated Support", desc: "We're Here For You", icon: "Headphones" },
] as const;

export const SAMPLE_FLOW = [
  {
    step: 1,
    title: "Order Sample",
    desc: "Choose 4-6 product samples from our catalog",
    icon: "Gift",
    color: "orange",
  },
  {
    step: 2,
    title: "Taste & Verify",
    desc: "Receive samples at your doorstep and taste the quality",
    icon: "Utensils",
    color: "gold",
  },
  {
    step: 3,
    title: "Confirm Order",
    desc: "Happy with quality? Confirm your bulk order with confidence",
    icon: "CheckCircle",
    color: "green",
  },
  {
    step: 4,
    title: "Ship Worldwide",
    desc: "We pack, handle customs & deliver to your loved ones",
    icon: "Plane",
    color: "navy",
  },
] as const;

export const TRUST_INDICATORS = [
  { title: "Door Pickup", description: "We collect from your family's doorstep", icon: "Home" },
  { title: "Export Packaging", description: "Food-safe international packaging", icon: "Package" },
  { title: "Customs Support", description: "Full documentation & clearance", icon: "FileCheck" },
  { title: "Worldwide Delivery", description: "150+ countries covered", icon: "Globe" },
  { title: "Sample Before Bulk", description: "Try before you order big", icon: "Gift" },
] as const;

export const SERVICES = [
  {
    id: "family-courier",
    title: "Family Courier",
    description: "Mother packs, we deliver. Pickles, sweets, snacks, clothes from home.",
    icon: "Heart",
    href: "/send",
    color: "orange",
  },
  {
    id: "shop-india",
    title: "Shop From India",
    description: "Browse verified Indian vendors. Pickles, millets, sarees & more.",
    icon: "ShoppingBag",
    href: "/shop",
    color: "navy",
  },
  {
    id: "sample-box",
    title: "Sample Box",
    description: "Try samples before bulk orders. Build trust, order with confidence.",
    icon: "Gift",
    href: "/sample-box",
    color: "gold",
    featured: true,
  },
  {
    id: "subscription",
    title: "Amma Box",
    description: "Monthly subscription of pickles, snacks & seasonal foods.",
    icon: "Calendar",
    href: "/subscription",
    color: "green",
  },
  {
    id: "festival",
    title: "Festival Boxes",
    description: "Sankranti, Ugadi, Diwali, Rakhi & Christmas ready-made packages.",
    icon: "Sparkles",
    href: "/festival",
    color: "saffron",
  },
  {
    id: "concierge",
    title: "Family Concierge",
    description: "Sarees for mother, temple offerings, gifts — we handle everything.",
    icon: "Crown",
    href: "/contact",
    color: "navy",
  },
] as const;

export const CATEGORIES = [
  { id: "pickles", name: "Pickles & Powders", image: "/images/Pickes.png", count: 120 },
  { id: "snacks", name: "Snacks & Sweets", image: "/images/snakes.png", count: 150 },
  { id: "millets", name: "Spices & Millets", image: "/images/Spces_millets.png", count: 80 },
  { id: "dryfruits", name: "Dry Fruits & Nuts", image: "/images/dry_veg_frts.png", count: 100 },
  { id: "sarees", name: "Sarees & Ethnic Wear", image: "/images/cloths.png", count: 200 },
  { id: "homemade", name: "Homemade Foods", image: "/images/Pickes.png", count: 90 },
  { id: "gifts", name: "Gift Hampers", image: "/images/snakes.png", count: 50 },
  { id: "festival", name: "Pooja Samagri", image: "/images/Spces_millets.png", count: 70 },
] as const;

export const PROMO_CARDS = [
  {
    id: "free-packing",
    title: "Free Packing + Door Pickup",
    desc: "We pick up & pack free at your doorstep with love",
    cta: "BOOK FREE PICKUP",
    href: "/send",
    image: "/images/free-packing.png",
    highlight: true,
  },
  {
    id: "sample",
    title: "Taste First, Then Order",
    desc: "Try our Sample Box with best-selling items",
    cta: "ORDER SAMPLE BOX",
    href: "/sample-box",
    image: "/images/Pickes.png",
  },
  {
    id: "combos",
    title: "Combo Offers",
    desc: "Save more with our exclusive combos",
    cta: "SHOP COMBOS",
    href: "/shop?offers=true",
    image: "/images/snakes.png",
  },
  {
    id: "bulk",
    title: "Bulk Orders",
    desc: "Special discounts for bulk & festival orders",
    cta: "KNOW MORE",
    href: "/contact",
    image: "/images/dry_veg_frts.png",
  },
  {
    id: "refer",
    title: "Refer & Earn",
    desc: "Refer your friends & earn exciting rewards",
    cta: "REFER NOW",
    href: "/account",
    image: "/images/cloths.png",
  },
] as const;

export const TRACKING_STEPS = [
  { id: "picked-up", label: "Picked Up", icon: "Home" },
  { id: "packed", label: "Packed", icon: "Package" },
  { id: "export-cleared", label: "Export Cleared", icon: "FileCheck" },
  { id: "in-transit", label: "In Transit", icon: "Plane" },
  { id: "delivered", label: "Delivered", icon: "CheckCircle" },
] as const;

export const SUBSCRIPTION_PLANS = [
  {
    id: "basic",
    name: "Amma Lite",
    price: 2999,
    period: "month",
    features: ["2 Pickle varieties", "1 Snack pack", "Seasonal sweet", "Free shipping"],
  },
  {
    id: "premium",
    name: "Amma Premium",
    price: 4999,
    period: "month",
    popular: true,
    features: [
      "4 Pickle varieties",
      "2 Snack packs",
      "Homemade item",
      "Seasonal special",
      "Video verification",
      "Priority shipping",
    ],
  },
  {
    id: "family",
    name: "Amma Family",
    price: 7999,
    period: "month",
    features: [
      "Everything in Premium",
      "Custom requests",
      "Festival box included",
      "Dedicated concierge",
      "Family video calls",
    ],
  },
] as const;

export const FESTIVAL_BOXES = [
  { id: "sankranti", name: "Sankranti Box", emoji: "🪁", price: 3499, items: 12 },
  { id: "ugadi", name: "Ugadi Box", emoji: "🌿", price: 2999, items: 10 },
  { id: "diwali", name: "Diwali Box", emoji: "🪔", price: 4999, items: 15 },
  { id: "rakhi", name: "Rakhi Box", emoji: "🎀", price: 2499, items: 8 },
  { id: "christmas", name: "Christmas Box", emoji: "🎄", price: 3999, items: 12 },
] as const;

export const FAQS = [
  {
    q: "What is the Sample Box service?",
    a: "Before placing a bulk order worth ₹10,000+, you can order a Sample Box with small portions of pickles, millets, sweets and snacks. Verify quality, then order with confidence.",
  },
  {
    q: "How does the Sample → Taste → Confirm → Ship flow work?",
    a: "Step 1: Order a Sample Box (₹499). Step 2: Taste and verify quality at home. Step 3: Confirm your bulk order — sample cost is adjusted. Step 4: We ship worldwide with export packaging and customs support.",
  },
  {
    q: "Is door pickup and packing really free?",
    a: "Yes! Intiki agent comes to your family's doorstep in India, picks up items, and packs everything free with export-safe packaging. No hidden packing charges — Free Packing With Love.",
  },
  {
    q: "How does Family Courier work?",
    a: "Book free door pickup. Our agent collects items from your family's home, quality-checks, packs free, handles customs, and delivers internationally via DHL, FedEx or UPS.",
  },
  {
    q: "Which countries do you deliver to?",
    a: "We deliver to 150+ countries including USA, UK, Canada, Australia, UAE, Singapore, Germany, and more.",
  },
  {
    q: "What is Video Verification?",
    a: "Before shipping, we record a 30-second video showing the product, weight, and packaging. You see exactly what's being shipped.",
  },
  {
    q: "Can I send homemade food?",
    a: "Yes! Homemade pickles, sweets, snacks and traditional foods are our specialty. We use food-safe export packaging.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "New Jersey, USA",
    text: "The Sample Box changed everything. I tried the mango pickle sample, loved it, and now order ₹15,000 worth every month for my family gatherings.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "London, UK",
    text: "My amma's gongura pickle reached me in perfect condition. The video verification gave me so much peace of mind.",
    rating: 5,
  },
  {
    name: "Anitha Reddy",
    location: "Sydney, Australia",
    text: "The Diwali Festival Box was magical. Felt like being home. Intiki is not a courier — it's a piece of India delivered with love.",
    rating: 5,
  },
] as const;

export const CATEGORY_IMAGES: Record<string, string> = {
  pickles: "/images/Pickes.png",
  snacks: "/images/snakes.png",
  millets: "/images/Spces_millets.png",
  dryfruits: "/images/dry_veg_frts.png",
  sarees: "/images/cloths.png",
  homemade: "/images/Pickes.png",
  sweets: "/images/snakes.png",
  handlooms: "/images/cloths.png",
  gifts: "/images/snakes.png",
  festival: "/images/Spces_millets.png",
};
