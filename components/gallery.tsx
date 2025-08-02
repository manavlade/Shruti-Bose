"use client"

import { useState } from "react"
import Image from "next/image"
import i1 from "@/assets/test/i1.png";
import i2 from "@/assets/test/i2.jpeg";
import i3 from "@/assets/test/i3.png"
import i4 from "@/assets/test/i4.jpg"
import i5 from "@/assets/test/i5.png";
import i7 from "@/assets/test/i7.png";
import i8 from "@/assets/test/8.jpeg"
import i9 from "@/assets/test/9.png"
import i10 from "@/assets/test/10.jpeg"
import i11 from "@/assets/test/11.jpg"
import i12 from "@/assets/test/12.jpg"
import i13 from "@/assets/test/13.jpg"
import i14 from "@/assets/test/14.jpg"

import i15 from "@/assets/test/15 (1).jpg";
import i16 from "@/assets/test/15 (4).jpg";
import i17 from "@/assets/test/15 (5).jpg";

export function Gallery() {
  const [selectedTag, setSelectedTag] = useState("all")


  const galleryItems = [
    { id: 1, tag: "microblading", image: i1},
    { id: 2, tag: "healed-lips", image: i2 },
    { id: 3, tag: "bb-glow", image: i3 },
    { id: 4, tag: "two-week", image: i5 },
    { id: 6, tag: "healed-lips", image: i4 },
    { id: 7, tag: "bb-glow", image: i7 },
    { id: 8, tag: "two-week", image: i8 },
    { id: 9, tag: "two-week", image: i9 },
    { id: 10, tag: "two-week", image: i10 },
    { id: 11, tag: "two-week", image: i11 },
    { id: 12, tag: "two-week", image: i12 },
    { id: 13, tag: "two-week", image: i13 },
    { id: 14, tag: "two-week", image: i14 },
    { id: 15, tag: "two-week", image: i15 },
    { id: 16, tag: "two-week", image: i16 },
    { id: 17, tag: "two-week", image: i17 },
  ]

  const filteredItems = selectedTag === "all" ? galleryItems : galleryItems.filter((item) => item.tag === selectedTag)

  return (
    <section id="gallery" className="py-20 bg-nude-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-taupe-800">
            Real Work. <span className="text-blush-500">Real Results.</span>
          </h2>
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
