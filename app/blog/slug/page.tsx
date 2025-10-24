"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { blogHighlights } from "@/data/dummy";

export default function BlogPostPage() {
  const params = useParams();
  const { slug } = params;

  const getYouTubeId = (url: string) => {
    const match = url?.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^"&?/ ]{11})/);
    return match ? match[1] : null;
  };

  // Convert title → slug-friendly
  const slugify = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  const post = blogHighlights.find((b) => slugify(b.title) === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Blog post not found.</p>
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 md:px-10 py-16">
      <div className="text-sm uppercase tracking-widest text-gray-600 font-medium mb-2">
        {post.category}
      </div>

      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
        {post.title}
      </h1>

      <p className="text-gray-500 text-sm mb-8">{post.date}</p>

      {/* Hero (Video or Image) */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-10">
        {post.video ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${getYouTubeId(post.video)}?autoplay=0`}
            title={post.title}
            allowFullScreen
            className="rounded-2xl"
          ></iframe>
        ) : (
          <Image
            src={post.img || "/placeholder.jpg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg max-w-none text-gray-700">
        {post.content?.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
