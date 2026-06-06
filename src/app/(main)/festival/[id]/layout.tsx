import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, breadcrumbSchema, festivalBoxSchema } from "@/lib/seo";
import { getFestivalBoxById } from "@/lib/festival-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const box = getFestivalBoxById(id);

  if (!box) {
    return buildMetadata({
      title: "Festival Box Not Found",
      description: "The requested festival box could not be found on Intiki.",
      path: `/festival/${id}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${box.name} — ${box.festival} Gift Box`,
    description: box.description,
    path: `/festival/${box.id}`,
    image: box.image,
    keywords: [box.festival, box.name, "festival box NRI", "Indian festival hamper"],
  });
}

export default async function FestivalDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const box = getFestivalBoxById(id);

  return (
    <>
      {box && (
        <JsonLd
          data={[
            festivalBoxSchema(box),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Festival Boxes", path: "/festival" },
              { name: box.name, path: `/festival/${box.id}` },
            ]),
          ]}
        />
      )}
      {children}
    </>
  );
}
