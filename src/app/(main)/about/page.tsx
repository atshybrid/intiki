import { BRAND } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Shield, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <h1 className="text-2xl font-bold text-intiki-navy mb-2">About Intiki</h1>
      <p className="text-intiki-gold font-medium mb-6">{BRAND.tagline}</p>

      <div className="prose prose-sm max-w-none text-gray-600 space-y-4 mb-8">
        <p>
          Intiki is not just a courier company. We are a Home-to-Home Marketplace that
          connects Indian families with their NRI loved ones worldwide.
        </p>
        <p>
          Whether your amma packs homemade pickles and sweets, or you want to shop
          authentic Indian products from verified vendors — Intiki handles pickup,
          quality checks, export packaging, customs, and international delivery.
        </p>
        <p>
          Our unique Sample Box service lets you try before you buy big, building trust
          that no other courier can offer. Because we&apos;re not shipping packages —
          we&apos;re delivering love from home.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { icon: Heart, title: "Emotional Connection", desc: "Every package carries love from home" },
          { icon: Globe, title: "150+ Countries", desc: "Worldwide delivery to NRIs everywhere" },
          { icon: Shield, title: "Trust First", desc: "Sample boxes & video verification" },
          { icon: Users, title: "Family Focused", desc: "Built for Indian families abroad" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title}>
              <CardContent className="p-5">
                <Icon className="h-6 w-6 text-intiki-navy mb-2" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
