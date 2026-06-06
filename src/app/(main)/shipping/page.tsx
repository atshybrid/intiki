import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SEO_PAGES } from "@/lib/seo";

export const metadata = SEO_PAGES.shipping;

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-intiki-green mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
      <h1 className="text-2xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-6">
        Shipping Policy
      </h1>
      <Card>
        <CardContent className="p-6 prose prose-sm max-w-none text-gray-600 space-y-4">
          <p>
            Intiki ships to 150+ countries via trusted partners DHL, FedEx, and UPS.
            International courier delivery typically takes 7–15 business days depending
            on destination.
          </p>
          <p>
            <strong>Free door pickup and free packing</strong> are included for all
            international courier shipments booked through Intiki in India.
          </p>
          <p>
            Food items are packed in export-safe, hygienic packaging. Customs
            documentation is handled by Intiki on your behalf.
          </p>
          <p>
            Shipping costs for marketplace orders are calculated at checkout based on
            weight and destination. Festival boxes and subscription plans include
            shipping in the listed price.
          </p>
          <p>
            Track your shipment anytime at{" "}
            <Link href="/track" className="text-intiki-green font-semibold hover:underline">
              Track Courier
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
