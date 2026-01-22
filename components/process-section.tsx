import { FileText, Package, Ship, Home, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Request & Quote",
    description: "Tell us what you need and we provide a transparent cost estimate.",
  },
  {
    icon: Package,
    title: "Book Your Service",
    description: "Choose the service you need and confirm your order.",
  },
  {
    icon: Ship,
    title: "Secure Shipping",
    description: "Your cargo is shipped via air or sea safely and efficiently.",
  },
  {
    icon: Home,
    title: "Doorstep Delivery",
    description: "We deliver directly to your location, ensuring timely and secure arrival.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hassle Free <span className="gradient-text">Import Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our streamlined process ensures hassle-free cargo shipping from China. From sourcing to final delivery, we
            handle everything making imports simple, efficient and reliable.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-200 dark:from-orange-500 dark:to-orange-700" />
              )}

              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg dark:shadow-slate-900/50 hover:shadow-xl transition-shadow text-center border border-transparent dark:border-slate-700">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                <div className="mt-4 mb-4">
                  <div className="inline-flex p-4 bg-orange-100 dark:bg-orange-600/40 rounded-2xl border border-orange-200/50 dark:border-orange-500/40">
                    <step.icon className="h-8 w-8 text-orange-600 dark:text-orange-200" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 mr-8">
                {[
                  "Secure Logistics",
                  "Timely Shipping",
                  "Procurement",
                  "Global Delivery",
                  "Reliable Service",
                  "Affordable Rates",
                  "Hassle Free Imports",
                  "Air & Sea Freight",
                  "Expert Sourcing",
                  "Door to Door Shipping",
                  "Customer Satisfaction",
                  "Quality Inspection",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-orange-500 dark:text-orange-400 font-medium">
                    <ArrowRight className="h-4 w-4" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

