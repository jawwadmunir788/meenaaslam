"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import {
  Plane,
  Ship,
  Send,
  Play,
  Calculator,
  CheckCircle2,
  Upload,
  HelpCircle,
  Shield,
  Clock,
  Globe,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    destination: "pakistan",
    shippingMode: "air",
    cargoType: "",
    cartons: "",
    weightPerCarton: "",
    totalWeight: "",
    services: [] as string[],
    message: "",
    estimatedCBM: "",
  })

  const [cbmData, setCbmData] = useState({
    length: "",
    width: "",
    height: "",
    unit: "cm",
    quantity: "1",
  })
  const [cbmResult, setCbmResult] = useState({ perCarton: 0, total: 0 })
  const [cbmCalculated, setCbmCalculated] = useState(false)

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const calculateCBM = () => {
    const l = Number.parseFloat(cbmData.length) || 0
    const w = Number.parseFloat(cbmData.width) || 0
    const h = Number.parseFloat(cbmData.height) || 0
    const qty = Number.parseInt(cbmData.quantity) || 1

    if (l <= 0 || w <= 0 || h <= 0) {
      alert("Please enter valid dimensions")
      return
    }

    let cbmPerCarton: number
    if (cbmData.unit === "cm") {
      cbmPerCarton = (l * w * h) / 1000000
    } else {
      // inches to cm: multiply by 2.54
      cbmPerCarton = (l * 2.54 * w * 2.54 * h * 2.54) / 1000000
    }

    const totalCBM = cbmPerCarton * qty
    setCbmResult({ perCarton: cbmPerCarton, total: totalCBM })
    setCbmCalculated(true)
    setFormData((prev) => ({ ...prev, estimatedCBM: totalCBM.toFixed(4) }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const serviceOptions = [
    { id: "sourcing", label: "Sourcing" },
    { id: "procurement", label: "Procurement (Purchase Handling)" },
    { id: "inspection", label: "Quality Inspection" },
    { id: "shipping", label: "Only Shipping" },
  ]

  const cargoTypes = [
    "Electronics",
    "Clothing & Textiles",
    "Food Items",
    "Packaging Materials",
    "Hardware Tools",
    "Medical Equipment",
    "Mobile Accessories",
    "Toys & Games",
    "Home & Decor",
    "Other",
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <PageHero
        title="Request A Shipping Quote"
        subtitle="Get a personalized import quote from China for air & sea freight, cargo, procurement, and inspection services."
        breadcrumb="Request A Quote"
      />

      {/* Hero Video Section */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Video Placeholder */}
            <div className="relative group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/cargo-shipping-warehouse-video-thumbnail.jpg"
                  alt="How to fill quote form guide"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 rounded-lg p-3">
                  <p className="text-white text-sm font-medium">
                    Watch: How to Fill the Quote Form & Use CBM Calculator
                  </p>
                </div>
              </div>
            </div>

            {/* Info Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Get Your <span className="gradient-text">Personalized Quote</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Watch our quick guide video to learn how to fill out the quote form and use our CBM calculator. Once you
                submit the form, our team will review your requirements and provide you with a detailed, competitive
                quote within 24-48 hours.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>Free quote with no obligations</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>Response within 24-48 hours</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>Transparent pricing with no hidden fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & CBM Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Quote Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-6 md:p-10 shadow-xl">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Your Shipment</h2>
                  <p className="text-gray-600">Fill out the form below and we'll provide you with a detailed quote.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Details Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">
                        1
                      </span>
                      Contact Details
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <Input
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp / Phone *</label>
                        <Input
                          type="tel"
                          placeholder="+92 300 1234567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Country / City</label>
                        <Input
                          type="text"
                          placeholder="e.g., Karachi, Pakistan"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipment Details Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">
                        2
                      </span>
                      Shipment Details
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Origin</label>
                        <Input type="text" value="China" disabled className="bg-gray-100 text-gray-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Destination Country *</label>
                        <select
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-full h-10 px-3 rounded-md border border-input bg-white text-sm"
                          required
                        >
                          <option value="pakistan">Pakistan</option>
                          <option value="uae">UAE</option>
                          <option value="usa">USA</option>
                          <option value="europe">Europe</option>
                          <option value="uk">UK</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Shipping Mode */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-3">Shipping Mode *</label>
                      <div className="grid grid-cols-3 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, shippingMode: "air" })}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.shippingMode === "air"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 bg-white hover:border-orange-300"
                          }`}
                        >
                          <Plane
                            className={`h-8 w-8 mx-auto mb-2 ${formData.shippingMode === "air" ? "text-orange-500" : "text-gray-400"}`}
                          />
                          <span
                            className={`text-sm font-medium ${formData.shippingMode === "air" ? "text-orange-500" : "text-gray-600"}`}
                          >
                            Air Freight
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, shippingMode: "sea" })}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.shippingMode === "sea"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 bg-white hover:border-orange-300"
                          }`}
                        >
                          <Ship
                            className={`h-8 w-8 mx-auto mb-2 ${formData.shippingMode === "sea" ? "text-orange-500" : "text-gray-400"}`}
                          />
                          <span
                            className={`text-sm font-medium ${formData.shippingMode === "sea" ? "text-orange-500" : "text-gray-600"}`}
                          >
                            Sea Freight
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, shippingMode: "not-sure" })}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.shippingMode === "not-sure"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 bg-white hover:border-orange-300"
                          }`}
                        >
                          <HelpCircle
                            className={`h-8 w-8 mx-auto mb-2 ${formData.shippingMode === "not-sure" ? "text-orange-500" : "text-gray-400"}`}
                          />
                          <span
                            className={`text-sm font-medium ${formData.shippingMode === "not-sure" ? "text-orange-500" : "text-gray-600"}`}
                          >
                            Not Sure
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Cargo Details Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">
                        3
                      </span>
                      Cargo Details
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Cargo Type *</label>
                        <select
                          value={formData.cargoType}
                          onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                          className="w-full h-10 px-3 rounded-md border border-input bg-white text-sm"
                          required
                        >
                          <option value="">Select cargo type</option>
                          {cargoTypes.map((type) => (
                            <option key={type} value={type.toLowerCase()}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Cartons / Packages
                        </label>
                        <Input
                          type="number"
                          placeholder="e.g., 10"
                          value={formData.cartons}
                          onChange={(e) => setFormData({ ...formData, cartons: e.target.value })}
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Weight per Carton (kg)</label>
                        <Input
                          type="number"
                          placeholder="e.g., 15"
                          value={formData.weightPerCarton}
                          onChange={(e) => setFormData({ ...formData, weightPerCarton: e.target.value })}
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Total Weight (kg)</label>
                        <Input
                          type="number"
                          placeholder="e.g., 150"
                          value={formData.totalWeight}
                          onChange={(e) => setFormData({ ...formData, totalWeight: e.target.value })}
                          className="bg-white"
                        />
                      </div>
                    </div>

                    {/* File Upload */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Product List / Images (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-orange-400 transition-colors cursor-pointer">
                        <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-400 mt-1">PNG, JPG, PDF up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Requirements Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">
                        4
                      </span>
                      Service Requirements
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">Select all services you need:</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <label
                          key={service.id}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.services.includes(service.id)
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 bg-white hover:border-orange-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service.id)}
                            onChange={() => handleServiceToggle(service.id)}
                            className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                          />
                          <span
                            className={`font-medium ${formData.services.includes(service.id) ? "text-orange-600" : "text-gray-700"}`}
                          >
                            {service.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">
                        5
                      </span>
                      Additional Information
                    </h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your order / special requirements
                      </label>
                      <Textarea
                        placeholder="Describe any special requirements, delivery timeline preferences, or questions you have..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-white min-h-[120px]"
                      />
                    </div>

                    {/* Estimated CBM from Calculator */}
                    {formData.estimatedCBM && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                        <p className="text-sm text-green-800">
                          <strong>Estimated CBM from Calculator:</strong> {formData.estimatedCBM} m³
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg py-6"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Get My Quote
                  </Button>
                  <p className="text-center text-sm text-gray-500">
                    We'll get back to you with a personalized quote within 48 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* CBM Calculator - Takes 1 column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Calculator className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">CBM Calculator</h3>
                    <p className="text-xs text-gray-500">Length × Width × Height</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Unit Selector */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setCbmData({ ...cbmData, unit: "cm" })}
                        className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                          cbmData.unit === "cm"
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        Centimeters
                      </button>
                      <button
                        type="button"
                        onClick={() => setCbmData({ ...cbmData, unit: "inches" })}
                        className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                          cbmData.unit === "inches"
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        Inches
                      </button>
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Length</label>
                      <Input
                        type="number"
                        placeholder="L"
                        value={cbmData.length}
                        onChange={(e) => setCbmData({ ...cbmData, length: e.target.value })}
                        className="text-center"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Width</label>
                      <Input
                        type="number"
                        placeholder="W"
                        value={cbmData.width}
                        onChange={(e) => setCbmData({ ...cbmData, width: e.target.value })}
                        className="text-center"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Height</label>
                      <Input
                        type="number"
                        placeholder="H"
                        value={cbmData.height}
                        onChange={(e) => setCbmData({ ...cbmData, height: e.target.value })}
                        className="text-center"
                      />
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Cartons</label>
                    <Input
                      type="number"
                      placeholder="1"
                      value={cbmData.quantity}
                      onChange={(e) => setCbmData({ ...cbmData, quantity: e.target.value })}
                      className="bg-white"
                    />
                  </div>

                  {/* Calculate Button */}
                  <Button
                    type="button"
                    onClick={calculateCBM}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    Calculate CBM
                  </Button>

                  {/* Results */}
                  {cbmCalculated && (
                    <div className="mt-4 p-4 bg-orange-50 rounded-xl space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">CBM per Carton:</span>
                        <span className="font-bold text-orange-600">{cbmResult.perCarton.toFixed(4)} m³</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-orange-200">
                        <span className="text-sm font-medium text-gray-700">Total CBM:</span>
                        <span className="font-bold text-lg text-orange-600">{cbmResult.total.toFixed(4)} m³</span>
                      </div>
                    </div>
                  )}

                  {/* Helper Text */}
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      <strong>What is CBM?</strong> Cubic Meter (CBM) is used to calculate freight charges for shipping.
                      If you don't know your cargo dimensions, leave this empty and provide estimates in the form.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reassurance Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Your Trusted Partner for <span className="text-orange-400">China Imports</span>
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Meena Aslam specializes in seamless imports from China, offering comprehensive services including
                  sourcing, procurement, quality inspection, and shipping. With trusted partners and a global network,
                  we ensure secure, cost-effective, and timely deliveries to businesses and individuals worldwide.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>End-to-end import support from China</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Accurate quotes based on your cargo details</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Door to door delivery options via air & sea freight</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Support team available on WhatsApp & email</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                  <Shield className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-1">Secure Handling</h4>
                  <p className="text-sm text-gray-400">100% secure cargo handling</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                  <Clock className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-1">Fast Response</h4>
                  <p className="text-sm text-gray-400">Quote within 48 hours</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                  <Globe className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-1">Global Reach</h4>
                  <p className="text-sm text-gray-400">Shipping to 50+ countries</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                  <Headphones className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                  <h4 className="font-semibold mb-1">24/7 Support</h4>
                  <p className="text-sm text-gray-400">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
