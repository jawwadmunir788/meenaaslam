"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Factory, Package, Clock, ShieldCheck } from "lucide-react"

const stats = [
  { icon: Users, value: 1000, suffix: "+", label: "Happy Customers" },
  { icon: Factory, value: 500, suffix: "+", label: "Reliable Manufacturers" },
  { icon: Package, value: 5000, suffix: "+", label: "Shipments Delivered" },
  { icon: Clock, value: 98, suffix: "%", label: "On-Time Delivery" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Secure Transactions" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const step = (timestamp: number) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            setCount(Math.floor(progress * value))
            if (progress < 1) {
              window.requestAnimationFrame(step)
            }
          }
          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-orange-500">
      {count}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Numbers That <span className="gradient-text">Speak Trust</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our track record reflects our commitment to excellence in cargo shipping and import services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-7 w-7 text-orange-500" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
