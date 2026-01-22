import { Package, Upload, Download, Search, ClipboardCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "Product Outsourcing",
    description: "We find the best products at competitive prices, tailored to your needs and requirements from global markets.",
    href: "/our-services/sourcing-service",
  },
  {
    icon: Package,
    title: "Product Delivery / Cargo",
    description: "Reliable cargo services ensuring safe and timely delivery of your products right to your doorstep.",
    href: "/our-services/import-service",
  },
  {
    icon: Download,
    title: "Import Service",
    description: "Comprehensive solutions for all your import needs, from documentation to logistics and clearing.",
    href: "/our-services/import-service",
  },
  {
    icon: Upload,
    title: "Export Service",
    description: "Seamless worldwide shipping via air or sea with cost effective and timely delivery solutions.",
    href: "/our-services/export-service",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection",
    description: "Thorough quality checks to ensure your goods meet high standards before shipping.",
    href: "/our-services/goods-inspection-service",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We specialize in seamless and efficient cargo solutions, ensuring that your shipments arrive safely and on
            time. Whether you're a business looking for bulk imports or a consumer seeking a reliable shipping partner,
            we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 border-none bg-white dark:bg-slate-800 hover:-translate-y-1 shadow-lg dark:shadow-slate-900/50"
            >
              <CardContent className="p-6">
                <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-600/40 dark:to-orange-500/30 rounded-2xl w-fit mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 border border-orange-200/50 dark:border-orange-500/40">
                  <service.icon className="h-8 w-8 text-orange-600 dark:text-orange-200 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-orange-500 dark:text-orange-400 font-medium text-sm hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/our-services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/20"
            >
              Explore More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

