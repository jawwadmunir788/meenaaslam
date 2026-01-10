import { Truck, Package, PlaneIcon, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Meena Aslam</span> International
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reliable, cost effective door to door cargo solutions from China to anywhere in the world. We handle
              sourcing, purchasing, inspection and delivery so you don't have to.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Meena Aslam specializes in seamless cargo shipping from China via air and sea. Whether you're a business
              or an individual, we manage everything from sourcing and procurement to quality inspection and delivery.
              Our expertise ensures safe, timely and hassle free shipping, no matter the destination.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Truck className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Reliable Cargo Shipping</h4>
                  <p className="text-gray-600 text-sm">Fast, safe and cost effective delivery worldwide.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Package className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Complete Import Solutions</h4>
                  <p className="text-gray-600 text-sm">Sourcing, purchasing, inspection and shipping hassle free.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <PlaneIcon className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Air & Sea Freight</h4>
                  <p className="text-gray-600 text-sm">Flexible shipping options tailored to your needs.</p>
                </div>
              </div>
            </div>

            <Link href="/how-we-work">
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 relative overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src="/cargo-shipping-warehouse-with-boxes-and-containers.jpg"
                  alt="Cargo Warehouse"
                  className="rounded-2xl object-cover w-full h-full shadow-xl"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4">
                <div className="text-3xl font-bold text-orange-500">Since 2020</div>
                <div className="text-sm text-gray-600">Trusted Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
