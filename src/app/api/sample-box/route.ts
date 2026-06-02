import { NextResponse } from "next/server";
import { z } from "zod";

const sampleRequestSchema = z.object({
  userId: z.string(),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().min(1).max(1),
  })).min(2).max(6),
  shippingAddress: z.object({
    line1: z.string(),
    city: z.string(),
    country: z.string(),
    pincode: z.string(),
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = sampleRequestSchema.parse(body);

    const requestId = `SMP-${Date.now()}`;

    return NextResponse.json({
      id: requestId,
      status: "PENDING",
      message: "Sample box request submitted. We'll ship within 3-5 business days.",
      price: 499,
      itemCount: data.items.length,
      ...data,
    }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({
    sampleBoxPrice: 499,
    maxItems: 6,
    minItems: 2,
    bulkOrderThreshold: 10000,
    creditOnBulkOrder: true,
  });
}
