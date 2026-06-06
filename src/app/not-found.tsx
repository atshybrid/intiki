import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you are looking for could not be found on Intiki.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-intiki-cream px-4 text-center">
      <Logo size="md" className="mb-6" />
      <h1 className="text-4xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-2">
        404
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        This page could not be found. Let us help you get back home.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/">
          <Button variant="orange" size="lg" className="font-bold">
            Go Home
          </Button>
        </Link>
        <Link href="/shop">
          <Button variant="outline" size="lg" className="font-bold border-intiki-green text-intiki-green">
            Browse Shop
          </Button>
        </Link>
      </div>
    </div>
  );
}
