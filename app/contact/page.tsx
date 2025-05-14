import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=800&width=1920" alt="Contact background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            Have questions or feedback? We'd love to hear from you. Reach out to our team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="bg-zinc-800 border-zinc-700" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" className="bg-zinc-800 border-zinc-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject of your message" className="bg-zinc-800 border-zinc-700" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-zinc-800 border-zinc-700 min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 font-oswald tracking-wide">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-zinc-300 mb-8">
                  We're here to help! Reach out to us through any of the following methods.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-zinc-400">123 Pizza Street, New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-zinc-400">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-zinc-400">info@infernopizza.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Hours</h3>
                    <p className="text-zinc-400">
                      Monday - Thursday: 11:00 - 22:00
                      <br />
                      Friday - Saturday: 11:00 - 23:00
                      <br />
                      Sunday: 12:00 - 22:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mt-8">
                <h3 className="font-bold mb-4">Reservations & Large Orders</h3>
                <p className="text-zinc-400 mb-4">
                  For reservations or large catering orders, please call us directly or use our online reservation
                  system.
                </p>
                <Button className="bg-primary hover:bg-primary/90 font-oswald tracking-wide">Make a Reservation</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=800&width=1600" alt="Map location" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/70 p-6 rounded-lg max-w-md text-center">
                <h3 className="font-bold mb-2">Inferno Pizza</h3>
                <p className="text-zinc-300 mb-4">123 Pizza Street, New York, NY 10001</p>
                <Button className="bg-primary hover:bg-primary/90 font-oswald tracking-wide">Get Directions</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="font-bold mb-2">Do you offer gluten-free options?</h3>
              <p className="text-zinc-400">
                Yes, we offer gluten-free pizza crusts. Please inform our staff about any allergies or dietary
                restrictions.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="font-bold mb-2">What is your delivery radius?</h3>
              <p className="text-zinc-400">
                We deliver within a 5-mile radius of our restaurant. Delivery fees may apply based on distance.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="font-bold mb-2">Do you cater for events?</h3>
              <p className="text-zinc-400">
                Yes, we offer catering services for events of all sizes. Please contact us at least 48 hours in advance.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="font-bold mb-2">Can I make modifications to menu items?</h3>
              <p className="text-zinc-400">
                We're happy to accommodate special requests and modifications to our menu items.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
