import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-taupe-800">
            Let's Build Your <span className="text-blush-500">PMU Journey</span>
          </h2>
          <p className="text-xl text-taupe-600">Or Book a Service</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white border-nude-200 shadow-xl rounded-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-taupe-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-taupe-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-taupe-700 font-medium mb-2">Service/Course</label>
                  <select className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors">
                    <option>Select an option</option>
                    <option>Microblading Course</option>
                    <option>Lip Blush Course</option>
                    <option>BB Glow Course</option>
                    <option>Business Mentorship</option>
                    <option>Microblading Service</option>
                    <option>Lip Blush Service</option>
                    <option>BB Glow Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-taupe-700 font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your goals and any questions you have..."
                  ></textarea>
                </div>

                <Button className="w-full bg-blush-400 hover:bg-blush-500 text-white rounded-xl py-4 text-lg">
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-nude-200 text-center">
                <p className="text-taupe-600 mb-4">Prefer chatting?</p>
                <a target="_blank" href="https://wa.me/919870168430">
                  <Button
                    variant="outline"
                    className="border-blush-300 text-blush-500 hover:bg-blush-50 rounded-xl px-6 bg-transparent"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Message Me on WhatsApp
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
