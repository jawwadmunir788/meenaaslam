import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Shield, Zap, Globe, Heart, Lightbulb, Leaf } from "lucide-react"

const values = [
  { icon: Heart, title: "Customer First", description: "Your satisfaction drives our commitment to excellence." },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No hidden costs, just fair and competitive rates for every customer.",
  },
  {
    icon: Zap,
    title: "Efficiency Matters",
    description: "We streamline processes for fast, reliable and smooth shipping.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Adopting the latest technology for smarter logistics.",
  },
  { icon: Leaf, title: "Sustainable Shipping", description: "Eco-conscious practices & choices for a greener future." },
  { icon: Globe, title: "Global Reach", description: "We connect China's thriving markets with the world." },
]

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title="About Us"
        subtitle="Trusted Global Cargo Delivering Secure, Fast and Cost Effective Cargo Solutions from China to Businesses & Individuals Worldwide."
        breadcrumb="About Us"
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From Factory Floors to <span className="gradient-text">Your Doorstep</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From factory floors in China to doorsteps worldwide, Meena Aslam makes shipping effortless. We don't
                just move packages—we create connections, enabling businesses to grow and individuals to access what
                they need.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our streamlined logistics, deep market expertise and commitment to secure and timely deliveries make us
                the go-to cargo partner for hassle-free global trade.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-500">Fast</div>
                  <div className="text-sm text-gray-600">Shipping</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-500">Secure</div>
                  <div className="text-sm text-gray-600">Handling</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-500">Hassle</div>
                  <div className="text-sm text-gray-600">Free</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src="/cargo-shipping-logistics-warehouse-professional-te.jpg" alt="About Meena Aslam" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold">Since 2020</div>
                <div className="text-sm opacity-90">Trusted Partner</div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Values</span>, Your Trust
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by integrity, efficiency and customer commitment, we ensure seamless cargo solutions with security,
              transparency & unwavering excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors group">
                <div className="p-3 bg-orange-100 rounded-xl w-fit mb-4 group-hover:bg-orange-500 transition-colors">
                  <value.icon className="h-6 w-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
