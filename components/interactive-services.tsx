"use client"

import { useState } from "react"
import { Search, Package, Home, Truck, ShieldCheck, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const services = [
    {
        id: "outsource",
        title: "Product Outsourcing",
        description: "We find the best manufacturers and suppliers globally, ensuring high-quality products at the most competitive prices tailored to your business needs.",
        icon: Search,
        color: "orange",
    },
    {
        id: "delivery",
        title: "Cargo Delivery",
        description: "Reliable and fast shipping solutions. We handle everything from pickup to transit, ensuring your goods move efficiently across borders.",
        icon: Truck,
        color: "blue",
    },
    {
        id: "door-to-door",
        title: "Door to Door",
        description: "Complete hands-off logistics. We pick up from the supplier and deliver directly to your warehouse or doorstep with all duties paid.",
        icon: Home,
        color: "green",
    },
    {
        id: "quality",
        title: "Quality Inspection",
        description: "Professional multi-stage quality checks before shipping to ensure your products meet your specifications and standards.",
        icon: ShieldCheck,
        color: "purple",
    },
    {
        id: "global",
        title: "Global Sourcing",
        description: "Expanding your reach to international markets with verified suppliers and secure payment gateways.",
        icon: Globe,
        color: "teal",
    },
]

export function InteractiveServices() {
    const [activeService, setActiveService] = useState(services[0])

    return (
        <section className="py-24 bg-[#f8fafc] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Everything You Need <span className="gradient-text">In One Place</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        You think of a product, and we handle the rest—from sourcing to doorstep delivery.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
                    {/* Left: Thinking Person Image */}
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                        <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
                            <motion.img
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                src="/new_image.png"
                                alt="Thinking Entrepreneur"
                                className="w-full h-full object-contain mix-blend-multiply"
                            />
                            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-orange-100 hidden md:block">
                                <p className="text-sm font-medium text-gray-800">"I need reliable sourcing..."</p>
                            </div>
                        </div>
                    </div>

                    {/* Center: Interactive Arc Layout (Desktop) / Grid (Mobile) */}
                    <div className="w-full lg:w-1/3 relative h-[400px] flex items-center justify-center">
                        {/* Desktop Arc */}
                        <div className="hidden lg:block relative w-full h-full">
                            {services.map((service, index) => {
                                // Calculate position in a semi-circle arc on the right of the person
                                const total = services.length
                                const angle = (index / (total - 1)) * Math.PI - Math.PI / 2 // -90 to 90 degrees
                                const radiusX = 180
                                const radiusY = 180
                                const x = Math.cos(angle) * radiusX
                                const y = Math.sin(angle) * radiusY

                                return (
                                    <motion.button
                                        key={service.id}
                                        onMouseEnter={() => setActiveService(service)}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        style={{
                                            left: `calc(50% + ${x}px - 40px)`,
                                            top: `calc(50% + ${y}px - 40px)`,
                                        }}
                                        className={cn(
                                            "absolute w-20 h-20 rounded-full flex items-center justify-center p-5 transition-all duration-300 shadow-lg",
                                            activeService.id === service.id
                                                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white scale-125 z-10"
                                                : "bg-white text-gray-600 hover:text-orange-500 z-0"
                                        )}
                                    >
                                        <service.icon className="w-full h-full" />
                                        {activeService.id === service.id && (
                                            <motion.div
                                                layoutId="active-ring"
                                                className="absolute -inset-2 border-2 border-orange-500 rounded-full"
                                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                            />
                                        )}
                                    </motion.button>
                                )
                            })}
                            {/* Connecting Arc Line */}
                            <svg className="absolute inset-0 w-full h-full -z-10 overflow-visible opacity-20 hidden lg:block">
                                <path
                                    d="M 50% 50% m 0 -180 a 180 180 0 0 1 0 360"
                                    fill="none"
                                    stroke="orange"
                                    strokeWidth="2"
                                    strokeDasharray="5,5"
                                    className="translate-x-[50%] translate-y-[50%]"
                                />
                            </svg>
                        </div>

                        {/* Mobile Grid */}
                        <div className="lg:hidden flex flex-wrap justify-center gap-4">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveService(service)}
                                    className={cn(
                                        "w-16 h-16 rounded-full flex items-center justify-center p-4 shadow-md transition-all",
                                        activeService.id === service.id
                                            ? "bg-orange-500 text-white scale-110"
                                            : "bg-white text-gray-600"
                                    )}
                                >
                                    <service.icon className="w-full h-full" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Detail View */}
                    <div className="w-full lg:w-1/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 min-h-[250px] flex flex-col justify-center"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-orange-100 rounded-2xl">
                                        <activeService.icon className="h-8 w-8 text-orange-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{activeService.title}</h3>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {activeService.description}
                                </p>
                                <div className="flex items-center gap-2 text-orange-500 font-semibold cursor-pointer hover:gap-4 transition-all">
                                    Learn more about our {activeService.title.toLowerCase()}
                                    <Truck className="h-5 w-5" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
