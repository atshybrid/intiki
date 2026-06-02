export interface FestivalBoxDetail {
  id: string;
  name: string;
  emoji: string;
  price: number;
  comparePrice?: number;
  items: number;
  image: string;
  gallery: string[];
  description: string;
  tagline: string;
  festival: string;
  deliveryDays: string;
  contents: { name: string; qty: string; image: string }[];
  highlights: string[];
}

export const FESTIVAL_BOX_DETAILS: FestivalBoxDetail[] = [
  {
    id: "sankranti",
    name: "Sankranti Box",
    emoji: "🪁",
    price: 3499,
    comparePrice: 4299,
    items: 12,
    image: "/images/snakes.png",
    gallery: ["/images/snakes.png", "/images/Pickes.png", "/images/Spces_millets.png"],
    festival: "Sankranti / Pongal",
    tagline: "Celebrate the harvest with authentic Telugu flavours",
    description:
      "Our Sankranti Box brings the warmth of Andhra & Telangana harvest festival to your doorstep abroad. Packed with traditional sweets, sesame treats, homemade pickles and festive snacks — everything amma would prepare at home.",
    deliveryDays: "7-10 days",
    contents: [
      { name: "Ariselu (Adhirasam)", qty: "500g", image: "/images/snakes.png" },
      { name: "Sunnundalu Laddu", qty: "250g", image: "/images/snakes.png" },
      { name: "Gavvalu Sweet", qty: "300g", image: "/images/snakes.png" },
      { name: "Sesame Chikki", qty: "200g", image: "/images/dry_veg_frts.png" },
      { name: "Avakaya Pickle", qty: "500g", image: "/images/Pickes.png" },
      { name: "Gongura Pickle", qty: "500g", image: "/images/Pickes.png" },
      { name: "Sakinalu", qty: "300g", image: "/images/snakes.png" },
      { name: "Pesara Murukku", qty: "250g", image: "/images/snakes.png" },
      { name: "Ragi Flour", qty: "500g", image: "/images/Spces_millets.png" },
      { name: "Sambar Powder", qty: "200g", image: "/images/Spces_millets.png" },
      { name: "Jaggery Block", qty: "500g", image: "/images/dry_veg_frts.png" },
      { name: "Festival Greeting Card", qty: "1 pc", image: "/images/cloths.png" },
    ],
    highlights: [
      "100% homemade recipes",
      "Export-safe packaging",
      "Video verification included",
      "Free worldwide shipping",
    ],
  },
  {
    id: "ugadi",
    name: "Ugadi Box",
    emoji: "🌿",
    price: 2999,
    comparePrice: 3699,
    items: 10,
    image: "/images/Pickes.png",
    gallery: ["/images/Pickes.png", "/images/Spces_millets.png", "/images/snakes.png"],
    festival: "Ugadi / Telugu New Year",
    tagline: "Start the new year with traditional Ugadi Pachadi & more",
    description:
      "Ugadi marks the Telugu New Year. Our specially curated box includes the symbolic Ugadi Pachadi ingredients, fresh pickles, traditional sweets and spices — a complete new year celebration package.",
    deliveryDays: "7-10 days",
    contents: [
      { name: "Ugadi Pachadi Kit", qty: "1 set", image: "/images/Pickes.png" },
      { name: "Mango Pickle", qty: "500g", image: "/images/Pickes.png" },
      { name: "Tomato Pickle", qty: "500g", image: "/images/Pickes.png" },
      { name: "Bobbatlu (Puran Poli)", qty: "6 pcs", image: "/images/snakes.png" },
      { name: "Pootharekulu", qty: "250g", image: "/images/snakes.png" },
      { name: "Ghee", qty: "250g", image: "/images/dry_veg_frts.png" },
      { name: "Jaggery", qty: "500g", image: "/images/dry_veg_frts.png" },
      { name: "Neem & Mango Flowers", qty: "1 set", image: "/images/Spces_millets.png" },
      { name: "Panchangam Calendar", qty: "1 pc", image: "/images/cloths.png" },
      { name: "Festive Greeting Card", qty: "1 pc", image: "/images/cloths.png" },
    ],
    highlights: [
      "Complete Ugadi ritual kit",
      "Freshly prepared items",
      "Traditional family recipes",
      "Delivered before festival",
    ],
  },
  {
    id: "diwali",
    name: "Diwali Box",
    emoji: "🪔",
    price: 4999,
    comparePrice: 6499,
    items: 15,
    image: "/images/snakes.png",
    gallery: ["/images/snakes.png", "/images/Pickes.png", "/images/cloths.png", "/images/dry_veg_frts.png"],
    festival: "Diwali / Deepavali",
    tagline: "The grandest festival box — sweets, snacks, diyas & gifts",
    description:
      "Our premium Diwali Box is our most popular festival package. Loaded with kaju katli, laddus, murukku, dry fruits, decorative diyas, and a beautiful ethnic gift — everything to celebrate the festival of lights with family abroad.",
    deliveryDays: "5-8 days",
    contents: [
      { name: "Kaju Katli", qty: "500g", image: "/images/snakes.png" },
      { name: "Motichoor Laddu", qty: "500g", image: "/images/snakes.png" },
      { name: "Murukku Mix", qty: "400g", image: "/images/snakes.png" },
      { name: "Dry Fruits Premium Mix", qty: "500g", image: "/images/dry_veg_frts.png" },
      { name: "Mango Pickle", qty: "500g", image: "/images/Pickes.png" },
      { name: "Spice Box Set", qty: "1 set", image: "/images/Spces_millets.png" },
      { name: "Decorative Diyas", qty: "12 pcs", image: "/images/Spces_millets.png" },
      { name: "Rangoli Colors", qty: "1 set", image: "/images/Spces_millets.png" },
      { name: "Ethnic Gift Wrap Saree", qty: "1 pc", image: "/images/cloths.png" },
      { name: "Ghee", qty: "500g", image: "/images/dry_veg_frts.png" },
      { name: "Chakli", qty: "300g", image: "/images/snakes.png" },
      { name: "Shankarpali", qty: "300g", image: "/images/snakes.png" },
      { name: "Coconut Burfi", qty: "250g", image: "/images/snakes.png" },
      { name: "Festival Card & Diya Set", qty: "1 set", image: "/images/cloths.png" },
      { name: "Premium Gift Box Packaging", qty: "1 box", image: "/images/cloths.png" },
    ],
    highlights: [
      "Most popular festival box",
      "Premium gift packaging",
      "Priority shipping available",
      "Video verification included",
    ],
  },
  {
    id: "rakhi",
    name: "Rakhi Box",
    emoji: "🎀",
    price: 2499,
    comparePrice: 3199,
    items: 8,
    image: "/images/cloths.png",
    gallery: ["/images/cloths.png", "/images/snakes.png", "/images/Pickes.png"],
    festival: "Raksha Bandhan",
    tagline: "Send love to your brother/sister this Rakhi",
    description:
      "Can't be home for Rakhi? Send this beautiful box with designer rakhis, traditional sweets, and a personal message card. Perfect for brothers and sisters celebrating across continents.",
    deliveryDays: "5-7 days",
    contents: [
      { name: "Designer Rakhi Set", qty: "3 pcs", image: "/images/cloths.png" },
      { name: "Kaju Katli", qty: "250g", image: "/images/snakes.png" },
      { name: "Chocolates Assorted", qty: "200g", image: "/images/snakes.png" },
      { name: "Dry Fruits Mix", qty: "200g", image: "/images/dry_veg_frts.png" },
      { name: "Personal Message Card", qty: "1 pc", image: "/images/cloths.png" },
      { name: "Roli & Chawal Kit", qty: "1 set", image: "/images/Spces_millets.png" },
      { name: "Sweet Box", qty: "300g", image: "/images/snakes.png" },
      { name: "Gift Wrapping", qty: "Premium", image: "/images/cloths.png" },
    ],
    highlights: [
      "Designer rakhi included",
      "Personal message card",
      "Express delivery option",
      "Perfect sibling gift",
    ],
  },
  {
    id: "christmas",
    name: "Christmas Box",
    emoji: "🎄",
    price: 3999,
    comparePrice: 4999,
    items: 12,
    image: "/images/dry_veg_frts.png",
    gallery: ["/images/dry_veg_frts.png", "/images/snakes.png", "/images/cloths.png"],
    festival: "Christmas & New Year",
    tagline: "Indian warmth meets Christmas celebration",
    description:
      "Celebrate Christmas with an Indian twist! Our box combines traditional Christmas treats with beloved Indian sweets, dry fruits, and festive snacks — perfect for NRI families blending cultures during the holidays.",
    deliveryDays: "7-10 days",
    contents: [
      { name: "Plum Cake (Indian Style)", qty: "500g", image: "/images/snakes.png" },
      { name: "Kaju Katli", qty: "300g", image: "/images/snakes.png" },
      { name: "Premium Dry Fruits", qty: "500g", image: "/images/dry_veg_frts.png" },
      { name: "Murukku & Chakli Mix", qty: "400g", image: "/images/snakes.png" },
      { name: "Homemade Wine (Non-Alcoholic)", qty: "500ml", image: "/images/Pickes.png" },
      { name: "Chocolate Assortment", qty: "300g", image: "/images/snakes.png" },
      { name: "Christmas Decor Items", qty: "1 set", image: "/images/cloths.png" },
      { name: "Greeting Card", qty: "1 pc", image: "/images/cloths.png" },
      { name: "Spice Cookies", qty: "300g", image: "/images/snakes.png" },
      { name: "Nuts & Raisins Mix", qty: "300g", image: "/images/dry_veg_frts.png" },
      { name: "Festive Hamper Basket", qty: "1 pc", image: "/images/cloths.png" },
      { name: "Gift Wrapping", qty: "Premium", image: "/images/cloths.png" },
    ],
    highlights: [
      "Indo-Christmas fusion box",
      "Premium hamper packaging",
      "Perfect holiday gift",
      "Worldwide delivery",
    ],
  },
];

export function getFestivalBoxById(id: string): FestivalBoxDetail | undefined {
  return FESTIVAL_BOX_DETAILS.find((box) => box.id === id);
}

export function getAllFestivalBoxes(): FestivalBoxDetail[] {
  return FESTIVAL_BOX_DETAILS;
}
