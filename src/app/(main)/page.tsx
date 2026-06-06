import { HeroSection } from "@/components/home/hero-section";
import { FeaturesBar } from "@/components/home/features-bar";
import { CourierSection } from "@/components/home/courier-section";
import { FreePackingSection } from "@/components/home/free-packing-section";
import { SampleFlowSection } from "@/components/home/sample-flow-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { FestivalSection } from "@/components/home/festival-section";
import { TrackingSection } from "@/components/home/tracking-section";
import { PromoCardsSection } from "@/components/home/promo-cards-section";
import { SubscriptionSection } from "@/components/home/subscription-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FAQSection } from "@/components/home/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import {
  courierServiceSchema,
  faqSchema,
  organizationSchema,
  SEO_PAGES,
  websiteSchema,
} from "@/lib/seo";

export const metadata = SEO_PAGES.home;

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          websiteSchema(),
          courierServiceSchema(),
          faqSchema(),
        ]}
      />
      <HeroSection />
      <FeaturesBar />
      <CourierSection />
      <FreePackingSection />
      <SampleFlowSection />
      <CategoriesSection />
      <FestivalSection />
      <TrackingSection />
      <PromoCardsSection />
      <SubscriptionSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
