"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { name: "Import Service", href: "/our-services/import-service" },
  { name: "Export Service", href: "/our-services/export-service" },
  { name: "Procurement Services", href: "/our-services/procurement-services" },
  { name: "Sourcing Service", href: "/our-services/sourcing-service" },
  { name: "Goods Inspection Service", href: "/our-services/goods-inspection-service" },
  { name: "CBM Calculator", href: "/cbm-calculator" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@meenaaslam.com"
              className="flex items-center gap-1 hover:text-orange-200 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@meenaaslam.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+923362143021" className="flex items-center gap-1 hover:text-orange-200 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+92 336 2143021</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Meena Aslam Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Our Services
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px]">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/how-we-work" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              How We Work
            </Link>
            <Link href="/why-choose-us" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Why Choose Us
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/request-a-quote">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg">
                Get A Quote
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium py-2">
                Home
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-orange-500 font-medium py-2">
                About Us
              </Link>
              <Link href="/our-services" className="text-gray-700 hover:text-orange-500 font-medium py-2">
                Our Services
              </Link>
              <Link href="/how-we-work" className="text-gray-700 hover:text-orange-500 font-medium py-2">
                How We Work
              </Link>
              <Link href="/why-choose-us" className="text-gray-700 hover:text-orange-500 font-medium py-2">
                Why Choose Us
              </Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-orange-500 font-medium py-2">
                Contact Us
              </Link>
              <div className="flex flex-col gap-2 mt-2">
                <Link href="/request-a-quote">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                    Get A Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
