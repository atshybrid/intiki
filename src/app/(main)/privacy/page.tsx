import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-intiki-green mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
      <h1 className="text-2xl font-bold text-intiki-green font-[family-name:var(--font-playfair)] mb-6">
        {title}
      </h1>
      <Card>
        <CardContent className="p-6 prose prose-sm max-w-none text-gray-600 space-y-4">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        Intiki respects your privacy. We collect only information necessary to process
        international courier shipments and marketplace orders — name, address, phone,
        and email.
      </p>
      <p>
        Your data is used solely for order fulfilment, courier tracking, and customer
        support. We do not sell personal information to third parties.
      </p>
      <p>
        Payment and shipping partners (DHL, FedEx, UPS) receive only the data required
        to deliver your package internationally.
      </p>
      <p>For privacy enquiries, contact us at hello@intiki.com.</p>
    </LegalPage>
  );
}
