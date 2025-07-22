"use client"

import { useState } from "react"
import Image from "next/image"
import i1 from "@/assets/test/i1.png";
import i2 from "@/assets/test/i2.jpeg";
import i3 from "@/assets/test/i3.png"
import i4 from "@/assets/test/i4.jpg"
import i5 from "@/assets/test/i5.png";
import i6 from "@/assets/test/i6.jpg"
import i7 from "@/assets/test/i7.png";


export function Gallery() {
  const [selectedTag, setSelectedTag] = useState("all")

  const tags = [
    { id: "all", name: "All Work" },
    { id: "healed-lips", name: "Healed Lips" },
    { id: "microblading", name: "Microblading" },
    { id: "two-week", name: "2-Week Results" },
    { id: "bb-glow", name: "BB Glow" },
  ]

  const galleryItems = [
    { id: 1, tag: "microblading", image: i1},
    { id: 2, tag: "healed-lips", image: i2 },
    { id: 3, tag: "bb-glow", image: i3 },
    { id: 4, tag: "two-week", image: i5 },
    { id: 5, tag: "microblading", image: i6 },
    { id: 6, tag: "healed-lips", image: i4 },
    { id: 7, tag: "bb-glow", image: i7 },
  ]

  const filteredItems = selectedTag === "all" ? galleryItems : galleryItems.filter((item) => item.tag === selectedTag)

  return (
    <section id="gallery" className="py-20 bg-nude-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-taupe-800">
            Real Work. <span className="text-blush-500">Real Results.</span>
          </h2>

          {/* Tag Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`px-4 py-2 rounded-full transition-colors duration-200 text-sm font-medium ${
                  selectedTag === tag.id
                    ? "bg-blush-400 text-white"
                    : "bg-white text-taupe-600 hover:bg-nude-100 border border-nude-200"
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="aspect-square overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt="Gallery item"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
