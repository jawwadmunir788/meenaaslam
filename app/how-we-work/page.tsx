import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Download, Upload, ClipboardCheck, Search, Package, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const expertise = [
  {
    icon: Download,
    title: "Import Services",
    description: "Reliable and secure import solutions tailored to your business needs.",
  },
  { icon: Upload, title: "Export Services", description: "We handle global shipments with precision and compliance." },
  {
    icon: ClipboardCheck,
    title: "Inspection Services",
    description: "Thorough quality checks to ensure defect-free and verified products.",
  },
  {
    icon: Search,
    title: "Sourcing Solutions",
    description: "Find the best manufacturers and suppliers with our expert assistance.",
  },
  {
    icon: Package,
    title: "Procurement Support",
    description: "Complete procurement management for cost effective sourcing.",
  },
  {
    icon: CheckCircle,
    title: "Transaction Success",
    description: "Ensuring smooth deals, secure payments and on-time order fulfillment.",
  },
]

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title="How We Work"
        subtitle="Our Process. A Step by Step Guide to Smooth and Efficient Cargo Shipping."
        breadcrumb="How We Work"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* From Inspection to Delivery */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From Inspection to <span className="gradient-text">Delivery</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A complete end-to-end solution ensuring your stock is inspected, verified and shipped securely from
                China to your desired destination.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Sourcing from China can be challenging, but with our all-in-one solution, you don't have to worry about
                a thing. From supplier verification and quality control to secure shipping and logistics, we handle
                everything for you.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-orange-50 rounded-xl text-center">
                  <div className="text-lg font-bold text-orange-500">Quality Check</div>
                  <div className="text-xs text-gray-600">Before shipment</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl text-center">
                  <div className="text-lg font-bold text-orange-500">Seamless</div>
                  <div className="text-xs text-gray-600">Logistics</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl text-center">
                  <div className="text-lg font-bold text-orange-500">Risk Free</div>
                  <div className="text-xs text-gray-600">Sourcing</div>
                </div>
              </div>
            </div>

            <div>
              <img src="/warehouse-worker-checking-inventory-clipboard-carg.jpg" alt="Inspection Process" className="rounded-3xl shadow-xl" />
            </div>
          </div>

          {/* Our Expertise */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer six key services ensuring reliable, professional, efficient and secure sourcing, inspection and
              logistics solutions for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-orange-100 rounded-xl w-fit mb-4">
                  <item.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today and let us handle your logistics with precision and care.
            </p>
            <Link href="/request-a-quote">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Get A Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
