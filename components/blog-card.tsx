import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  imageSrc: string
  slug: string
}

const BlogCard = ({ title, excerpt, date, imageSrc, slug }: BlogCardProps) => {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden card-hover">
      <div className="relative h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-5">
        <div className="text-zinc-500 text-sm mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm mb-4">{excerpt}</p>
        <Link href={slug} className="text-primary font-medium inline-flex items-center hover:underline">
          Read More <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

export default BlogCard
