"use client";

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <h1 className="text-2xl font-bold text-intiki-navy mb-1">Contact Us</h1>
      <p className="text-sm text-gray-500 mb-6">
        We&apos;re here to help — reach out anytime
      </p>

      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        {[
          { icon: Phone, label: "Phone", value: "+91 98765 43210" },
          { icon: Mail, label: "Email", value: "hello@intiki.com" },
          { icon: MapPin, label: "Office", value: "Hyderabad, India" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label}>
              <CardContent className="p-4 text-center">
                <Icon className="h-5 w-5 text-intiki-navy mx-auto mb-2" />
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Send a Message
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Email Address" />
          <Input placeholder="Subject" />
          <textarea
            placeholder="How can we help?"
            className="flex min-h-[120px] w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-intiki-navy/30"
          />
          <Button variant="orange" className="w-full" size="lg">
            Send Message
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
