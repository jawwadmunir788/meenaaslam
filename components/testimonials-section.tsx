"use client"

import { useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

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
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const timer = setInterval(() => {
      api.scrollNext()
    }, 5000)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    return () => clearInterval(timer)
  }, [api])

  return (
    <section className="py-20 bg-white overflow-hidden">
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
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl border border-orange-100/50">
                    <Quote className="h-10 w-10 text-orange-200 mb-6" />
                    <p className="text-gray-600 mb-8 leading-relaxed italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 leading-none mb-1">{testimonial.name}</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.role}</p>
                        <p className="text-xs text-orange-500 font-medium">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 bg-white hover:bg-orange-50 text-orange-500 border-orange-200" />
              <CarouselNext className="-right-12 bg-white hover:bg-orange-50 text-orange-500 border-orange-200" />
            </div>
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === current ? "bg-orange-500 w-8" : "bg-gray-200 w-2 hover:bg-gray-300"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
