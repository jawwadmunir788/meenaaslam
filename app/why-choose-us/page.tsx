import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Clock, Target, Shield, Award, Truck, Package, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { value: "5000+", label: "Happy Customers" },
  { value: "500+", label: "Reliable Manufacturers" },
  { value: "10000+", label: "Shipments Delivered" },
  { value: "99%", label: "On Time Delivery" },
  { value: "100%", label: "Secure Transactions" },
]

const expertise = [
  {
    icon: Truck,
    title: "Logistics",
    description: "We optimize air and sea freight for fast, cost effective and secure global deliveries.",
  },
  {
    icon: Target,
    title: "Sourcing",
    description: "Connecting businesses with trusted manufacturers and suppliers for quality products.",
  },
  {
    icon: Package,
    title: "Procurement",
    description: "Handling bulk and small scale purchasing with precision and reliability.",
  },
  {
    icon: Shield,
    title: "Inspection",
    description: "Conducting rigorous quality checks to guarantee compliance and authenticity.",
  },
  {
    icon: Award,
    title: "Warehousing",
    description: "Secure, well managed storage solutions that optimize inventory management.",
  },
]

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <PageHero
        title="Why Choose Us"
        subtitle="Experience Trust, Efficiency & Cost Effective Logistics with Our Expert Cargo Solutions."
        breadcrumb="Why Choose Us"
      />

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          {/* Speed & Precision */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img src="/fast-shipping-delivery-timer-clock-cargo.jpg" alt="Speed and Precision" className="relative rounded-3xl shadow-xl w-full" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Speed & <span className="gradient-text">Precision</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Delivering excellence through optimized processes, real time tracking and seamless global cargo
                solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                In today's fast paced trade environment, efficiency is key. We ensure your cargo moves quickly and
                smoothly, reducing transit times and eliminating unnecessary delays.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-600/40 rounded-lg border border-orange-200/50 dark:border-orange-500/40">
                    <Clock className="h-5 w-5 text-orange-600 dark:text-orange-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Rapid Deliveries</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Minimized transit times for faster global shipping.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-600/40 rounded-lg border border-orange-200/50 dark:border-orange-500/40">
                    <Target className="h-5 w-5 text-orange-600 dark:text-orange-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Optimized Processes</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Streamlined logistics for maximum efficiency.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-600/40 rounded-lg border border-orange-200/50 dark:border-orange-500/40">
                    <Shield className="h-5 w-5 text-orange-600 dark:text-orange-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Real Time Tracking</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Stay updated with live shipment monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Expertise */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Proven <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Decades of experience in logistics, sourcing and global trade. Delivering seamless, secure and efficient
              cargo solutions worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-900 border border-transparent dark:border-slate-700/50 rounded-2xl text-center hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all hover:-translate-y-1 shadow-md"
              >
                <div className="p-4 bg-orange-100 dark:bg-orange-600/40 rounded-2xl w-fit mx-auto mb-4 border border-orange-200/50 dark:border-orange-500/40">
                  <item.icon className="h-8 w-8 text-orange-600 dark:text-orange-200" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-12 mb-20 shadow-xl border border-transparent dark:border-slate-700">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400 dark:text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Experience the <span className="gradient-text">Difference?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Meena Aslam for their cargo needs.
            </p>
            <Link href="/contact-us">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/20"
              >
                Contact Us Today
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
