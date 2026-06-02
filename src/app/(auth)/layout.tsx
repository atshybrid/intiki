import { Logo } from "@/components/layout/logo";

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
