import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface FeaturedMenuItemProps {
  name: string
  description: string
  price: string
  imageSrc: string
}

const FeaturedMenuItem = ({ name, description, price, imageSrc }: FeaturedMenuItemProps) => {
  return (
    <Card className="menu-item overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <span className="text-primary font-bold">{price}</span>
        </div>
        <p className="text-zinc-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}

export default FeaturedMenuItem
