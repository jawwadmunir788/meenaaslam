import { Shield, Award, Globe, Headphones, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Years of experience in global cargo and logistics.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Thorough inspections ensure high standards before shipping.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Shipping solutions from China to anywhere in the world.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Dedicated assistance for smooth, hassle free shipping experiences.",
  },
]

export function WhyTrustSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why <span className="text-orange-400">Trust Us?</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience, reliability and cost effective solutions. Our expertise ensures safe, timely and hassle free
              cargo shipping from China to anywhere in the world.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Since 2020 Meena Aslam has simplified global shipping with seamless logistics, competitive pricing and top
              tier customer service. From procurement to final delivery, we ensure every step is handled with precision
              and care.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="p-2 bg-orange-600/40 rounded-lg border border-orange-500/50">
                    <feature.icon className="h-5 w-5 text-orange-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/why-choose-us">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Uncover More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-3xl p-8">
              <img src="/cargo-logistics-team-professional-shipping.jpg" alt="Trust Meena Aslam" className="rounded-2xl w-full shadow-2xl" />
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold">99%</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
