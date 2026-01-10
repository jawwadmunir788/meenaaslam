import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Meena Aslam Logo"
                width={160}
                height={45}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Meena Aslam specializes in seamless imports from China, offering sourcing, procurement, inspection and
              shipping. With trusted partners and a global network, we ensure secure, cost effective and timely
              deliveries to businesses and individuals worldwide.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-400">Join Our Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-orange-400">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="text-gray-400 hover:text-orange-400 transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-orange-400">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/our-services" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services/import-service"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Import Service
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services/export-service"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Export Service
                </Link>
              </li>
              <li>
                <Link href="/request-a-quote" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Request A Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-orange-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@meenaaslam.com" className="text-gray-400 hover:text-orange-400 transition-colors">
                  info@meenaaslam.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <a href="tel:+923362143021" className="hover:text-orange-400 transition-colors block">
                    +92 336 2143021
                  </a>
                  <a href="tel:+8615622314171" className="hover:text-orange-400 transition-colors block">
                    +86 156 2231 4171
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Office 1205, 12th Floor, Al Najeebi Tower, Saddar, Karachi, Pakistan
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-medium mb-3 text-sm">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Meena Aslam. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-orange-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923362143021"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all hover:scale-110"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </footer>
  )
}
