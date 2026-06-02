export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  comparePrice?: number;
  images: string[];
  category: string;
  inStock: boolean;
  isSample: boolean;
  weight?: number;
  tags: string[];
  rating: number;
  reviewCount: number;
}

export interface ShipmentTracking {
  trackingNumber: string;
  status: "PICKED_UP" | "PACKED" | "EXPORT_CLEARED" | "IN_TRANSIT" | "DELIVERED";
  origin: { city: string; country: string };
  destination: { city: string; country: string };
  estimatedDelivery?: string;
  videoUrl?: string;
  events: {
    status: string;
    location?: string;
    description: string;
    timestamp: string;
  }[];
}

export interface SendPackageForm {
  senderName: string;
  senderPhone: string;
  senderAddress: string;
  senderCity: string;
  senderPincode: string;
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  recipientCity: string;
  recipientCountry: string;
  recipientPincode: string;
  items: { description: string; quantity: number; weight: number }[];
  specialInstructions?: string;
  videoVerification: boolean;
}

export interface SampleBoxSelection {
  productId: string;
  name: string;
  quantity: number;
}
