import { Factory, Warehouse, Anchor, Users, CheckCircle2 } from "lucide-react"

const hubFeatures = [
  { icon: Factory, title: "Near Manufacturers", description: "Direct access to thousands of factories" },
  { icon: Warehouse, title: "Warehousing", description: "Secure storage and consolidation" },
  { icon: Anchor, title: "Major Ports", description: "Close to Ningbo & Shanghai ports" },
  { icon: Users, title: "Local Team", description: "Expert staff for quality checks" },
]

export function ChinaHubSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img src="/china-warehouse-logistics-center.jpg" alt="Our China Hub" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years in China</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Central Hub in <span className="text-orange-400">China</span>
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Strategically located in the Zhejiang-Guangzhou manufacturing belt, our central hub provides direct access
              to thousands of manufacturers and suppliers. With proximity to major ports like Ningbo and Shanghai, we
              ensure efficient and cost-effective shipping solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {hubFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-orange-400" />
                <span>In-house quality inspection team</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-orange-400" />
                <span>Cargo consolidation services</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-orange-400" />
                <span>Direct factory negotiations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
