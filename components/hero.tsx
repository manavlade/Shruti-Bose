"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Flower } from "lucide-react"
import Image from "next/image"
import { ConsultationModal } from "./consultation-modal"
import logo from "@/assets/LOGO-PNG.png"

export function Hero() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-nude-50 via-sand-50 to-blush-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blush-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-sand-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <Image
                  src={logo}
                  alt="Shrutti Bose"
                  width={300}
                  height={60}
                  className="mx-auto lg:mx-0 object-contain"
                />
              </div>

              <div className="text-xl md:text-2xl text-taupe-600 mb-6 font-medium">PMU Educator | Artist | Mentor</div>

              <p className="text-lg text-taupe-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Empowering women to build beauty careers through modern, minimal, and hands-on permanent makeup
                training.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-taupe-600">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blush-500" />
                  <span className="font-medium">200+ Trained Artists</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blush-500" />
                  <span className="font-medium">5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flower className="w-5 h-5 text-blush-500" />
                  <span className="font-medium">Real Model Practice</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-blush-400 hover:bg-blush-500 text-white rounded-full px-8 py-4 text-lg shadow-lg"
                >
                  View Courses
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-taupe-300 text-taupe-700 hover:bg-taupe-50 rounded-full px-8 py-4 text-lg bg-transparent"
                  onClick={() => setIsConsultationModalOpen(true)}
                >
                  Book a Consultation
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blush-200 to-sand-200 rounded-3xl blur-2xl opacity-30"></div>
                <Image
                  src="/images/shrutti-hero.jpg"
                  alt="Shrutti Bose - PMU Educator & Artist"
                  width={500}
                  height={600}
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)} />
    </>
  )
}
