"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Business Owner",
    location: "Karachi, Pakistan",
    text: "Meena Aslam has been instrumental in growing my electronics import business. Their sourcing team found reliable suppliers and the shipping has always been on time.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "E-commerce Seller",
    location: "London, UK",
    text: "I was hesitant about importing from China, but Meena Aslam made the process incredibly smooth. Their quality inspection service saved me from potential issues.",
    rating: 5,
  },
  {
    name: "Mohammad Ali",
    role: "Retailer",
    location: "Dubai, UAE",
    text: "Excellent service and competitive rates. The team is responsive and keeps me updated throughout the shipping process. Highly recommended!",
    rating: 5,
  },
  {
    name: "Lisa Chen",
    role: "Import Manager",
    location: "New York, USA",
    text: "Professional, reliable, and efficient. Meena Aslam has handled multiple large shipments for us without any issues. Their procurement service is top-notch.",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    role: "Wholesaler",
    location: "Mumbai, India",
    text: "The CBM calculator and transparent pricing helped me plan my imports better. Great customer support and timely deliveries every time.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCount = 3

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return result
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 shadow-lg"
              >
                <Quote className="h-8 w-8 text-orange-300 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-orange-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-orange-500 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
