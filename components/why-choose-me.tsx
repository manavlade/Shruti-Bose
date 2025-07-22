import { Award, GraduationCap, Globe, MessageCircle, Package, Camera } from "lucide-react"

export function WhyChooseMe() {
  const features = [
    { icon: Award, text: "Certified PMU Educator" },
    { icon: GraduationCap, text: "200+ Trained Students" },
    { icon: Globe, text: "Trained Internationally" },
    { icon: MessageCircle, text: "24/7 Student Support" },
    { icon: Package, text: "Full Starter Kit" },
    { icon: Camera, text: "Portfolio Guidance" },
  ]

  return (
    <section className="py-20 bg-nude-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-taupe-800">
            Why Choose <span className="text-blush-500">Me?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-blush-500" />
              </div>
              <span className="text-taupe-700 font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
