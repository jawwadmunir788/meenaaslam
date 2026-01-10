"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const countries = [
  {
    id: "usa",
    name: "United States",
    flag: "/usa-flag.png",
    isImage: true,
    description:
      "Shipping from China to USA is smooth with our reliable cargo services. We cater to businesses and individuals, ensuring fast air and sea freight options. Our expertise in USA customs regulations prevents delays, while secure warehousing and efficient distribution keep your shipments on schedule.",
    features: [
      "Fast and secure shipping across all US states",
      "Competitive rates with no hidden fees",
      "Expert handling for fragile and high-value goods",
      "Hassle-free customs clearance and documentation",
      "Secure warehousing and inventory solutions",
      "Dedicated support for tracking and assistance",
    ],
  },
  {
    id: "canada",
    name: "Canada",
    flag: "/canada-flag.png",
    isImage: true,
    description:
      "We provide reliable cargo solutions for shipments to Canada. Whether it's individual parcels or large commercial freight, our logistics network ensures your goods reach their destination in Canada safely and efficiently.",
    features: [
      "Door-to-door delivery across Canada",
      "Efficient customs brokerage and handling",
      "Competitive air and sea freight rates",
      "Secure handling of commercial and personal cargo",
      "Reliable transit times for all provinces",
      "Comprehensive tracking for full visibility",
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "/uk-flag.png",
    isImage: true,
    description:
      "Meena Aslam provides efficient and secure cargo services to businesses and individuals across the UK. Whether you need air and sea freight, we ensure reliable shipping from China to London, Manchester, Birmingham and beyond.",
    features: [
      "Fast shipping to major UK cities and surrounding areas",
      "Affordable and transparent pricing with no hidden fees",
      "Expert handling of commercial, retail, and personal shipments",
      "Comprehensive customs clearance for hassle-free imports",
      "Secure warehousing and inventory management services",
      "Real-time shipment tracking with dedicated customer support",
    ],
  },
  {
    id: "australia",
    name: "Australia",
    flag: "/australia-flag.png",
    isImage: true,
    description:
      "Shipping to Australia is made easy with our specialized cargo services. We understand the unique requirements of the Australian market and provide tailored logistics solutions to ensure your goods arrive on time.",
    features: [
      "Fast air and sea freight to Oceania",
      "Compliance with Australian customs and biosecurity",
      "Secure handling and packaging of goods",
      "End-to-end logistics from source to destination",
      "Competitive pricing for container and small shipments",
      "Professional support for import documentation",
    ],
  },
  {
    id: "europe",
    name: "Europe",
    flag: "/europe-flag.png",
    isImage: true,
    description:
      "We offer efficient cargo services across Europe, catering to businesses and consumers looking for reliable logistics from China. Our team ensures smooth transportation via air and sea, meeting the diverse needs of European markets.",
    features: [
      "Express shipping to major European cities",
      "Affordable freight options tailored to your needs",
      "Expertise in EU customs and import regulations",
      "Secure and efficient last mile delivery services",
      "Sustainable shipping solutions with eco friendly options",
      "End to end tracking for complete shipment visibility",
    ],
  },
  {
    id: "gcc",
    name: "GCC",
    flag: "/gcc-logo.png",
    isImage: true,
    description:
      "Our cargo services to the GCC region (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain) are designed for businesses and individuals requiring fast, secure and cost effective shipping. We handle commercial stock, retail goods and personal shipments with precision across the Gulf.",
    features: [
      "Fast air and sea freight to all GCC countries",
      "Tailored solutions for retail and e-commerce",
      "Comprehensive customs clearance assistance",
      "Warehousing and distribution for bulk shipments",
      "Secure transport for high-value goods",
      "24/7 customer support for seamless logistics",
    ],
  },
  {
    id: "pakistan",
    name: "Pakistan",
    flag: "/pakistan-flag.png",
    isImage: true,
    description:
      "Our cargo services in Pakistan are designed to provide affordable, secure and prompt deliveries. We specialize in transporting goods from China to all major cities, ensuring compliance with local import regulations.",
    features: [
      "Cost effective shipping with flexible delivery options",
      "Safe and secure handling of all cargo types",
      "Fast customs clearance and regulatory compliance",
      "Reliable door to door service across Pakistan",
      "Assistance with bulk and small-scale imports",
      "Real time shipment tracking for customer convenience",
    ],
  },
]

export function CountriesSection() {
  const [activeCountry, setActiveCountry] = useState(countries[0])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving Key <span className="gradient-text">Global Markets</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We specialize in cargo services for clients in Pakistan, the UAE, the USA and Europe. Our reliable logistics
            solutions ensure safe and timely deliveries, making us a trusted partner for businesses & individuals across
            these key regions.
          </p>
        </div>

        {/* Country Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => setActiveCountry(country)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all min-w-[140px] justify-center",
                activeCountry.id === country.id
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              )}
            >
              <div className="flex items-center gap-2">
                {country.isImage ? (
                  <img src={country.flag} alt={country.name} className="w-8 h-8 rounded-full object-cover" />
                ) : (
                  <span className="text-2xl leading-none">{country.flag}</span>
                )}
                <span>{country.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Country Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              {activeCountry.isImage ? (
                <img src={activeCountry.flag} alt={activeCountry.name} className="w-16 h-16 rounded-full object-cover shadow-md" />
              ) : (
                <span className="text-6xl">{activeCountry.flag}</span>
              )}
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{activeCountry.name}</h3>
                <p className="text-orange-500 font-medium">Premium Shipping Destination</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">{activeCountry.description}</p>
            <Link href="/request-a-quote">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Get A Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Why Ship to {activeCountry.name}?</h4>
            <ul className="space-y-4">
              {activeCountry.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="p-1 bg-orange-100 rounded-full mt-0.5">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
