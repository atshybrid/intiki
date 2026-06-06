import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SEO_PAGES } from "@/lib/seo";

export const metadata = SEO_PAGES.terms;

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-intiki-green mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
      <h1 className="text-2xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-6">
        Terms of Service
      </h1>
      <Card>
        <CardContent className="p-6 prose prose-sm max-w-none text-gray-600 space-y-4">
          <p>
            By using Intiki&apos;s international courier and marketplace services, you agree
            to our terms. Intiki acts as a home-to-home marketplace and courier platform
            connecting Indian families with NRIs worldwide.
          </p>
          <p>
            Users are responsible for ensuring items sent comply with international customs
            regulations. Prohibited items include illegal substances, weapons, and items
            restricted by destination country laws.
          </p>
          <p>
            Sample box orders are non-refundable once shipped. Bulk order credits from sample
            purchases apply to orders of ₹10,000 or more within 30 days.
          </p>
          <p>Intiki reserves the right to refuse shipments that violate export regulations.</p>
        </CardContent>
      </Card>
    </div>
  );
}
