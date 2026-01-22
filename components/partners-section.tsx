export function PartnersSection() {
  const partners = ["DHL Express", "FedEx", "Maersk", "COSCO", "Emirates SkyCargo", "UPS", "China Post", "Alibaba"]

  return (
    <section className="py-12 bg-gray-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Our Trusted Partners</p>
        </div>

        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 mr-12">
                {partners.map((partner) => (
                  <div
                    key={partner}
                    className="flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm min-w-[160px] border border-transparent dark:border-slate-700/50"
                  >
                    <span className="text-gray-400 dark:text-gray-500 font-semibold">{partner}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

