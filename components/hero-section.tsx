"use client"

import { Plane, Ship, Package, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      {/* Sky Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #87CEEB 0%, #B0E0E6 30%, #E0F7FA 60%, #f0f9ff 100%)",
        }}
      />

      {/* Clouds */}
      <div className="absolute top-20 left-10 w-32 h-16 bg-white rounded-full opacity-80 blur-sm" />
      <div className="absolute top-32 left-40 w-24 h-12 bg-white rounded-full opacity-70 blur-sm" />
      <div className="absolute top-16 right-20 w-40 h-20 bg-white rounded-full opacity-80 blur-sm" />
      <div className="absolute top-40 right-60 w-28 h-14 bg-white rounded-full opacity-60 blur-sm" />

      {/* Animated Airplane */}
      <div className="absolute top-32 animate-fly z-10">
        <div className="relative animate-float">
          <Plane className="h-20 w-20 text-orange-500 transform rotate-[-10deg]" strokeWidth={1.5} />
          {/* Contrail */}
          <div className="absolute top-1/2 right-full w-40 h-1 bg-gradient-to-l from-white to-transparent opacity-60" />
        </div>
      </div>

      {/* Ship at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Ocean Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-500 via-blue-400 to-transparent opacity-30" />

        {/* Ship Container */}
        <div className="absolute bottom-10 left-20 animate-wave">
          <Ship className="h-24 w-24 text-gray-700 opacity-80" strokeWidth={1} />
        </div>

        {/* Cargo Container */}
        <div className="absolute bottom-20 right-40 animate-sway">
          <Package className="h-16 w-16 text-orange-600" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
            <Plane className="h-4 w-4" />
            <span>Global Shipping Solutions</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Fast, Reliable Cargo <span className="gradient-text">Delivered to Your Doorstep</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
            From China to anywhere in the world, we ensure safe, timely and cost effective delivery through air and sea.
            Your cargo, our commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/request-a-quote">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl text-lg px-8 animate-pulse-glow"
              >
                Get A Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/how-we-work">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 text-lg px-8 bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">5K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">10K+</div>
              <div className="text-sm text-gray-600">Shipments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500">99%</div>
              <div className="text-sm text-gray-600">On Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
