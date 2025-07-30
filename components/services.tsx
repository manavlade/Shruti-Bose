"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import bbglow from "@/assets/Bb glow.jpg";
import lip from "@/assets/Lips.jpg";
import eyebrow from "@/assets/eyebrowdown.jpg";

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const services = [
    {
      title: "Microblading",
      description:
        "Natural-looking, hair-stroke brows tailored to your face using mapping, pigment blend, and soft-shade techniques.",
      
      category: "brows",
      image: eyebrow,
    },
    {
      title: "Lip Blush",
      description: "Healed lip tint in nude, coral, or pink tones — corrects dark pigmentation and enhances shape.",
      
      category: "lips",
      image: lip,
    },
    {
      title: "BB Glow Treatment",
      description: "Semi-permanent foundation treatment that gives your skin a natural, glowing complexion for months.",
      
      category: "skin",
      image: bbglow,
    },
  ]

  const categories = [
    { id: "all", name: "All Services" },
    { id: "brows", name: "Brows" },
    { id: "lips", name: "Lips" },
    { id: "skin", name: "Skin" },
  ]

  const filteredServices =
    selectedCategory === "all" ? services : services.filter((service) => service.category === selectedCategory)

  return (
    <section id="services" className="py-20 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-taupe-800">Book a PMU Treatment</h2>
          <p className="text-xl text-taupe-600 mb-8">
            <span className="text-blush-500">Subtle.</span> Natural. <span className="text-blush-500">You.</span>
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 font-medium ${
                  selectedCategory === category.id
                    ? "bg-blush-500 text-white"
                    : "bg-white text-taupe-600 hover:bg-nude-100 border border-nude-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {filteredServices.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-nude-200 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-taupe-800">{service.title}</h3>
                  </div>

                  <p className="text-taupe-600 mb-4 leading-relaxed text-sm">{service.description}</p>

                  <Button className="w-full bg-blush-500 text-white rounded-full">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 bg-white rounded-2xl p-8 border border-nude-200 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-taupe-800 mb-4">
            Why Choose Our <span className="text-blush-500">PMU Services?</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blush-500 font-bold">✓</span>
              </div>
              <h4 className="font-semibold text-taupe-800 mb-2">Premium Pigments</h4>
              <p className="text-taupe-600 text-sm">High-quality, long-lasting pigments for natural results</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blush-500 font-bold">✓</span>
              </div>
              <h4 className="font-semibold text-taupe-800 mb-2">Sterile Environment</h4>
              <p className="text-taupe-600 text-sm">Completely sanitized tools and workspace for your safety</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blush-500 font-bold">✓</span>
              </div>
              <h4 className="font-semibold text-taupe-800 mb-2">Aftercare Support</h4>
              <p className="text-taupe-600 text-sm">Complete guidance for optimal healing and results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
