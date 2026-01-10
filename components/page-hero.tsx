import { Home, ChevronRight } from "lucide-react"
import Link from "next/link"

interface PageHeroProps {
  title: string
  subtitle: string
  breadcrumb: string
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #87CEEB 0%, #B0E0E6 50%, #f0f9ff 100%)",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-16 bg-white rounded-full opacity-50 blur-sm" />
      <div className="absolute top-40 right-20 w-40 h-20 bg-white rounded-full opacity-40 blur-sm" />

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">{subtitle}</p>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm">
          <Link href="/" className="flex items-center gap-1 text-orange-500 hover:text-orange-600">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">{breadcrumb}</span>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
