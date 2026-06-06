import type { Metadata } from "next";
import { BRAND, FAQS } from "@/lib/constants";
import { absoluteUrl, SITE } from "@/lib/site";
import type { Product } from "@/types";
import type { FestivalBoxDetail } from "@/lib/festival-data";

const DEFAULT_KEYWORDS = [
  "Intiki courier",
  "international courier India",
  "send food from India to USA",
  "NRI courier service",
  "Indian pickles abroad",
  "homemade food delivery international",
  "shop Indian products online",
  "sample box India",
  "festival boxes NRI",
  "free door pickup India",
  "DHL FedEx UPS India courier",
  "intikicourier",
];

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  image?: string;
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
  image = SITE.ogImage,
  type = "website",
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image);
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.BING_SITE_VERIFICATION;

  return {
    title,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${BRAND.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: SITE.twitterHandle,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    verification: {
      ...(googleVerification ? { google: googleVerification } : {}),
      ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    description: SITE.defaultDescription,
    email: SITE.email,
    slogan: BRAND.tagline,
    areaServed: "Worldwide",
    sameAs: [
      "https://www.intikicourier.com",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.defaultDescription,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: absoluteUrl(SITE.logo),
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/shop?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function courierServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "International Courier from India",
    name: "Intiki International Courier",
    description:
      "Door-to-door international courier from India to 150+ countries. Free pickup, free export packing, video verification, DHL FedEx UPS delivery.",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Singapore" },
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/send"),
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) => absoluteUrl(img)),
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/shop/${product.slug}`),
      priceCurrency: "INR",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: SITE.name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };
}

export function festivalBoxSchema(box: FestivalBoxDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: box.name,
    description: box.description,
    image: box.gallery.map((img) => absoluteUrl(img)),
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/festival/${box.id}`),
      priceCurrency: "INR",
      price: box.price,
      availability: "https://schema.org/InStock",
    },
  };
}

export const SEO_PAGES = {
  home: buildMetadata({
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    path: "/",
    keywords: [
      "intikicourier.com",
      "Intiki international courier",
      "India to NRI delivery",
    ],
  }),
  shop: buildMetadata({
    title: "Shop Authentic Indian Products Online",
    description:
      "Shop pickles, snacks, millets, sarees, dry fruits and homemade foods from verified Indian vendors. International delivery to USA, UK, Canada, Australia and 150+ countries.",
    path: "/shop",
    keywords: ["shop Indian products", "Indian pickles online", "NRI shopping India"],
  }),
  send: buildMetadata({
    title: "Send International Courier from India",
    description:
      "Send homemade food, pickles, clothes and family packs from India worldwide. Free door pickup, free export packing, video verification, DHL FedEx UPS delivery.",
    path: "/send",
    keywords: ["send courier India to USA", "family courier India", "free packing courier"],
  }),
  track: buildMetadata({
    title: "Track International Courier Shipment",
    description:
      "Track your Intiki international courier in real time — from door pickup in India to delivery at your NRI address worldwide.",
    path: "/track",
    keywords: ["track courier India", "international shipment tracking"],
  }),
  sampleBox: buildMetadata({
    title: "Sample Box — Taste Before You Order",
    description:
      "Order Intiki Sample Box for ₹499. Try pickles, snacks and millets at home, verify quality, then confirm bulk order with confidence.",
    path: "/sample-box",
    keywords: ["sample box India", "taste before order", "NRI sample box"],
  }),
  subscription: buildMetadata({
    title: "Amma Box Monthly Subscription",
    description:
      "Monthly subscription box of authentic Indian pickles, snacks and homemade foods delivered to NRIs worldwide. Amma Lite, Premium and Family plans.",
    path: "/subscription",
    keywords: ["amma box subscription", "monthly Indian food box NRI"],
  }),
  festival: buildMetadata({
    title: "Festival Boxes for NRIs",
    description:
      "Curated Sankranti, Ugadi, Diwali, Rakhi and Christmas festival boxes with authentic Indian sweets, snacks and pickles — delivered internationally.",
    path: "/festival",
    keywords: ["Diwali box NRI", "Sankranti box USA", "festival hamper India"],
  }),
  about: buildMetadata({
    title: "About Intiki — Home-to-Home Marketplace",
    description:
      "Intiki connects Indian families with NRIs worldwide through international courier and authentic Indian marketplace. From Home, With Love.",
    path: "/about",
  }),
  contact: buildMetadata({
    title: "Contact Intiki",
    description:
      "Contact Intiki for international courier, sample box, festival boxes and shop enquiries. We're here to help NRIs stay connected with home.",
    path: "/contact",
  }),
  privacy: buildMetadata({
    title: "Privacy Policy",
    description: "Intiki privacy policy — how we collect, use and protect your personal data for courier and marketplace orders.",
    path: "/privacy",
  }),
  terms: buildMetadata({
    title: "Terms of Service",
    description: "Intiki terms of service for international courier shipments and marketplace orders.",
    path: "/terms",
  }),
  shipping: buildMetadata({
    title: "Shipping Policy",
    description:
      "Intiki shipping policy — international delivery via DHL, FedEx and UPS to 150+ countries. Free pickup and packing in India.",
    path: "/shipping",
  }),
} as const;

export const NOINDEX_METADATA = buildMetadata({
  title: "Account",
  description: "Intiki account area",
  noIndex: true,
});
