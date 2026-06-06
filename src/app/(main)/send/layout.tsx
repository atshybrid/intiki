import { JsonLd } from "@/components/seo/json-ld";
import { SEO_PAGES, breadcrumbSchema, courierServiceSchema } from "@/lib/seo";

export const metadata = SEO_PAGES.send;

export default function SendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          courierServiceSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "International Courier", path: "/send" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
