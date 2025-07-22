import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Award, RefreshCw, Check } from "lucide-react"
import Image from "next/image"

export default function MicrobladingServicePage() {
  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      description: "We discuss your goals, assess your skin, and design the perfect brow shape for your face.",
    },
    {
      step: 2,
      title: "Design & Mapping",
      description: "Using precise measurements, we map out your ideal brow shape and get your approval.",
    },
    {
      step: 3,
      title: "Numbing",
      description: "Topical numbing cream is applied to ensure your comfort throughout the procedure.",
    },
    {
      step: 4,
      title: "Microblading",
      description: "Using sterile, single-use tools, we create natural hair strokes with premium pigments.",
    },
    {
      step: 5,
      title: "Aftercare",
      description: "You'll receive detailed aftercare instructions and products to ensure optimal healing.",
    },
  ]

  const benefits = [
    "Wake up with perfect brows every day",
    "Save time on your daily makeup routine",
    "Natural-looking hair stroke technique",
    "Customized to your face shape and style",
    "Long-lasting results (12-18 months)",
    "Safe, sterile procedure with premium pigments",
  ]

  const faqs = [
    {
      question: "How long does microblading last?",
      answer:
        "Microblading typically lasts 12-18 months, depending on your skin type, lifestyle, and aftercare. Touch-ups are recommended annually to maintain the best results.",
    },
    {
      question: "Does microblading hurt?",
      answer:
        "Most clients experience minimal discomfort. We use topical numbing cream to ensure your comfort throughout the procedure. Many describe it as similar to eyebrow tweezing.",
    },
    {
      question: "How long is the healing process?",
      answer:
        "Initial healing takes 7-10 days, with complete healing occurring over 4-6 weeks. During this time, you'll follow specific aftercare instructions to ensure optimal results.",
    },
    {
      question: "Who is not a candidate for microblading?",
      answer:
        "Microblading may not be suitable for pregnant/nursing women, those on certain medications, or individuals with specific skin conditions. We'll assess your candidacy during consultation.",
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
                  Premium Service
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Natural Results</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional <span className="text-pink-400">Microblading</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Transform your brows with our expert microblading service. Wake up every day with perfectly shaped,
                natural-looking eyebrows that enhance your natural beauty.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-semibold text-gray-900">2-3 Hours</div>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Safety</div>
                  <div className="font-semibold text-gray-900">Sterile</div>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Results</div>
                  <div className="font-semibold text-gray-900">Natural</div>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Lasts</div>
                  <div className="font-semibold text-gray-900">12-18 Months</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-white px-8">
                  Book Appointment - $350
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
                >
                  Free Consultation
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Microblading Results"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose <span className="text-pink-400">Microblading</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            The <span className="text-pink-400">Process</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-bold">{step.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked <span className="text-pink-400">Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
