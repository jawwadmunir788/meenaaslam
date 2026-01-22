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
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <PageHero
        title="About Us"
        subtitle="Trusted Global Cargo Delivering Secure, Fast and Cost Effective Cargo Solutions from China to Businesses & Individuals Worldwide."
        breadcrumb="About Us"
      />

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                From Factory Floors to <span className="gradient-text">Your Doorstep</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                From factory floors in China to doorsteps worldwide, Meena Aslam makes shipping effortless. We don't
                just move packages—we create connections, enabling businesses to grow and individuals to access what
                they need.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our streamlined logistics, deep market expertise and commitment to secure and timely deliveries make us
                the go-to cargo partner for hassle-free global trade.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-500/10 rounded-xl border border-transparent dark:border-orange-500/20">
                  <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">Fast</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Shipping</div>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-500/10 rounded-xl border border-transparent dark:border-orange-500/20">
                  <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">Secure</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Handling</div>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-500/10 rounded-xl border border-transparent dark:border-orange-500/20">
                  <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">Hassle</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Free</div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img src="/cargo-shipping-logistics-warehouse-professional-te.jpg" alt="About Meena Aslam" className="relative rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold">Since 2020</div>
                <div className="text-sm opacity-90">Trusted Partner</div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="gradient-text">Values</span>, Your Trust
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Guided by integrity, efficiency and customer commitment, we ensure seamless cargo solutions with security,
              transparency & unwavering excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 bg-gray-50 dark:bg-slate-800 rounded-2xl hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all group border border-transparent dark:border-slate-700">
                <div className="p-3 bg-orange-100 dark:bg-orange-600/40 rounded-xl w-fit mb-4 group-hover:bg-orange-500 transition-colors border border-orange-200/50 dark:border-orange-500/40">
                  <value.icon className="h-6 w-6 text-orange-600 dark:text-orange-200 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
