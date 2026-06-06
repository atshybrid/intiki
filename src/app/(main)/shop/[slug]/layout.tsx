import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, productSchema } from "@/lib/seo";
import { getProductBySlug } from "@/lib/mock-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: "Product Not Found",
      description: "The requested product could not be found on Intiki.",
      path: `/shop/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${product.name} — Buy Online`,
    description: product.description,
    path: `/shop/${product.slug}`,
    image: product.images[0],
    keywords: product.tags,
    type: "article",
  });
}

export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  return (
    <>
      {product && (
        <JsonLd
          data={[
            productSchema(product),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: product.name, path: `/shop/${product.slug}` },
            ]),
          ]}
        />
      )}
      {children}
    </>
  );
}
