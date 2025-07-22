import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const achievements = [
    { icon: Users, number: "200+", label: "Students Trained" },
    { icon: Heart, number: "500+", label: "Happy Clients" },
    { icon: Clock, number: "5+", label: "Years Experience" },
    { icon: Award, number: "15+", label: "Certifications" },
  ]

  const certifications = [
    "Advanced Microblading Certification - PhiBrows Academy",
    "Lip Blush Specialist - International PMU Institute",
    "Permanent Eyeliner Master - Beauty Angels Academy",
    "Color Theory Advanced Course - PMU World",
    "Business Development for Beauty Professionals",
    "Health & Safety in Permanent Makeup",
  ]

  const values = [
    {
      title: "Excellence",
      description:
        "I believe in delivering the highest quality training and services, never compromising on standards.",
    },
    {
      title: "Empowerment",
      description: "My mission is to empower students with skills, confidence, and business knowledge to succeed.",
    },
    {
      title: "Safety First",
      description: "All procedures follow strict safety protocols with premium, sterile equipment and pigments.",
    },
    {
      title: "Ongoing Support",
      description: "Learning doesn't end after certification. I provide continued mentorship and guidance.",
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet <span className="text-pink-400">Shrutti Bose</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Passionate permanent makeup educator and artist dedicated to transforming lives through beauty and
                education.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <achievement.icon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                    <div className="text-gray-600 text-sm">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Shrutti Bose"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            My <span className="text-pink-400">Story</span>
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              My journey into permanent makeup began over 5 years ago when I discovered the transformative power of this
              art form. What started as a personal passion quickly evolved into a calling to help others feel confident
              and beautiful every day.
            </p>

            <p className="leading-relaxed mb-6">
              After completing extensive training with renowned international academies, I realized that many aspiring
              PMU artists lacked access to comprehensive, supportive education. This inspired me to transition from
              solely practicing as an artist to becoming an educator and mentor.
            </p>

            <p className="leading-relaxed mb-6">
              Today, I'm proud to have trained over 200 successful PMU artists who are now running thriving businesses
              across the country. My approach combines technical excellence with business acumen, ensuring my students
              are not just skilled artists but successful entrepreneurs.
            </p>

            <p className="leading-relaxed">
              When I'm not teaching or working with clients, I'm continuously learning and staying updated with the
              latest techniques and industry trends. I believe that education is a lifelong journey, and I'm committed
              to bringing the most current and effective methods to my students.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            My <span className="text-pink-400">Values</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-md text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Certifications & <span className="text-pink-400">Training</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Award className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
