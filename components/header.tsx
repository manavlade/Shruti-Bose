"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Instagram, MessageCircle } from "lucide-react"
import { ConsultationModal } from "./consultation-modal"
import Image from "next/image"

export function Header() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 w-full bg-nude-50/95 backdrop-blur-sm z-50 border-b border-nude-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Empty space for balance */}
            <div className="flex-1"></div>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/main-logo.png"
                alt="Shrutti Bose"
                width={200}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Right side - Social Icons & CTA */}
            <div className="flex-1 flex justify-end items-center space-x-4">
              <div className="flex items-center space-x-3">
                <a href="#" className="text-taupe-500 hover:text-blush-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-taupe-500 hover:text-blush-500 transition-colors">
                  <MessageCircle size={20} />
                </a>
                <a href="tel:+1234567890" className="text-taupe-500 hover:text-blush-500 transition-colors">
                  <Phone size={20} />
                </a>
              </div>
              <Button
                className="bg-blush-400 hover:bg-blush-500 text-white rounded-full px-6 py-2"
                onClick={() => setIsConsultationModalOpen(true)}
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
