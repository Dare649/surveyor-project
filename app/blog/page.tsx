'use client'

import BlogHighlight from "@/components/blog/page"
import { blogHighlights } from "@/data/dummy"
import Image from "next/image"

const BlogPost = () => {
  const normalizedHighlights = blogHighlights.map(item => ({
    ...item,
    content: Array.isArray(item.content) ? item.content.join('\n') : item.content,
  }))

  return (
    <div className="w-full sm:my-10 lg:my-20">
        <div className="relative w-full h-[70vh]">
            {/* Background Image */}
            <Image
                src="/header-img.webp"
                alt="Project & Co Left"
                fill
                className="object-cover"
                priority
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text pinned to bottom */}
            <div className="absolute bottom-10 left-0 w-full text-center px-4">
                <h2 className="text-white font-minion lg:text-[41.472px] sm:text-[27.952px] capitalize">
                blog post
                </h2>
            </div>
            </div>
      <BlogHighlight items={normalizedHighlights} />
    </div>
  )
}

export default BlogPost
