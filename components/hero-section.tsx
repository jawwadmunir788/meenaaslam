"use client"

import { Plane, Ship, Package, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from "next/dynamic"
import animationData from "@/public/Supply Chain and logistics.json"
import { useRef } from "react"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

export function HeroSection() {
  const lottieRef = useRef<any>(null)

  return (
    <section className="hero-section relative min-h-screen overflow-hidden pt-28 bg-gradient-to-b from-sky-200 via-sky-100 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* ... clouds ... */}
      <div className="absolute top-20 left-10 w-32 h-16 bg-white rounded-full opacity-80 blur-sm dark:opacity-10" />
      <div className="absolute top-32 left-40 w-24 h-12 bg-white rounded-full opacity-70 blur-sm dark:opacity-10" />
      <div className="absolute top-16 right-20 w-40 h-20 bg-white rounded-full opacity-80 blur-sm dark:opacity-10" />
      <div className="absolute top-40 right-60 w-28 h-14 bg-white rounded-full opacity-60 blur-sm dark:opacity-10" />

      {/* Animated Airplane */}
      <div className="absolute top-32 animate-fly z-10">
        <div className="relative animate-float">
          <Plane className="h-20 w-20 text-orange-500" strokeWidth={1.5} />
          {/* Contrail */}
          <div className="absolute top-1/2 right-full w-40 h-1 bg-gradient-to-l from-white to-transparent opacity-60 dark:from-orange-400/30" />
        </div>
      </div>

      {/* Ship at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Ocean Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-500 via-blue-400 to-transparent opacity-30 dark:from-blue-900 dark:via-blue-800" />

        {/* Ship Container */}
        <div className="absolute bottom-10 left-20 animate-wave">
          <Ship className="h-24 w-24 text-gray-700 dark:text-gray-400 opacity-80" strokeWidth={1} />
        </div>

        {/* Cargo Container */}
        <div className="absolute bottom-20 right-40 animate-sway">
          <Package className="h-16 w-16 text-orange-600 dark:text-orange-400" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column Text */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-600/30 text-orange-700 dark:text-orange-200 rounded-full text-sm font-medium mb-6 border border-transparent dark:border-orange-500/30">
              <Plane className="h-4 w-4 text-orange-600 dark:text-orange-300" />
              <span>Global Outsourcing & Shipping Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Outsource your product & Fast, Reliable Cargo <span className="gradient-text">Delivered to Your Doorstep</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
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
                  className="border-2 border-orange-500 dark:border-orange-400 text-orange-600 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-500/20 text-lg px-8 bg-transparent dark:bg-orange-950/20"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 dark:text-orange-400">5K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 dark:text-orange-400">10K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Shipments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 dark:text-orange-400">99%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">On Time</div>
              </div>
            </div>
          </div>

          {/* Right Column Animation */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="w-full max-w-[650px] aspect-square flex items-center justify-center">
              <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={true}
                autoplay={true}
                onLoaded={() => {
                  if (lottieRef.current) {
                    lottieRef.current.setSpeed(0.7)
                  }
                }}
                style={{ width: '100%', height: '100%', maxWidth: '650px' }}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>




      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-10" />
    </section>
  )
}
