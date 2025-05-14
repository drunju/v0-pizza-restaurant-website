import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ReservationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Reservations background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Make a Reservation</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            Reserve your table at Inferno Pizza and enjoy an unforgettable dining experience.
          </p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Book Your Table</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                      Full Name
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-zinc-300">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Your phone number" className="bg-zinc-800 border-zinc-700" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="guests" className="text-sm font-medium text-zinc-300">
                      Number of Guests
                    </label>
                    <Select>
                      <SelectTrigger className="bg-zinc-800 border-zinc-700">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 person</SelectItem>
                        <SelectItem value="2">2 people</SelectItem>
                        <SelectItem value="3">3 people</SelectItem>
                        <SelectItem value="4">4 people</SelectItem>
                        <SelectItem value="5">5 people</SelectItem>
                        <SelectItem value="6">6 people</SelectItem>
                        <SelectItem value="7">7 people</SelectItem>
                        <SelectItem value="8">8+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal bg-zinc-800 border-zinc-700")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>Pick a date</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium text-zinc-300">
                      Time
                    </label>
                    <Select>
                      <SelectTrigger className="bg-zinc-800 border-zinc-700">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                        <SelectItem value="17:30">5:30 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="18:30">6:30 PM</SelectItem>
                        <SelectItem value="19:00">7:00 PM</SelectItem>
                        <SelectItem value="19:30">7:30 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                        <SelectItem value="20:30">8:30 PM</SelectItem>
                        <SelectItem value="21:00">9:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="special-requests" className="text-sm font-medium text-zinc-300">
                    Special Requests
                  </label>
                  <Textarea
                    id="special-requests"
                    placeholder="Any special requests or dietary requirements"
                    className="bg-zinc-800 border-zinc-700 min-h-[100px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 font-oswald tracking-wide">
                  Book Reservation
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Reservation Information</h2>
                <p className="text-zinc-300 mb-4">
                  We look forward to hosting you at Inferno Pizza. Here's some information about our reservation policy:
                </p>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Reservations are recommended, especially for weekends and holidays.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    For parties of 8 or more, please call us directly at (123) 456-7890.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    We hold reservations for 15 minutes past the reservation time.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    For same-day reservations, please call us directly.
                  </li>
                </ul>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Restaurant interior"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                <h3 className="font-bold mb-4">Private Events & Catering</h3>
                <p className="text-zinc-400 mb-4">
                  Planning a special event? We offer private dining and catering services for birthdays, corporate
                  events, and celebrations.
                </p>
                <Button className="bg-primary hover:bg-primary/90 font-oswald tracking-wide">
                  Inquire About Events
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Our Guests Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <p className="text-zinc-300 mb-4 italic">
                "We had our anniversary dinner here and it was perfect. The staff was attentive and the food was
                amazing. Highly recommend the Truffle Mushroom pizza!"
              </p>
              <p className="text-zinc-400 font-medium">— Jennifer & David</p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <p className="text-zinc-300 mb-4 italic">
                "The reservation process was smooth and they accommodated our large group perfectly. Great atmosphere
                and even better pizza!"
              </p>
              <p className="text-zinc-400 font-medium">— Michael T.</p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <p className="text-zinc-300 mb-4 italic">
                "We booked a table for a business dinner and were impressed with the service and quality. The private
                dining area was perfect for our needs."
              </p>
              <p className="text-zinc-400 font-medium">— Corporate Client</p>
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
              <h3 className="font-bold mb-2">Is there a cancellation fee?</h3>
              <p className="text-zinc-400">
                We appreciate 24 hours notice for cancellations. No-shows or cancellations with less than 4 hours notice
                may incur a fee for large parties.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="font-bold mb-2">Can I make special requests?</h3>
              <p className="text-zinc-400">
                Please include any special requests in the reservation form, and we'll do our best to accommodate them.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="font-bold mb-2">Is there parking available?</h3>
              <p className="text-zinc-400">
                We offer validated parking at the garage next door. Street parking is also available in the surrounding
                area.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h3 className="font-bold mb-2">Do you have outdoor seating?</h3>
              <p className="text-zinc-400">
                Yes, we have a beautiful patio area available seasonally. Please request outdoor seating in your
                reservation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
