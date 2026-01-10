import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Package, Upload, Download, Search, ClipboardCheck, Calculator, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Download,
    title: "Import Service",
    description:
      "Reliable and secure import solutions tailored to your business needs. We handle all your import requirements from logistics to packaging and invoicing.",
    href: "/our-services/import-service",
    features: [
      "End to End Import Support",
      "Real Time Cargo Tracking",
      "Flexible Import Options",
      "Trusted Global Network",
    ],
  },
  {
    icon: Upload,
    title: "Export Service",
    description:
      "We handle global shipments with precision and compliance. Seamless worldwide shipping via air or sea with cost effective and timely delivery.",
    href: "/our-services/export-service",
    features: ["Global Shipping Coverage", "Customs Documentation", "Competitive Rates", "Secure Packaging"],
  },
  {
    icon: Package,
    title: "Procurement Services",
    description:
      "Complete procurement management for cost effective and efficient sourcing. We handle purchase, payments & logistics ensuring smooth imports.",
    href: "/our-services/procurement-services",
    features: ["Supplier Verification", "Payment Management", "Quality Control", "Cost Optimization"],
  },
  {
    icon: Search,
    title: "Sourcing Service",
    description:
      "Find the best manufacturers and suppliers with our expert assistance. We source products at competitive prices tailored to your needs.",
    href: "/our-services/sourcing-service",
    features: ["Market Research", "Supplier Matching", "Price Negotiation", "Sample Coordination"],
  },
  {
    icon: ClipboardCheck,
    title: "Goods Inspection Service",
    description:
      "Thorough quality checks to ensure defect-free and verified products before shipping. Our inspection services guarantee high standards.",
    href: "/our-services/goods-inspection-service",
    features: ["Pre-shipment Inspection", "Quality Reports", "Photo Documentation", "Compliance Check"],
  },
  {
    icon: Calculator,
    title: "CBM Calculator",
    description:
      "Calculate your shipping volume easily with our CBM calculator. Get accurate measurements for your cargo shipping needs.",
    href: "/cbm-calculator",
    features: ["Volume Calculation", "Weight Estimation", "Cost Preview", "Multiple Units"],
  },
]

export default function OurServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title="Our Services"
        subtitle="Comprehensive cargo solutions tailored to your business needs. From import to export, sourcing to inspection, we've got you covered."
        breadcrumb="Our Services"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 border-none bg-white shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl w-fit mb-6 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <service.icon className="h-10 w-10 text-orange-500 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={service.href}>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
