import { NextResponse } from "next/server";

const DEMO_SHIPMENTS: Record<string, object> = {
  INTK20260315001: {
    trackingNumber: "INTK20260315001",
    status: "IN_TRANSIT",
    origin: { city: "Hyderabad", country: "India" },
    destination: { city: "New Jersey", country: "USA" },
    estimatedDelivery: "2026-03-20",
    events: [
      { status: "PICKED_UP", location: "Hyderabad", description: "Package picked up", timestamp: "2026-03-10T10:00:00Z" },
      { status: "PACKED", location: "Hyderabad Hub", description: "Export packaging completed", timestamp: "2026-03-11T14:30:00Z" },
      { status: "EXPORT_CLEARED", location: "Hyderabad Customs", description: "Customs cleared", timestamp: "2026-03-12T09:00:00Z" },
      { status: "IN_TRANSIT", location: "In Flight", description: "In transit to USA", timestamp: "2026-03-13T06:00:00Z" },
    ],
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const trackingNumber = searchParams.get("trackingNumber");

  if (!trackingNumber) {
    return NextResponse.json({ error: "Tracking number required" }, { status: 400 });
  }

  const shipment = DEMO_SHIPMENTS[trackingNumber.toUpperCase()];

  if (!shipment) {
    return NextResponse.json({ error: "Shipment not found" }, { status: 404 });
  }

  return NextResponse.json(shipment);
}

export async function POST(request: Request) {
  const body = await request.json();
  const trackingNumber = `INTK${Date.now()}`;

  return NextResponse.json({
    trackingNumber,
    status: "PICKED_UP",
    message: "Pickup scheduled successfully",
    ...body,
  }, { status: 201 });
}
