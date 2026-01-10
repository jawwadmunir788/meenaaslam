import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  { name: "Electronics", image: "/assorted-electronics.png" },
  { name: "Mobile Parts", image: "/mobile-phone-parts-accessories.jpg" },
  { name: "Home & Decor", image: "/home-decor-furniture-items.jpg" },
  { name: "Footwear", image: "/shoes-footwear-collection.jpg" },
  { name: "Jewellery", image: "/jewelry-gold-accessories.jpg" },
  { name: "Packaging", image: "/packaging-boxes-materials.jpg" },
  { name: "Hardware Tools", image: "/hardware-tools-drills.jpg" },
  { name: "Medical Equipment", image: "/medical-equipment-machines.jpg" },
]

export function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular <span className="gradient-text">Imported Products</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From electronics to fashion, businesses and individuals trust us to import top-selling products. Explore the
            most in demand items shipped through our services.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full aspect-[3/2] object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{product.name}</h3>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Explore More</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-orange-500 hover:text-orange-600 hover:bg-orange-50"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
