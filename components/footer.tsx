import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              INFERNO<span className="text-primary">PIZZA</span>
            </h3>
            <p className="text-zinc-400 mb-6">
              Crafting the perfect pizza with premium ingredients and traditional techniques since 2010. Every slice
              tells our story of passion and quality.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-zinc-400">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>123 Pizza Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-400">
                <Phone size={20} className="text-primary shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-400">
                <Mail size={20} className="text-primary shrink-0" />
                <span>info@infernopizza.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Opening Hours</h3>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 - 22:00</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="text-zinc-400 mb-4">Subscribe to our newsletter for special offers and updates.</p>
            <div className="space-y-3">
              <Input type="email" placeholder="Your email address" className="bg-zinc-900 border-zinc-700" />
              <Button className="w-full bg-primary hover:bg-primary/90 font-oswald tracking-wide">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-zinc-500">
          <p>© {new Date().getFullYear()} Inferno Pizza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
