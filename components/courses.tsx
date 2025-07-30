import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Clock, Package, MessageCircle } from "lucide-react"
import Image from "next/image"
import basic from "@/assets/basic.jpg"
import advance from "@/assets/advance.jpg"
import eyebrow from "@/assets/eyebrow.jpg";
import blush from "@/assets/blush.jpg"
import Galleries from "./Galley"


export function Courses() {
  const courses = [
    {
      title: "Basic PMU Course",
      subtitle: "Your gateway to the world of Permanent Makeup. Ideal for beginners.",
      duration: "7 Days",
      kitOption: "Available With / Without Kit",
      skills: ["Eyebrow Microblading", "Lip Colouration", "BB Glow"],
      image: basic,
      level: "Beginner",
      color: "blush",
    },
    {
      title: "Advance PMU Course",
      subtitle: "A comprehensive program for aspiring professionals ready to elevate their PMU skills.",
      duration: "10 Days",
      kitOption: "Available With / Without Kit",
      skills: [
        "Permanent Eyebrows",
        "Lip Colouration & Neutralization",
        "BB Glow Facial Treatment",
        "Brow Lamination & Tint",
        "Scalp Micropigmentation",
      ],
      image: advance,
      level: "Advanced",
      color: "taupe",
    },
    {
      title: "Permanent Eyebrow Course",
      subtitle: "Perfect your brow artistry with this focused eyebrow-only training.",
      duration: "4 Days",
      kitOption: "Kit Not Included",
      skills: ["Microblading Brows", "Ombre or Powder Brows", "Combination Brows"],
      image: eyebrow,
      level: "Focused",
      color: "sand",
    },
    {
      title: "Blush & Brow Pro Course",
      subtitle: "Designed for those seeking to specialize in brows and lip neutralization.",
      duration: "6 Days",
      kitOption: "Kit Not Included",
      skills: ["Permanent Eyebrows", "Lip Colouration & Neutralization"],
      image: blush,
      level: "Specialized",
      color: "nude",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blush":
        return {
          badge: "bg-blush-100 text-blush-600",
          button: "bg-blush-500 hover:bg-blush-500",
          accent: "text-blush-500",
        }
      case "taupe":
        return {
          badge: "bg-taupe-100 text-taupe-600",
          button: "bg-blush-500 hover:bg-blush-500",
          accent: "text-blush-500",
        }
      case "sand":
        return {
          badge: "bg-sand-100 text-sand-600",
          button: "bg-blush-500 hover:bg-blush-500",
          accent: "text-blush-600",
        }
      case "nude":
        return {
          badge: "bg-nude-100 text-nude-600",
          button: "bg-blush-500 hover:bg-blush-500",
          accent: "text-blush-600",
        }
      default:
        return {
          badge: "bg-blush-100 text-blush-600",
          button: "bg-blush-500 hover:bg-blush-500",
          accent: "text-blush-500",
        }
    }
  }

  return (
    <section id="courses" className="py-20 bg-nude-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-taupe-800">
            PMU Training Designed For <span className="text-blush-500">Growth</span>
          </h2>
          <p className="text-xl text-taupe-600 max-w-2xl mx-auto">From First Stroke to First Client.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {courses.map((course, index) => {
            const colors = getColorClasses(course.color)
            return (
              <Card
                key={index}
                className="bg-white border-nude-200 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.badge}`}>
                          {course.level}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-taupe-800 mb-2">{course.title}</h3>
                      <p className="text-taupe-600 mb-4 text-sm leading-relaxed">{course.subtitle}</p>

                      <div className="flex items-center gap-4 mb-4 text-sm text-taupe-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Package className="w-4 h-4" />
                          <span className="text-xs">{course.kitOption}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-taupe-800 font-semibold mb-2 text-sm">What You'll Learn:</h4>
                        <div className="space-y-1">
                          {course.skills.map((skill, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Check className={`w-3 h-3 ${colors.accent}`} />
                              <span className="text-taupe-600 text-xs">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button className={`w-full ${colors.button} text-white rounded-full text-sm`}>Enroll Now</Button>
                      <Button
                        variant="outline"
                        className="w-full border-taupe-200 text-taupe-600 hover:bg-taupe-50 rounded-full text-sm bg-transparent"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Request Full Curriculum
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-sand-100 to-nude-100 rounded-2xl p-8 border border-nude-200">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-taupe-800 mb-4">
            Ready to Start Your <span className="text-blush-500">PMU Journey?</span>
          </h3>
          <p className="text-taupe-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful students who have transformed their careers through our comprehensive training
            programs. Each course includes hands-on practice, personalized mentorship, and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blush-500 hover:bg-blush-500 text-white px-8 py-3 rounded-full">
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              className="border-taupe-300 text-taupe-700 hover:bg-taupe-50 px-8 py-3 rounded-full bg-transparent"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp for Details
            </Button>
          </div>
        </div>
      </div>
      <Galleries/>
    </section>
  )
}
