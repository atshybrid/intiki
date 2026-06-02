import { Product } from "@/types";
import { CATEGORY_IMAGES } from "@/lib/constants";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Avakaya Mango Pickle",
    slug: "avakaya-mango-pickle",
    description:
      "Authentic Andhra-style raw mango pickle made with traditional spices. A family recipe passed down for generations. Hygienically packed in glass jars.",
    price: 349,
    comparePrice: 449,
    images: [CATEGORY_IMAGES.pickles],
    category: "pickles",
    inStock: true,
    isSample: true,
    weight: 500,
    tags: ["andhra", "mango", "spicy"],
    rating: 4.8,
    reviewCount: 234,
  },
  {
    id: "2",
    name: "Gongura Pickle",
    slug: "gongura-pickle",
    description:
      "Tangy sorrel leaves pickle — a Telangana specialty that NRIs crave the most. Made with fresh gongura and traditional spices.",
    price: 299,
    images: [CATEGORY_IMAGES.pickles],
    category: "pickles",
    inStock: true,
    isSample: true,
    weight: 500,
    tags: ["telangana", "gongura", "tangy"],
    rating: 4.9,
    reviewCount: 189,
  },
  {
    id: "3",
    name: "Ragi Millet Flour",
    slug: "ragi-millet-flour",
    description:
      "Stone-ground finger millet flour from organic farms in Karnataka. Rich in calcium and iron. Perfect for healthy rotis.",
    price: 199,
    images: [CATEGORY_IMAGES.millets],
    category: "millets",
    inStock: true,
    isSample: true,
    weight: 1000,
    tags: ["organic", "ragi", "healthy"],
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: "4",
    name: "Kaju Katli",
    slug: "kaju-katli",
    description:
      "Premium cashew fudge sweets from a 50-year-old sweet shop in Hyderabad. Perfect for festivals and gifting.",
    price: 599,
    comparePrice: 699,
    images: [CATEGORY_IMAGES.snacks],
    category: "snacks",
    inStock: true,
    isSample: true,
    weight: 500,
    tags: ["cashew", "festival", "premium"],
    rating: 4.9,
    reviewCount: 312,
  },
  {
    id: "5",
    name: "Banarasi Silk Saree",
    slug: "banarasi-silk-saree",
    description:
      "Handwoven Banarasi silk saree with gold zari work. Perfect for festivals and weddings. Delivered with care worldwide.",
    price: 8999,
    comparePrice: 12999,
    images: [CATEGORY_IMAGES.sarees],
    category: "sarees",
    inStock: true,
    isSample: false,
    tags: ["silk", "banarasi", "handwoven"],
    rating: 4.8,
    reviewCount: 87,
  },
  {
    id: "6",
    name: "Murukku Snack Pack",
    slug: "murukku-snack-pack",
    description:
      "Crispy rice flour murukku made fresh daily. A perfect tea-time snack from Tamil Nadu. Packed in airtight pouches.",
    price: 249,
    images: [CATEGORY_IMAGES.snacks],
    category: "snacks",
    inStock: true,
    isSample: true,
    weight: 250,
    tags: ["murukku", "crispy", "tamil"],
    rating: 4.6,
    reviewCount: 198,
  },
  {
    id: "7",
    name: "Premium Dry Fruits Mix",
    slug: "premium-dry-fruits",
    description:
      "Handpicked almonds, cashews, raisins and pistachios. Hygienically packed. Perfect for festivals and daily snacking.",
    price: 799,
    images: [CATEGORY_IMAGES.dryfruits],
    category: "dryfruits",
    inStock: true,
    isSample: true,
    weight: 500,
    tags: ["dryfruits", "premium", "healthy"],
    rating: 4.9,
    reviewCount: 267,
  },
  {
    id: "8",
    name: "Pochampally Ikat Dupatta",
    slug: "pochampally-ikat-dupatta",
    description:
      "Handloom Pochampally ikat dupatta with geometric patterns. GI-tagged authentic weave from Telangana.",
    price: 2499,
    images: [CATEGORY_IMAGES.sarees],
    category: "sarees",
    inStock: true,
    isSample: false,
    tags: ["ikat", "handloom", "pochampally"],
    rating: 4.7,
    reviewCount: 64,
  },
  {
    id: "9",
    name: "Sambar Powder",
    slug: "sambar-powder",
    description:
      "Authentic South Indian sambar powder ground from whole spices. No preservatives. Family recipe taste.",
    price: 179,
    images: [CATEGORY_IMAGES.millets],
    category: "millets",
    inStock: true,
    isSample: true,
    weight: 200,
    tags: ["spices", "sambar", "south-indian"],
    rating: 4.8,
    reviewCount: 145,
  },
  {
    id: "10",
    name: "Traditional Cotton Saree",
    slug: "traditional-cotton-saree",
    description:
      "Handwoven cotton saree with traditional border. Comfortable for daily wear and festive occasions.",
    price: 3499,
    comparePrice: 4499,
    images: [CATEGORY_IMAGES.sarees],
    category: "sarees",
    inStock: true,
    isSample: false,
    tags: ["cotton", "handwoven", "traditional"],
    rating: 4.6,
    reviewCount: 92,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return MOCK_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return MOCK_PRODUCTS.filter((p) => p.category === category);
}

export function getSampleProducts(): Product[] {
  return MOCK_PRODUCTS.filter((p) => p.isSample);
}

export function getProductImage(category: string): string {
  return CATEGORY_IMAGES[category] || "/images/Pickes.png";
}
