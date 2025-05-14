import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  rating: number
}

const TestimonialCard = ({ quote, author, rating }: TestimonialCardProps) => {
  return (
    <Card className="bg-zinc-900 border-zinc-800 card-hover">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-primary fill-primary" : "text-zinc-600"}`} />
          ))}
        </div>
        <p className="text-zinc-300 mb-4 italic">"{quote}"</p>
        <p className="text-zinc-400 font-medium">— {author}</p>
      </CardContent>
    </Card>
  )
}

export default TestimonialCard
