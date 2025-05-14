import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Award, Clock, Utensils } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import FeaturedMenuItem from "@/components/featured-menu-item"
import BlogCard from "@/components/blog-card"
import Spline from "@splinetool/react-spline/next"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Pizza hero image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start pt-20">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
              Artisan Pizza <span className="text-primary">Crafted With Passion</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8">
              Experience authentic flavors with our wood-fired pizzas made from the finest ingredients and traditional
              techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary">
                ORDER ONLINE
              </Button>
              <Button size="lg" variant="outline" className="btn-outline">
                VIEW OUR MENU
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Spline Section */}
      <section className="section-padding bg-zinc-950 relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Our Pizza in 3D</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Interact with our signature pizza creation and explore the details of our artisan craftsmanship.
            </p>
          </div>
        </div>
        <div className="h-[500px] md:h-[600px] w-full relative">
          <Spline scene="https://prod.spline.design/IeU3rYJj0gRnLvyk/scene.splinecode" />
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-zinc-300 mb-6">
                Founded in 2010, Inferno Pizza began with a simple mission: to create the perfect pizza using
                traditional methods and the finest ingredients. Our wood-fired ovens, imported from Naples, reach
                temperatures of over 900°F, creating the perfect crust in just 90 seconds.
              </p>
              <p className="text-zinc-300 mb-8">
                Every pizza we serve represents our commitment to quality and authenticity. From our house-made dough
                that ferments for 48 hours to our carefully sourced toppings, we never compromise on flavor or
                tradition.
              </p>
              <Link href="/about" className="btn-primary inline-flex items-center">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              We're committed to providing an exceptional dining experience with every visit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800 card-hover">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Premium Ingredients</h3>
                <p className="text-zinc-400">
                  We source only the finest ingredients, from San Marzano tomatoes to fresh mozzarella and locally grown
                  produce.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 card-hover">
              <CardContent className="p-6">
                <Utensils className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Authentic Recipes</h3>
                <p className="text-zinc-400">
                  Our recipes have been perfected over generations, staying true to traditional Italian pizza-making
                  techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 card-hover">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-zinc-400">
                  Hot and fresh pizza delivered to your door in 30 minutes or less, maintaining quality and flavor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu Highlights</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Explore our most popular and signature pizzas, crafted with passion and premium ingredients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedMenuItem
              name="Margherita Classica"
              description="San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil"
              price="$14.99"
              imageSrc="/placeholder.svg?height=400&width=400"
            />

            <FeaturedMenuItem
              name="Diavola Inferno"
              description="Spicy salami, chili flakes, San Marzano tomatoes, mozzarella, basil"
              price="$16.99"
              imageSrc="/placeholder.svg?height=400&width=400"
            />

            <FeaturedMenuItem
              name="Quattro Formaggi"
              description="Mozzarella, gorgonzola, parmesan, ricotta, garlic oil, fresh herbs"
              price="$17.99"
              imageSrc="/placeholder.svg?height=400&width=400"
            />

            <FeaturedMenuItem
              name="Prosciutto & Arugula"
              description="Prosciutto di Parma, arugula, cherry tomatoes, mozzarella, parmesan"
              price="$18.99"
              imageSrc="/placeholder.svg?height=400&width=400"
            />

            <FeaturedMenuItem
              name="Truffle Mushroom"
              description="Wild mushrooms, truffle oil, mozzarella, parmesan, fresh thyme"
              price="$19.99"
              imageSrc="/placeholder.svg?height=400&width=400"
            />

            <FeaturedMenuItem
              name="Mediterranean Veggie"
              description="Roasted peppers, artichokes, olives, red onion, feta, mozzarella"
              price="$16.99"
              imageSrc="/placeholder.svg?height=400&width=400"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-primary inline-flex items-center">
              View Full Menu <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Pizza background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Hungry? Order Online for Pickup or Delivery
          </h2>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto text-lg">
            Skip the wait and enjoy our delicious pizzas in the comfort of your home. Fast, reliable delivery
            guaranteed.
          </p>
          <Button size="lg" className="btn-primary text-lg px-8">
            ORDER ONLINE NOW
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about their Inferno Pizza
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Best pizza I've had outside of Italy! The crust is perfectly crispy and the toppings are always fresh. My family's go-to for pizza night."
              author="Sarah Johnson"
              rating={5}
            />

            <TestimonialCard
              quote="The Diavola Inferno is incredible - perfect level of spice and amazing flavor. Their delivery is always on time and the pizza arrives hot!"
              author="Michael Rodriguez"
              rating={5}
            />

            <TestimonialCard
              quote="Love the atmosphere of the restaurant and the wood-fired taste is unmatched. The staff is always friendly and accommodating."
              author="Emily Chen"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Featured On Section */}
      <section className="py-12 bg-zinc-950">
        <div className="container-custom">
          <h2 className="text-center text-2xl font-bold mb-10">Featured In</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Food Network"
              width={120}
              height={60}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Eater"
              width={120}
              height={60}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Bon Appetit"
              width={120}
              height={60}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/placeholder.svg?height=60&width=120"
              alt="New York Times"
              width={120}
              height={60}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Our Blog</h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Discover tips, recipes, and stories from the world of pizza and Italian cuisine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard
              title="The Art of Perfect Pizza Dough"
              excerpt="Learn the secrets to creating the perfect pizza dough with our step-by-step guide and expert tips."
              date="May 10, 2023"
              imageSrc="/placeholder.svg?height=400&width=600"
              slug="/blog/perfect-pizza-dough"
            />

            <BlogCard
              title="Pairing Wine with Pizza: A Guide"
              excerpt="Discover the best wine pairings for different pizza styles to elevate your dining experience."
              date="April 22, 2023"
              imageSrc="/placeholder.svg?height=400&width=600"
              slug="/blog/wine-pizza-pairing"
            />

            <BlogCard
              title="The History of Neapolitan Pizza"
              excerpt="Explore the rich history and tradition behind authentic Neapolitan pizza and its journey to America."
              date="March 15, 2023"
              imageSrc="/placeholder.svg?height=400&width=600"
              slug="/blog/neapolitan-pizza-history"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-outline inline-flex items-center">
              View All Posts <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact/Reservation CTA */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Reserve Your Table</h2>
              <p className="text-zinc-300 mb-8">
                Join us for an unforgettable dining experience. Reserve your table online or call us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/reservations" className="btn-primary inline-flex items-center">
                  Book a Table
                </Link>
                <Button variant="outline" className="btn-outline">
                  Call (123) 456-7890
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Restaurant dining area"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
