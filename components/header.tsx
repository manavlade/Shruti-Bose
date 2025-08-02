"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ConsultationModal } from "./consultation-modal"
import Image from "next/image"
import logo from "@/assets/Logo-1.png"

import insta from "@/assets/insta.png"
import wats from "@/assets/wats.png"
import phone from "@/assets/phone.png"
import { Menu, X } from "lucide-react" // You can also use Heroicons or any other icon lib
import { useRouter } from "next/navigation"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter();

  return (
    <>
      <header className="fixed top-0 w-full bg-nude-50/95 backdrop-blur-sm z-50 border-b border-nude-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
              onClick={() => router.push("/")}
                src={logo}
                alt="Shrutti Bose"
                width={110}
                height={25}
                className=""
              />
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex gap-6 text-lg font-medium">
              <a href="/#hero">Home</a>
              <a href="/#courses">Courses</a>
              <a href="/#services">Services</a>
              <a href="/#about">About</a>
              <a href="/#contact">Contact</a>
              <a href="/blog">Blog</a>
            </nav>

            {/* Right Icons & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <a target="_blank" href="https://www.instagram.com/shruttibose_pmu?igsh=MXFnZ25yMjJzb2U1dw%3D%3D&utm_source=qr" className="text-taupe-500 hover:text-blush-500 transition-colors">
                  <Image src={insta} alt="Instagram" width={20} height={20} />
                </a>
                <a
                  href="https://wa.me/919870168430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-taupe-500 hover:text-blush-500 transition-colors"
                >
                  <Image src={wats} alt="Whatsapp" width={20} height={20} />
                </a>

                <a target="_blank" href="tel:+919870168430" className="text-taupe-500 hover:text-blush-500 transition-colors">
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

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-taupe-600 hover:text-blush-500"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-nude-50 border-t border-nude-200 shadow-md">
            <nav className="flex flex-col space-y-4 px-6 py-4 text-sm font-medium">
              <a href="/#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="/#courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</a>
              <a href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <a href="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
              <div className="flex items-center space-x-3 pt-2">
                <a target="_blank" href="https://www.instagram.com/shruttibose_pmu?igsh=MXFnZ25yMjJzb2U1dw%3D%3D&utm_source=qr">
                  <Image src={insta} alt="Instagram" width={20} height={20} />
                </a>
                <a href="https://wa.me/919870168430" target="_blank">
                  <Image src={wats} alt="Whatsapp" width={20} height={20} />
                </a>
                <a href="tel:+919870168430">
                  <Image src={phone} alt="Phone" width={20} height={20} />
                </a>
              </div>
              <Button
                className="bg-blush-500 text-white rounded-full px-6 py-2 mt-2 w-full"
                onClick={() => {
                  window.open("https://calendly.com/enquiries-shruttibose", "_blank")
                  setIsMobileMenuOpen(false)
                }}
              >
                Book Consultation
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
