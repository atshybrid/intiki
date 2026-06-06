import { NOINDEX_METADATA } from "@/lib/seo";

export const metadata = {
  ...NOINDEX_METADATA,
  title: "Shopping Cart",
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
