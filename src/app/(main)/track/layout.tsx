import { SEO_PAGES } from "@/lib/seo";

export const metadata = SEO_PAGES.track;

export default function TrackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
