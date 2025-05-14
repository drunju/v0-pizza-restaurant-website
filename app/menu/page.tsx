import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenuPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=800&width=1920" alt="Menu background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Menu</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg mb-8">
            Explore our selection of authentic wood-fired pizzas, appetizers, salads, and desserts.
          </p>
          <Button size="lg" className="btn-primary">
            ORDER ONLINE
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <Tabs defaultValue="pizza" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-zinc-900">
                <TabsTrigger value="pizza" className="text-lg px-6 py-3 font-oswald">
                  Pizzas
                </TabsTrigger>
                <TabsTrigger value="appetizers" className="text-lg px-6 py-3 font-oswald">
                  Appetizers
                </TabsTrigger>
                <TabsTrigger value="salads" className="text-lg px-6 py-3 font-oswald">
                  Salads
                </TabsTrigger>
                <TabsTrigger value="desserts" className="text-lg px-6 py-3 font-oswald">
                  Desserts
                </TabsTrigger>
                <TabsTrigger value="drinks" className="text-lg px-6 py-3 font-oswald">
                  Drinks
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Pizzas Tab */}
            <TabsContent value="pizza" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Margherita Classica</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil
                      </p>
                    </div>
                    <span className="text-primary font-bold">$14.99</span>
                  </div>
                  <div className="border-t border-zinc-800 pt-4 mt-4">
                    <p className="text-zinc-500 text-sm">Available in: 12" | 14" | 16"</p>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Diavola Inferno</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Spicy salami, chili flakes, San Marzano tomatoes, mozzarella, basil
                      </p>
                    </div>
                    <span className="text-primary font-bold">$16.99</span>
                  </div>
                  <div className="border-t border-zinc-800 pt-4 mt-4">
                    <p className="text-zinc-500 text-sm">Available in: 12" | 14" | 16"</p>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Quattro Formaggi</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Mozzarella, gorgonzola, parmesan, ricotta, garlic oil, fresh herbs
                      </p>
                    </div>
                    <span className="text-primary font-bold">$17.99</span>
                  </div>
                  <div className="border-t border-zinc-800 pt-4 mt-4">
                    <p className="text-zinc-500 text-sm">Available in: 12" | 14" | 16"</p>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Prosciutto & Arugula</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Prosciutto di Parma, arugula, cherry tomatoes, mozzarella, parmesan
                      </p>
                    </div>
                    <span className="text-primary font-bold">$18.99</span>
                  </div>
                  <div className="border-t border-zinc-800 pt-4 mt-4">
                    <p className="text-zinc-500 text-sm">Available in: 12" | 14" | 16"</p>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Truffle Mushroom</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Wild mushrooms, truffle oil, mozzarella, parmesan, fresh thyme
                      </p>
                    </div>
                    <span className="text-primary font-bold">$19.99</span>
                  </div>
                  <div className="border-t border-zinc-800 pt-4 mt-4">
                    <p className="text-zinc-500 text-sm">Available in: 12" | 14" | 16"</p>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Mediterranean Veggie</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Roasted peppers, artichokes, olives, red onion, feta, mozzarella
                      </p>
                    </div>
                    <span className="text-primary font-bold">$16.99</span>
                  </div>
                  <div className="border-t border-zinc-800 pt-4 mt-4">
                    <p className="text-zinc-500 text-sm">Available in: 12" | 14" | 16"</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Appetizers Tab */}
            <TabsContent value="appetizers" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Garlic Knots</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        House-made dough knots with garlic butter, parmesan, and herbs. Served with marinara.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$7.99</span>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Bruschetta</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Toasted bread topped with diced tomatoes, fresh basil, garlic, and extra virgin olive oil.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$8.99</span>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Arancini</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Sicilian rice balls stuffed with mozzarella, peas, and ground beef. Served with marinara.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$10.99</span>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Calamari Fritti</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Lightly fried calamari served with lemon wedges and marinara sauce.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$12.99</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Salads Tab */}
            <TabsContent value="salads" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Caprese Salad</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Fresh mozzarella, tomatoes, basil, extra virgin olive oil, and balsamic glaze.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$11.99</span>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Caesar Salad</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Romaine lettuce, house-made croutons, parmesan, and Caesar dressing.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$9.99</span>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Arugula & Prosciutto</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Arugula, prosciutto, shaved parmesan, cherry tomatoes, lemon vinaigrette.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$13.99</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Desserts Tab */}
            <TabsContent value="desserts" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Tiramisu</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$8.99</span>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Cannoli</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Crispy pastry shells filled with sweet ricotta cream and chocolate chips.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$7.99</span>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Nutella Pizza</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Wood-fired pizza dough topped with Nutella, fresh strawberries, and powdered sugar.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$10.99</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Drinks Tab */}
            <TabsContent value="drinks" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Italian Wines</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Selection of red and white wines from various regions of Italy.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$8-15/glass</span>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Craft Beer</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Local and imported craft beers, including Italian lagers and ales.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$6-9</span>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Italian Sodas</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Refreshing flavored sodas with cream option. Flavors: raspberry, blood orange, lemon.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$4.99</span>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Espresso & Coffee</h3>
                      <p className="text-zinc-400 text-sm mt-1">
                        Italian espresso, cappuccino, latte, and American coffee.
                      </p>
                    </div>
                    <span className="text-primary font-bold">$3.50-5.50</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
            Order online for pickup or delivery, or call us to place your order directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="btn-primary">
              ORDER ONLINE
            </Button>
            <Button variant="outline" className="btn-outline">
              Call (123) 456-7890
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
