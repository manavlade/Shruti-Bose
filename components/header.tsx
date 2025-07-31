"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ConsultationModal } from "./consultation-modal"
import Image from "next/image"
import logo from "@/assets/Logo-1.png";

import insta from "@/assets/insta.png";
import wats from "@/assets/wats.png";
import phone from "@/assets/phone.png";

export function Header() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 w-full bg-nude-50/95 backdrop-blur-sm z-50 border-b border-nude-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left side - Empty space for balance */}
            <div className="flex-1"></div>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center">
              <Image
                src={logo}
                alt="Shrutti Bose"
                width={110}
                height={25}
                className=""
              />
            </div>

            {/* Right side - Social Icons & CTA */}
            <div className="flex-1 flex justify-end items-center space-x-4">
              <div className="flex items-center space-x-3">
                <a href="https://www.instagram.com/shruttibose_pmu?igsh=MXFnZ25yMjJzb2U1dw%3D%3D&utm_source=qr" className="text-taupe-500 hover:text-blush-500 transition-colors">
                  <Image src={insta} alt="Instagram" width={20} height={20} />
                </a>
                <a href="#" className="text-taupe-500 hover:text-blush-500 transition-colors">
                  <Image src={wats} alt="Whatsapp" width={20} height={20} />
                </a>
                <a href="tel:+1234567890" className="text-taupe-500 hover:text-blush-500 transition-colors">
                  <Image src={phone} alt="Phone" width={20} height={20} />
                </a>
              </div>
              <Button
                className="bg-blush-500 text-white rounded-full px-6 py-2"
                onClick={() => window.open("https://calendly.com/enquiries-shruttibose", "_blank")}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      <ConsultationModal isOpen={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)} />
    </>
  )
}
