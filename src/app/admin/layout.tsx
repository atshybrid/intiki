import { NOINDEX_METADATA } from "@/lib/seo";

export const metadata = {
  ...NOINDEX_METADATA,
  title: "Admin",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
