"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const samples = [
  { id: "SMP-001", items: "Mango Pickle, Gongura, Ragi, Sweet", status: "SHIPPED", date: "2026-03-05" },
];

export default function SamplesPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Link href="/account" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-intiki-green mb-4">
        <ArrowLeft className="h-4 w-4" /> Account
      </Link>
      <h1 className="text-2xl font-bold text-intiki-green mb-6">Sample Requests</h1>
      {samples.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500 mb-4">No sample requests yet</p>
            <Link href="/sample-box" className="text-intiki-orange font-semibold hover:underline">
              Order Sample Box →
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {samples.map((s) => (
            <Card key={s.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">{s.id}</p>
                    <p className="text-xs text-gray-500">{s.items}</p>
                  </div>
                  <Badge variant="orange">{s.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
