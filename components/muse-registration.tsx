"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Instagram, MapPin, Calendar, Phone, User, AtSign } from "lucide-react"

export function MuseRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    dateOfBirth: "",
    mobile: "",
    instagram: "",
    facebook: "",
    tiktok: "",
    youtube: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Muse registration:", formData)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blush-50 via-nude-50 to-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Camera className="w-8 h-8 text-blush-500" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-taupe-800">
              Want to be our <span className="text-blush-500">Muse?</span>
            </h2>
          </div>

          <p className="text-xl text-taupe-600 max-w-3xl mx-auto leading-relaxed">
            Be part of our PMU journey! We're always looking for beautiful souls to showcase our artistry. Register
            below and we'll review your profile to see if you'd be a perfect fit for our next project.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-nude-200 shadow-xl rounded-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blush-100 to-nude-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-blush-500" />
                </div>
                <h3 className="text-2xl font-bold text-taupe-800 mb-2">Become Our Muse</h3>
                <p className="text-taupe-600">
                  Fill out the form below and we'll contact you after reviewing your profile
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-taupe-800 flex items-center gap-2">
                    <User className="w-5 h-5 text-blush-500" />
                    Personal Information
                  </h4>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">
                      Full Name <span className="text-blush-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-taupe-700 font-medium mb-2">
                        Location <span className="text-blush-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-taupe-400" />
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                          placeholder="City, State"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-taupe-700 font-medium mb-2">
                        Date of Birth <span className="text-blush-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-taupe-400" />
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">
                      Mobile Number <span className="text-blush-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-taupe-400" />
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Social Media Handles */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-taupe-800 flex items-center gap-2">
                    <AtSign className="w-5 h-5 text-blush-500" />
                    Social Media Handles
                  </h4>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">
                      Instagram Handle <span className="text-blush-500">* (Required)</span>
                    </label>
                    <div className="relative">
                      <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-500" />
                      <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        placeholder="@yourusername"
                      />
                    </div>
                    <p className="text-sm text-taupe-500 mt-1">
                      We'll review your Instagram profile to understand your style and aesthetic
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-taupe-700 font-medium mb-2">Facebook (Optional)</label>
                      <input
                        type="text"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        placeholder="Facebook profile URL"
                      />
                    </div>

                    <div>
                      <label className="block text-taupe-700 font-medium mb-2">TikTok (Optional)</label>
                      <input
                        type="text"
                        name="tiktok"
                        value={formData.tiktok}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        placeholder="@yourtiktok"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">YouTube (Optional)</label>
                    <input
                      type="text"
                      name="youtube"
                      value={formData.youtube}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                      placeholder="YouTube channel URL"
                    />
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="space-y-6">
                  <div className="bg-blush-50 rounded-xl p-6 border border-blush-200">
                    <h5 className="font-semibold text-taupe-800 mb-3">What happens next?</h5>
                    <ul className="space-y-2 text-sm text-taupe-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blush-400 rounded-full mt-2 flex-shrink-0"></span>
                        We'll review your profile and social media presence
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blush-400 rounded-full mt-2 flex-shrink-0"></span>
                        If selected, we'll contact you within 7-10 business days
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blush-400 rounded-full mt-2 flex-shrink-0"></span>
                        Selected muses may receive complimentary PMU services
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blush-400 rounded-full mt-2 flex-shrink-0"></span>
                        Your before/after photos may be featured on our social media
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1 w-4 h-4 text-blush-500 border-nude-300 rounded focus:ring-blush-400"
                    />
                    <label htmlFor="terms" className="text-sm text-taupe-600">
                      I agree to allow my photos to be used for marketing purposes and understand that I will be
                      contacted only if selected. I confirm that all information provided is accurate.
                      <span className="text-blush-500"> *</span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blush-400 to-nude-400 hover:from-blush-500 hover:to-nude-500 text-white rounded-xl py-4 text-lg font-semibold shadow-lg"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-nude-200">
            <h4 className="font-semibold text-taupe-800 mb-3">Why Become Our Muse?</h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-taupe-600">
              <div className="text-center">
                <div className="w-10 h-10 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Camera className="w-5 h-5 text-blush-500" />
                </div>
                <p>
                  <strong>Professional Photos</strong>
                  <br />
                  High-quality before/after shots for your portfolio
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-nude-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Instagram className="w-5 h-5 text-nude-600" />
                </div>
                <p>
                  <strong>Social Media Feature</strong>
                  <br />
                  Get featured on our Instagram and social channels
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-sand-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <User className="w-5 h-5 text-sand-600" />
                </div>
                <p>
                  <strong>Complimentary Service</strong>
                  <br />
                  Selected muses may receive free PMU treatments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
