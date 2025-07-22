import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Award, BookOpen, Check, Calendar } from "lucide-react"
import Image from "next/image"

export default function MicrobladingCoursePage() {
  const courseHighlights = [
    "Comprehensive 3-day hands-on training",
    "Live model practice sessions",
    "Complete starter kit included ($500 value)",
    "Professional certification upon completion",
    "1-year ongoing support and mentorship",
    "Business setup guidance",
    "Marketing templates and strategies",
    "Legal compliance training",
  ]

  const curriculum = [
    {
      day: "Day 1",
      title: "Theory & Fundamentals",
      topics: [
        "Skin anatomy and physiology",
        "Color theory and pigment selection",
        "Safety protocols and sanitation",
        "Client consultation process",
        "Brow mapping and design principles",
      ],
    },
    {
      day: "Day 2",
      title: "Technique & Practice",
      topics: [
        "Tool handling and blade techniques",
        "Hair stroke patterns and direction",
        "Practice on synthetic skin",
        "Pressure and depth control",
        "Troubleshooting common issues",
      ],
    },
    {
      day: "Day 3",
      title: "Live Models & Business",
      topics: [
        "Live model procedures (2-3 models)",
        "Aftercare instructions",
        "Business setup and pricing",
        "Marketing and client acquisition",
        "Legal requirements and insurance",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 via-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                  Certification Course
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Beginner to Advanced</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Microblading <span className="text-pink-400">Mastery Course</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Master the art of microblading with our comprehensive 3-day certification program. Learn from industry
                expert Shrutti Bose and start your successful PMU career.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-semibold text-gray-900">3 Days</div>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Class Size</div>
                  <div className="font-semibold text-gray-900">Max 6</div>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Certification</div>
                  <div className="font-semibold text-gray-900">Included</div>
                </div>
                <div className="text-center">
                  <BookOpen className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Support</div>
                  <div className="font-semibold text-gray-900">1 Year</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-white px-8">
                  Enroll Now - $2,500
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
                >
                  Download Syllabus
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Microblading Course"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What's <span className="text-pink-400">Included</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Course <span className="text-pink-400">Curriculum</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {curriculum.map((day, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-md">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-pink-600 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{day.day}</h3>
                    <p className="text-pink-400 font-medium">{day.title}</p>
                  </div>

                  <ul className="space-y-2">
                    {day.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Dates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Upcoming <span className="text-pink-400">Dates</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { date: "March 15-17, 2024", spots: "3 spots left", status: "available" },
              { date: "April 12-14, 2024", spots: "5 spots left", status: "available" },
              { date: "May 10-12, 2024", spots: "Waitlist only", status: "waitlist" },
            ].map((session, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-md">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{session.date}</h3>
                  <p
                    className={`text-sm mb-4 ${session.status === "available" ? "text-green-600" : "text-orange-600"}`}
                  >
                    {session.spots}
                  </p>
                  <Button
                    className={`w-full ${session.status === "available" ? "bg-pink-400 hover:bg-pink-500" : "bg-gray-400 hover:bg-gray-500"} text-white`}
                  >
                    {session.status === "available" ? "Reserve Spot" : "Join Waitlist"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
