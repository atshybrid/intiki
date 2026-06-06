export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.intikicourier.com";

export const SITE_NAME = "Intiki";
export const SITE_DOMAIN = "www.intikicourier.com";

export const SITE = {
  name: SITE_NAME,
  url: SITE_URL,
  domain: SITE_DOMAIN,
  email: "hello@intikicourier.com",
  phone: "+91-80000-00000",
  locale: "en_IN",
  defaultTitle: "Intiki — From Home, With Love.",
  defaultDescription:
    "International courier & marketplace from India — send homemade food, pickles, clothes and shop authentic Indian products. Free door pickup, free packing, DHL FedEx UPS delivery to 150+ countries.",
  ogImage: "/images/home.png",
  logo: "/images/Intiki_logo.png",
  twitterHandle: "@intikicourier",
} as const;

export function absoluteUrl(path = ""): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
