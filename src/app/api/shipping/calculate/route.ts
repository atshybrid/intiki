import { NextResponse } from "next/server";
import { z } from "zod";

const shippingSchema = z.object({
  weight: z.number().min(0.1),
  country: z.string().min(2),
  category: z.enum(["food", "clothing", "general"]).default("general"),
});

const RATES: Record<string, { base: number; perKg: number }> = {
  USA: { base: 999, perKg: 450 },
  UK: { base: 899, perKg: 400 },
  Canada: { base: 949, perKg: 420 },
  Australia: { base: 1099, perKg: 480 },
  UAE: { base: 599, perKg: 250 },
  Singapore: { base: 699, perKg: 300 },
  DEFAULT: { base: 999, perKg: 450 },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { weight, country, category } = shippingSchema.parse(body);

    const rates = RATES[country.toUpperCase()] || RATES.DEFAULT;
    let cost = rates.base + rates.perKg * weight;

    if (category === "food") cost *= 1.15;
    if (category === "clothing") cost *= 0.95;

    return NextResponse.json({
      country,
      weight,
      category,
      shippingCost: Math.round(cost),
      currency: "INR",
      estimatedDays: country === "UAE" || country === "Singapore" ? "5-7" : "10-15",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
