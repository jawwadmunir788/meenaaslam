import { Ship, Package, Plane } from "lucide-react"

const features = [
  {
    icon: Ship,
    title: "Reliable Cargo Shipping",
    description: "Safe and secure shipping via sea freight with real-time tracking and insurance coverage.",
  },
  {
    icon: Package,
    title: "Complete Import Solutions",
    description: "End-to-end import services including sourcing, procurement, inspection, and delivery.",
  },
  {
    icon: Plane,
    title: "Air & Sea Freight",
    description: "Flexible shipping options to meet your timeline and budget requirements.",
  },
]

export function FeatureCards() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto -mt-32 relative z-30">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl dark:shadow-slate-900/50 hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-slate-700"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

