import { NOINDEX_METADATA } from "@/lib/seo";

export const metadata = {
  ...NOINDEX_METADATA,
  title: "Dashboard",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
