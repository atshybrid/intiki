import { Logo } from "@/components/layout/logo";
import { NOINDEX_METADATA } from "@/lib/seo";

export const metadata = {
  ...NOINDEX_METADATA,
  title: "Login / Register",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-intiki-cream">
      <div className="pt-8 pb-4 flex justify-center">
        <Logo size="md" />
      </div>
      {children}
    </div>
  );
}
