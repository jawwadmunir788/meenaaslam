"use client"

import { useState } from "react"
import { Search, Home, Truck, ShieldCheck, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const services = [
    {
        id: "outsource",
        title: "Product Outsourcing",
        description: "We find the best manufacturers and suppliers globally, ensuring high-quality products at the most competitive prices tailored to your business needs.",
        icon: Search,
    },
    {
        id: "delivery",
        title: "Cargo Delivery",
        description: "Reliable and fast shipping solutions. We handle everything from pickup to transit, ensuring your goods move efficiently across borders.",
        icon: Truck,
    },
    {
        id: "door-to-door",
        title: "Door to Door",
        description: "Complete hands-off logistics. We pick up from the supplier and deliver directly to your warehouse or doorstep with all duties paid.",
        icon: Home,
    },
    {
        id: "quality",
        title: "Quality Inspection",
        description: "Professional multi-stage quality checks before shipping to ensure your products meet your specifications and standards.",
        icon: ShieldCheck,
    },
    {
        id: "global",
        title: "Global Sourcing",
        description: "Expanding your reach to international markets with verified suppliers and secure payment gateways.",
        icon: Globe,
    },
]

export function InteractiveServices() {
    const [activeService, setActiveService] = useState(services[0])

    return (
        <section className="interactive-services-section py-8 sm:py-12 md:py-16 lg:py-24 bg-[#f8fafc] dark:bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-2 sm:px-4">
                {/* Header */}
                <div className="text-center mb-4 sm:mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                        Everything You Need <span className="gradient-text">In One Place</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
                        You think of a product, and we handle the rest—from sourcing to doorstep delivery.
                    </p>
                </div>

                {/* Main Content - ALWAYS horizontal row like desktop */}
                <div className="flex flex-row items-center justify-between gap-1 sm:gap-4 md:gap-6 lg:gap-10">

                    {/* Left: Thinking Person Image */}
                    <div className="w-1/3 flex-shrink-0 flex justify-center">
                        <div className="relative w-[80px] h-[100px] sm:w-[140px] sm:h-[180px] md:w-[220px] md:h-[280px] lg:w-[320px] lg:h-[400px]">
                            <motion.img
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                src="/new_image.png"
                                alt="Thinking Entrepreneur"
                                className="w-full h-full object-contain"
                            />
                            {/* Speech Bubble - hidden on mobile */}
                            <div className="absolute -top-2 -right-2 bg-white dark:bg-slate-800 p-1 sm:p-2 md:p-3 rounded-lg sm:rounded-xl shadow-md border border-orange-100 dark:border-slate-700 hidden md:block">
                                <p className="text-[8px] sm:text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200">"I need reliable sourcing..."</p>
                            </div>
                        </div>
                    </div>

                    {/* Center: Service Icons Arc */}
                    <div className="w-1/3 flex-shrink-0 flex justify-center">
                        <div className="relative w-[80px] h-[100px] sm:w-[140px] sm:h-[160px] md:w-[200px] md:h-[240px] lg:w-[300px] lg:h-[340px]">
                            {services.map((service, index) => {
                                const total = services.length
                                const angle = (index / (total - 1)) * Math.PI - Math.PI / 2
                                const baseRadius = 42
                                const x = Math.cos(angle) * baseRadius
                                const y = Math.sin(angle) * baseRadius

                                return (
                                    <motion.button
                                        key={service.id}
                                        onClick={() => setActiveService(service)}
                                        onMouseEnter={() => setActiveService(service)}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.06 }}
                                        style={{
                                            left: `calc(50% + ${x}%)`,
                                            top: `calc(50% + ${y}%)`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                        className={cn(
                                            "absolute rounded-full flex items-center justify-center transition-all duration-300 shadow-md",
                                            "w-6 h-6 p-1 sm:w-10 sm:h-10 sm:p-2 md:w-14 md:h-14 md:p-3 lg:w-16 lg:h-16 lg:p-4",
                                            activeService.id === service.id
                                                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white scale-110 z-10"
                                                : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:scale-105 z-0"
                                        )}
                                    >
                                        <service.icon className="w-full h-full" />
                                        {activeService.id === service.id && (
                                            <motion.div
                                                layoutId="active-ring"
                                                className="absolute -inset-0.5 sm:-inset-1 md:-inset-1.5 border border-orange-500 sm:border-2 rounded-full"
                                                transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                                            />
                                        )}
                                    </motion.button>
                                )
                            })}

                            {/* Dashed Arc Circle */}
                            <svg className="absolute inset-0 w-full h-full -z-10 opacity-15" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="42"
                                    fill="none"
                                    stroke="orange"
                                    strokeWidth="0.5"
                                    strokeDasharray="2,2"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Right: Detail View */}
                    <div className="w-1/3 flex-shrink-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-2 sm:p-3 md:p-5 lg:p-8 shadow-lg dark:shadow-slate-900/50 border border-gray-100 dark:border-slate-700"
                            >
                                <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 mb-1 sm:mb-2 md:mb-4 lg:mb-6">
                                    <div className="p-1 sm:p-1.5 md:p-2 lg:p-3 bg-orange-100 dark:bg-orange-600/40 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl border border-orange-200/50 dark:border-orange-500/40">
                                        <activeService.icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-orange-600 dark:text-orange-200" />
                                    </div>
                                    <h3 className="text-[10px] sm:text-xs md:text-base lg:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                                        {activeService.title}
                                    </h3>
                                </div>
                                <p className="text-[8px] sm:text-[10px] md:text-sm lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-1 sm:mb-2 md:mb-4 lg:mb-6 line-clamp-4 sm:line-clamp-none">
                                    {activeService.description}
                                </p>
                                <div className="hidden sm:flex items-center gap-1 md:gap-2 text-orange-500 dark:text-orange-400 text-[10px] md:text-sm lg:text-base font-semibold cursor-pointer hover:gap-2 md:hover:gap-3 transition-all">
                                    Learn more
                                    <Truck className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
