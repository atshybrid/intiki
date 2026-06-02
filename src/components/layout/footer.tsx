import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { Logo } from "@/components/layout/logo";

const footerLinks = {
  services: [
    { label: "Family Courier", href: "/send" },
    { label: "International Courier", href: "/#international-courier" },
    { label: "Free Packing & Pickup", href: "/#free-packing" },
    { label: "Shop From India", href: "/shop" },
    { label: "Sample Box", href: "/sample-box" },
    { label: "Amma Box", href: "/subscription" },
    { label: "Festival Boxes", href: "/festival" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Track Shipment", href: "/track" },
    { label: "FAQs", href: "/#faqs" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Shipping Policy", href: "/shipping" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-intiki-green text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-white/70 leading-relaxed">
              {BRAND.description}
            </p>
            <p className="text-intiki-gold font-medium text-sm">
              {BRAND.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Intiki. All rights reserved.
          </p>
          <p className="text-sm text-intiki-gold">
            🧡 {BRAND.subtext}
          </p>
        </div>
      </div>
    </footer>
  );
}
