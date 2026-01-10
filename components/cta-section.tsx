import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship Your Cargo?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Get started today with our reliable and cost-effective shipping solutions. Contact us for a free quote!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/request-a-quote">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Get A Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="tel:+923362143021">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
