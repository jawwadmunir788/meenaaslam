import { ShieldCheck, DollarSign, Lock, Users } from "lucide-react"

const benefits = [
  { icon: ShieldCheck, text: "Verified Suppliers & Manufacturers" },
  { icon: DollarSign, text: "Best Pricing Negotiation" },
  { icon: Lock, text: "Secure Transactions" },
  { icon: Users, text: "Dedicated Account Manager" },
]

export function SourcingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Trusted <span className="gradient-text">Sourcing & Procurement</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Finding reliable suppliers in China can be challenging. Our sourcing and procurement services connect you
              with verified manufacturers, negotiate the best prices, and handle the entire purchasing process on your
              behalf.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From product samples to bulk orders, we ensure quality control at every step. Our local team in China
              visits factories, verifies products, and manages communication to eliminate language barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/our-services"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all"
              >
                Learn More
              </a>
              <a
                href="/request-a-quote"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-500 text-orange-600 font-medium rounded-xl hover:bg-orange-50 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right Content - Benefits */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Our Sourcing?</h3>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <span className="font-medium text-gray-800">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
