import { Home, ChevronRight } from "lucide-react"
import Link from "next/link"

interface PageHeroProps {
  title: string
  subtitle: string
  breadcrumb: string
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-sky-200 via-sky-100 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Decorative Elements - hidden in dark mode */}
      <div className="absolute top-20 left-10 w-32 h-16 bg-white rounded-full opacity-50 dark:opacity-10 blur-sm" />
      <div className="absolute top-40 right-20 w-40 h-20 bg-white rounded-full opacity-40 dark:opacity-10 blur-sm" />

      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">{subtitle}</p>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm">
          <Link href="/" className="flex items-center gap-1 text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          <span className="text-gray-600 dark:text-gray-300">{breadcrumb}</span>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
    </section>
  )
}

