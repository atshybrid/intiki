import { NextResponse } from "next/server";
import { MOCK_PRODUCTS } from "@/lib/mock-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  let products = MOCK_PRODUCTS;

  if (category) {
    products = products.filter((p) => p.category === category);
  }

  if (search) {
    products = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return NextResponse.json({ products, total: products.length });
}
