"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Tamanna",
      title: "Client",
      video: "/videos/Tamanna .MOV",
    },
    {
      name: "Kriti",
      title: "Client",
      video: "/videos/v1.MOV",
    },
    {
      name: "Avneet",
      title: "Client",
      video: "/videos/v2.MOV",
    },
    {
      name: "Ritika",
      title: "Client",
      video: "/videos/v3.MOV",
    },
    {
      name: "Simran",
      title: "Client",
      video: "/videos/Simran  (1).mov",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-taupe-800">
            What Clients Say
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <Card className="bg-white border-nude-200 shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                  {/* Left side - Video */}
                  <div className="relative bg-black flex items-center justify-center p-4">
                    <video
                      src={testimonials[currentIndex].video}
                      className="w-full h-full max-w-sm max-h-[550px] object-cover rounded-lg shadow-lg"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    {/* <div className="flex justify-center lg:justify-start mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-blush-400 fill-current" />
                      ))}
                    </div> */}

                    {/* <blockquote className="text-xl md:text-2xl text-taupe-700 mb-8 italic leading-relaxed text-center lg:text-left">
                      "{testimonials[currentIndex].text}"
                    </blockquote> */}

                    <div className="flex items-center justify-center lg:justify-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blush-200 to-blush-300 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-blush-600">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                      <div className="text-center lg:text-left">
                        <div className="font-bold text-taupe-800 text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-taupe-600">
                          {testimonials[currentIndex].title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-taupe-600 hover:text-blush-500 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-taupe-600 hover:text-blush-500 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blush-400" : "bg-nude-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
