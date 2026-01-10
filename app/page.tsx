import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeatureCards } from "@/components/feature-cards"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { InteractiveServices } from "@/components/interactive-services"
import { CountriesSection } from "@/components/countries-section"
import { WhyTrustSection } from "@/components/why-trust-section"
import { ProcessSection } from "@/components/process-section"
import { SourcingSection } from "@/components/sourcing-section"
import { ChinaHubSection } from "@/components/china-hub-section"
import { StatsSection } from "@/components/stats-section"
import { ProductsSection } from "@/components/products-section"
import { PartnersSection } from "@/components/partners-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeatureCards />
      <AboutSection />
      <InteractiveServices />
      <CountriesSection />
      <WhyTrustSection />
      <ProcessSection />
      <SourcingSection />
      <ChinaHubSection />
      <StatsSection />
      <ProductsSection />
      <PartnersSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
