"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <PageHero
        title="Contact Us"
        subtitle="Get in Touch. Reach Out for Reliable Cargo, Logistics & Shipping Assistance Today."
        breadcrumb="Contact Us"
      />

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Talk <span className="gradient-text">Business</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We're here to assist with your logistics, procurement and shipping needs, delivering efficient solutions
                for your business. Whether you need expert advice, shipping solutions or real time assistance, our team
                is ready to help.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-600/40 rounded-xl border border-orange-200/50 dark:border-orange-500/40">
                    <MapPin className="h-6 w-6 text-orange-600 dark:text-orange-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Pakistan Office</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Office 1205, 12th Floor, Al Najeebi Tower, Saddar, Karachi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-600/40 rounded-xl border border-orange-200/50 dark:border-orange-500/40">
                    <MapPin className="h-6 w-6 text-orange-600 dark:text-orange-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">China Office</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      No. 1, Hengao International Automobile City, Yongli South Street, Hemian East Road, Taihe Town,
                      Baiyun District, Guangzhou City, Guangdong Province
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-600/40 rounded-xl border border-orange-200/50 dark:border-orange-500/40">
                    <Phone className="h-6 w-6 text-orange-600 dark:text-orange-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a href="tel:+923362143021" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                        +92 336 2143021
                      </a>
                      <br />
                      <a href="tel:+8615622314171" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                        +86 156 2231 4171
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-600/40 rounded-xl border border-orange-200/50 dark:border-orange-500/40">
                    <Mail className="h-6 w-6 text-orange-600 dark:text-orange-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <a href="mailto:info@meenaaslam.com" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                        info@meenaaslam.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-600/40 rounded-xl border border-orange-200/50 dark:border-orange-500/40">
                    <Clock className="h-6 w-6 text-orange-600 dark:text-orange-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Working Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-3 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 transition-all dark:text-gray-400"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 transition-all dark:text-gray-400"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 transition-all dark:text-gray-400"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/923362143021"
                    className="p-3 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-green-500 hover:text-white dark:hover:bg-green-500 transition-all dark:text-gray-400"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 shadow-xl border border-transparent dark:border-slate-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Write to Us</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="Your phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <Input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <Textarea
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/20"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Visit <span className="gradient-text">Us</span>
            </h2>
            <div className="bg-gray-200 dark:bg-slate-800 rounded-3xl overflow-hidden h-[400px] border border-transparent dark:border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.5567826982384!2d67.0176!3d24.8604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM3LjQiTiA2N8KwMDEnMDMuNCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="dark:invert dark:hue-rotate-180 dark:contrast-80 dark:brightness-90"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
