import Image from "next/image"
import sitting from "@/assets/sitting.jpeg";
export function About() {
  return (
    <section id="about" className="py-20 bg-cream-200">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-200 to-warmGray-200 rounded-3xl blur-2xl opacity-30"></div>
              <Image
                src={sitting}
                alt="Shrutti Bose teaching PMU"
                width={500}
                height={600}
                className="relative rounded-3xl shadow-xl"
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-charcoal-900 leading-tight">
              More Than Just Makeup.
              <br />
              <span className="text-gold-500">A Career. A Community. A Calling.</span>
            </h2>

            <div className="text-2xl font-medium text-charcoal-800 mb-6">Hi, I'm Shrutti.</div>

            <p className="text-lg text-charcoal-700 mb-6 leading-relaxed">
              Over the past 5 years, I've trained 200+ students and helped them launch successful PMU careers. My
              mission is simple — to provide you with not just skills, but confidence, clients, and clarity.
            </p>

            <p className="text-lg text-charcoal-700 leading-relaxed">
              Every course I offer is intimate, practical, and fully guided. You'll learn using real models, with
              personalized mentorship and post-training support that continues well beyond your certification.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
