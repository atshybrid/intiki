import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllFestivalBoxes } from "@/lib/festival-data";
import { formatPrice } from "@/lib/utils";
import { SEO_PAGES } from "@/lib/seo";

export const metadata = SEO_PAGES.festival;

export default function FestivalPage() {
  const boxes = getAllFestivalBoxes();

  return (
    <div className="min-h-screen bg-intiki-cream">
      {/* Hero banner */}
      <div className="relative bg-intiki-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/home.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16 text-center">
          <Badge variant="gold" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" /> Emotional Value Packages
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-3">
            Festival Boxes
          </h1>
          <p className="text-white/80 max-w-lg mx-auto">
            Sankranti, Ugadi, Diwali, Rakhi & Christmas — curated with love from home
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boxes.map((box) => (
            <Link key={box.id} href={`/festival/${box.id}`} className="group">
              <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={box.image}
                    alt={box.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-3xl">{box.emoji}</span>
                    <Badge variant="gold" className="text-xs">{box.festival}</Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl text-intiki-green mb-1 group-hover:text-intiki-orange transition-colors">
                    {box.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">{box.tagline}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-intiki-green">
                        {formatPrice(box.price)}
                      </span>
                      {box.comparePrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">
                          {formatPrice(box.comparePrice)}
                        </span>
                      )}
                    </div>
                    <Button variant="orange" size="sm" className="font-bold">
                      View Box <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{box.items} items included</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
