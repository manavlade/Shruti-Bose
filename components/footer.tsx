import { Instagram, MessageCircle, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-taupe-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif text-2xl font-bold tracking-wider mb-4">
              <span className="text-nude-100">S H R U T T I</span>
              <span className="text-blush-400 ml-4">B O S E</span>
            </div>
            <p className="text-taupe-300 mb-6 max-w-md leading-relaxed">
              Professional permanent makeup educator and artist specializing in comprehensive training programs and
              premium PMU services. Empowering the next generation of beauty professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-taupe-400 hover:text-blush-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-taupe-400 hover:text-blush-400 transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="tel:+1234567890" className="text-taupe-400 hover:text-blush-400 transition-colors">
                <Phone size={24} />
              </a>
              <a href="mailto:hello@shruttibose.com" className="text-taupe-400 hover:text-blush-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-nude-100 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-taupe-300 hover:text-nude-100 transition-colors">
                  About Shrutti
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-taupe-300 hover:text-nude-100 transition-colors">
                  Portfolio Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-taupe-300 hover:text-nude-100 transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-taupe-300 hover:text-nude-100 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-taupe-300 hover:text-nude-100 transition-colors">
                  PMU Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Training & Services */}
          <div>
            <h3 className="text-nude-100 font-semibold mb-4">Our Offerings</h3>
            <ul className="space-y-2">
              <li>
                <a href="#courses" className="text-taupe-300 hover:text-nude-100 transition-colors">
                  PMU Training Courses
                </a>
              </li>
              <li>
                <a href="#services" className="text-taupe-300 hover:text-nude-100 transition-colors">
                  Professional Services
                </a>
              </li>
              <li>
                {/* <span className="text-taupe-300">Business Mentorship</span> */}
              </li>
              <li>
                {/* <span className="text-taupe-300">Certification Programs</span> */}
              </li>
              <li>
                {/* <span className="text-taupe-300">Ongoing Support</span> */}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-taupe-700 mt-12 pt-8 text-center">
          <p className="text-taupe-400">© 2024 Shrutti Bose Permanent Makeup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
