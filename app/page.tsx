import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { NavigationSection } from "@/components/navigation-section"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Courses } from "@/components/courses"
import { WhyChooseMe } from "@/components/why-choose-me"
import { MuseRegistration } from "@/components/muse-registration"
import { Watermark } from "@/components/watermark"

export default function Home() {
  return (
    <div className="min-h-screen bg-nude-100 text-taupe-900 relative">
      <Watermark />
      <Header />
      <Hero />
      <NavigationSection />
      <About />
      <Courses />
      <Services />
      <Gallery />
      <Testimonials />
      <WhyChooseMe />
      <MuseRegistration />
      <Contact />
      <Footer />
    </div>
  )
}
