"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Video, MapPin, Users, BookOpen } from "lucide-react"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [activeTab, setActiveTab] = useState("video")

  if (!isOpen) return null

  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const dates = ["Today", "Tomorrow", "Jan 8", "Jan 9", "Jan 10", "Jan 11", "Jan 12"]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-nude-200">
            <h2 className="font-serif text-2xl font-bold text-taupe-800">Book Your Consultation</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-nude-100 transition-colors"
            >
              <X className="w-5 h-5 text-taupe-600" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-nude-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab("video")}
              className={`flex-1 py-4 px-4 text-center font-medium transition-colors whitespace-nowrap ${
                activeTab === "video"
                  ? "text-blush-500 border-b-2 border-blush-500 bg-blush-50"
                  : "text-taupe-600 hover:text-taupe-800"
              }`}
            >
              <Video className="w-5 h-5 mx-auto mb-1" />
              <span className="text-sm">Video Consultation</span>
            </button>
            <button
              onClick={() => setActiveTab("mentorship")}
              className={`flex-1 py-4 px-4 text-center font-medium transition-colors whitespace-nowrap ${
                activeTab === "mentorship"
                  ? "text-blush-500 border-b-2 border-blush-500 bg-blush-50"
                  : "text-taupe-600 hover:text-taupe-800"
              }`}
            >
              <Users className="w-5 h-5 mx-auto mb-1" />
              <span className="text-sm">PMU Mentorship</span>
            </button>
            <button
              onClick={() => setActiveTab("location1")}
              className={`flex-1 py-4 px-4 text-center font-medium transition-colors whitespace-nowrap ${
                activeTab === "location1"
                  ? "text-sand-600 border-b-2 border-sand-600 bg-sand-50"
                  : "text-taupe-600 hover:text-taupe-800"
              }`}
            >
              <MapPin className="w-5 h-5 mx-auto mb-1" />
              <span className="text-sm">Location 1</span>
            </button>
            <button
              onClick={() => setActiveTab("location2")}
              className={`flex-1 py-4 px-4 text-center font-medium transition-colors whitespace-nowrap ${
                activeTab === "location2"
                  ? "text-taupe-600 border-b-2 border-taupe-600 bg-taupe-50"
                  : "text-taupe-600 hover:text-taupe-800"
              }`}
            >
              <MapPin className="w-5 h-5 mx-auto mb-1" />
              <span className="text-sm">Location 2</span>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Video Consultation Tab */}
            {activeTab === "video" && (
              <div className="space-y-6">
                <div className="text-center bg-blush-50 rounded-xl p-6">
                  <Video className="w-12 h-12 text-blush-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-taupe-800 mb-2">Video Consultation</h3>
                  <p className="text-taupe-600 mb-4">
                    Get personalized advice from the comfort of your home. Perfect for discussing your PMU goals and
                    course options.
                  </p>
                  <div className="text-2xl font-bold text-blush-500">₹500</div>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-taupe-700 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-taupe-700 font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
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
                    <label className="block text-taupe-700 font-medium mb-2">Select Date</label>
                    <div className="grid grid-cols-4 gap-2">
                      {dates.map((date, index) => (
                        <button
                          key={index}
                          type="button"
                          className="p-2 text-sm border border-nude-200 rounded-lg hover:border-blush-400 hover:bg-blush-50 transition-colors"
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">Select Time</label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          type="button"
                          className="p-2 text-sm border border-nude-200 rounded-lg hover:border-blush-400 hover:bg-blush-50 transition-colors"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">What would you like to discuss?</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors resize-none"
                      placeholder="Course information, service details, career guidance..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-blush-400 hover:bg-blush-500 text-white rounded-xl py-4 text-lg">
                    Book Video Consultation - ₹500
                  </Button>
                </form>
              </div>
            )}

            {/* PMU Mentorship Tab */}
            {activeTab === "mentorship" && (
              <div className="space-y-6">
                <div className="text-center bg-gradient-to-br from-blush-50 to-nude-50 rounded-xl p-6">
                  <Users className="w-12 h-12 text-blush-500 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-taupe-800 mb-2">PMU Mentorship Program</h3>
                  <p className="text-taupe-600 mb-4">
                    Personalized guidance for PMU artists looking to grow their skills and business
                  </p>
                </div>

                {/* Mentorship Options */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Option 1: Existing PMU Artist */}
                  <div className="border-2 border-nude-200 rounded-xl p-6 hover:border-blush-300 transition-colors">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-8 h-8 text-blush-500" />
                      </div>
                      <h4 className="text-lg font-bold text-taupe-800 mb-2">For Existing PMU Artists</h4>
                      <div className="text-2xl font-bold text-blush-500 mb-2">₹1,000</div>
                    </div>
                    <ul className="text-sm text-taupe-600 space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blush-400 rounded-full mt-2 flex-shrink-0"></span>
                        Advanced technique refinement
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blush-400 rounded-full mt-2 flex-shrink-0"></span>
                        Portfolio review & improvement
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blush-400 rounded-full mt-2 flex-shrink-0"></span>
                        Client consultation strategies
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blush-400 rounded-full mt-2 flex-shrink-0"></span>
                        Pricing & business growth tips
                      </li>
                    </ul>
                  </div>

                  {/* Option 2: PMU Business Understanding */}
                  <div className="border-2 border-nude-200 rounded-xl p-6 hover:border-blush-300 transition-colors">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-nude-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="w-8 h-8 text-nude-600" />
                      </div>
                      <h4 className="text-lg font-bold text-taupe-800 mb-2">PMU Business Complete Guide</h4>
                      <div className="text-2xl font-bold text-nude-600 mb-2">₹2,000</div>
                    </div>
                    <ul className="text-sm text-taupe-600 space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-nude-500 rounded-full mt-2 flex-shrink-0"></span>
                        Complete PMU industry overview
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-nude-500 rounded-full mt-2 flex-shrink-0"></span>
                        Business setup & legal requirements
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-nude-500 rounded-full mt-2 flex-shrink-0"></span>
                        <strong>Comprehensive handbook included</strong>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-nude-500 rounded-full mt-2 flex-shrink-0"></span>
                        FAQs & industry insights
                      </li>
                    </ul>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">Select Mentorship Program</label>
                    <select className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors">
                      <option>Choose your mentorship program</option>
                      <option>Existing PMU Artist Mentorship - ₹1,000</option>
                      <option>PMU Business Complete Guide - ₹2,000 (includes handbook)</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-taupe-700 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-taupe-700 font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
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
                    <label className="block text-taupe-700 font-medium mb-2">Current PMU Experience Level</label>
                    <select className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors">
                      <option>Select your experience level</option>
                      <option>Complete Beginner</option>
                      <option>Some Training Completed</option>
                      <option>Practicing PMU Artist (0-1 years)</option>
                      <option>Experienced PMU Artist (1+ years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">Select Date</label>
                    <div className="grid grid-cols-4 gap-2">
                      {dates.map((date, index) => (
                        <button
                          key={index}
                          type="button"
                          className="p-2 text-sm border border-nude-200 rounded-lg hover:border-blush-400 hover:bg-blush-50 transition-colors"
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">Select Time</label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          type="button"
                          className="p-2 text-sm border border-nude-200 rounded-lg hover:border-blush-400 hover:bg-blush-50 transition-colors"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">
                      What specific areas would you like to focus on?
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors resize-none"
                      placeholder="Business growth, technique improvement, client acquisition, pricing strategies..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blush-400 to-nude-400 hover:from-blush-500 hover:to-nude-500 text-white rounded-xl py-4 text-lg">
                    Book PMU Mentorship Session
                  </Button>
                </form>
              </div>
            )}

            {/* Location 1 Tab */}
            {activeTab === "location1" && (
              <div className="space-y-6">
                <div className="text-center bg-sand-50 rounded-xl p-6">
                  <MapPin className="w-12 h-12 text-sand-600 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-taupe-800 mb-2">In-Person Consultation</h3>
                  <p className="text-taupe-600 mb-4">
                    Visit our studio for a detailed consultation and see our work up close.
                  </p>
                  <div className="text-lg font-bold text-sand-600">FREE</div>
                </div>

                <div className="bg-white border border-nude-200 rounded-xl p-4">
                  <h4 className="font-semibold text-taupe-800 mb-2">Location 1</h4>
                  <p className="text-taupe-600 text-sm mb-3">Click below to view location on Google Maps</p>
                  <a
                    href="https://maps.app.goo.gl/hQw5CetYcDZTvhnn7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sand-600 hover:text-sand-700 font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    View on Google Maps
                  </a>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-taupe-700 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-taupe-700 font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">Select Date</label>
                    <div className="grid grid-cols-4 gap-2">
                      {dates.map((date, index) => (
                        <button
                          key={index}
                          type="button"
                          className="p-2 text-sm border border-nude-200 rounded-lg hover:border-sand-400 hover:bg-sand-50 transition-colors"
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">Select Time</label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          type="button"
                          className="p-2 text-sm border border-nude-200 rounded-lg hover:border-sand-400 hover:bg-sand-50 transition-colors"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-sand-400 hover:bg-sand-500 text-white rounded-xl py-4 text-lg">
                    Book Free Consultation
                  </Button>
                </form>
              </div>
            )}

            {/* Location 2 Tab */}
            {activeTab === "location2" && (
              <div className="space-y-6">
                <div className="text-center bg-taupe-50 rounded-xl p-6">
                  <MapPin className="w-12 h-12 text-taupe-600 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-taupe-800 mb-2">In-Person Consultation</h3>
                  <p className="text-taupe-600 mb-4">
                    Visit our studio for a detailed consultation and see our work up close.
                  </p>
                  <div className="text-lg font-bold text-taupe-600">FREE</div>
                </div>

                <div className="bg-white border border-nude-200 rounded-xl p-4">
                  <h4 className="font-semibold text-taupe-800 mb-2">Location 2 - Rajouri Garden</h4>
                  <p className="text-taupe-600 text-sm mb-3">
                    J-12/14, near New Era Junior School, Block J-5, Block J, Rajouri Garden Extension, Rajouri Garden,
                    New Delhi, Delhi, 110027
                  </p>
                  <div className="flex items-center gap-2 text-taupe-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Near New Era Junior School, Rajouri Garden</span>
                  </div>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-taupe-700 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-taupe-700 font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-nude-50 border border-nude-200 rounded-xl text-taupe-800 focus:border-blush-400 focus:outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">Select Date</label>
                    <div className="grid grid-cols-4 gap-2">
                      {dates.map((date, index) => (
                        <button
                          key={index}
                          type="button"
                          className="p-2 text-sm border border-nude-200 rounded-lg hover:border-taupe-400 hover:bg-taupe-50 transition-colors"
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-taupe-700 font-medium mb-2">Select Time</label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          type="button"
                          className="p-2 text-sm border border-nude-200 rounded-lg hover:border-taupe-400 hover:bg-taupe-50 transition-colors"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-taupe-400 hover:bg-taupe-500 text-white rounded-xl py-4 text-lg">
                    Book Free Consultation
                  </Button>
                </form>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
