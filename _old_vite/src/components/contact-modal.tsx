"use client"

import type React from "react"
import { useState } from "react"
import { X, Calendar, Mail, Phone, CheckCircle, Send } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  isDarkMode: boolean
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    "Workflow Automation",
    "AI Customer Support",
    "Smart Reporting",
    "Custom Business Tools",
    "Professional Websites",
    "System Integration",
    "Other / Not Sure",
  ]

  const budgetRanges = ["Under $5,000", "$5,000 - $15,000", "$15,000 - $30,000", "$30,000+", "Let's Discuss"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
        budget: "",
      })
      onClose()
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-rich-black-500/80 dark:bg-rich-black-100/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white/95 dark:bg-rich-black-400/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl border border-cambridge-blue-400/20 dark:border-dark-sea-green-400/30 animate-in fade-in zoom-in-95 duration-300">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-rich-black-400 dark:text-cambridge-blue-400 hover:text-dark-sea-green-500 dark:hover:text-dark-sea-green-400 transition-colors duration-300 rounded-lg hover:bg-cambridge-blue-100/50 dark:hover:bg-rich-black-300/50"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-6 sm:p-8">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-flex items-center gap-2 bg-russian-green-500/10 dark:bg-russian-green-400/20 border border-russian-green-500/20 dark:border-russian-green-400/30 rounded-full px-4 py-2 text-russian-green-600 dark:text-russian-green-300 font-semibold text-sm tracking-wide mb-4">
                    <Calendar className="h-4 w-4" />
                    Free Consultation
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-rich-black-200 dark:text-platinum-800 mb-2">
                    Let's Transform Your Business
                  </h2>
                  <p className="text-rich-black-600 dark:text-cambridge-blue-300">
                    Tell me about your challenges and I'll show you how automation can save you time and money.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-rich-black-300 dark:text-platinum-700"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-rich-black-300 border-2 border-cambridge-blue-300/30 dark:border-cambridge-blue-600 text-rich-black-200 dark:text-platinum-800 rounded-xl focus:ring-2 focus:ring-dark-sea-green-500 dark:focus:ring-dark-sea-green-400 focus:border-dark-sea-green-500 dark:focus:border-dark-sea-green-400 transition-all duration-300 placeholder:text-rich-black-600 dark:placeholder:text-cambridge-blue-400"
                        placeholder="John Smith"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-rich-black-300 dark:text-platinum-700"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-rich-black-300 border-2 border-cambridge-blue-300/30 dark:border-cambridge-blue-600 text-rich-black-200 dark:text-platinum-800 rounded-xl focus:ring-2 focus:ring-dark-sea-green-500 dark:focus:ring-dark-sea-green-400 focus:border-dark-sea-green-500 dark:focus:border-dark-sea-green-400 transition-all duration-300 placeholder:text-rich-black-600 dark:placeholder:text-cambridge-blue-400"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-rich-black-300 dark:text-platinum-700"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-rich-black-300 border-2 border-cambridge-blue-300/30 dark:border-cambridge-blue-600 text-rich-black-200 dark:text-platinum-800 rounded-xl focus:ring-2 focus:ring-dark-sea-green-500 dark:focus:ring-dark-sea-green-400 focus:border-dark-sea-green-500 dark:focus:border-dark-sea-green-400 transition-all duration-300 placeholder:text-rich-black-600 dark:placeholder:text-cambridge-blue-400"
                        placeholder="Your Company Inc."
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-rich-black-300 dark:text-platinum-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-rich-black-300 border-2 border-cambridge-blue-300/30 dark:border-cambridge-blue-600 text-rich-black-200 dark:text-platinum-800 rounded-xl focus:ring-2 focus:ring-dark-sea-green-500 dark:focus:ring-dark-sea-green-400 focus:border-dark-sea-green-500 dark:focus:border-dark-sea-green-400 transition-all duration-300 placeholder:text-rich-black-600 dark:placeholder:text-cambridge-blue-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block mb-2 text-sm font-medium text-rich-black-300 dark:text-platinum-700"
                      >
                        Service Needed
                      </label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-rich-black-300 border-2 border-cambridge-blue-300/30 dark:border-cambridge-blue-600 text-rich-black-200 dark:text-platinum-800 rounded-xl focus:ring-2 focus:ring-dark-sea-green-500 dark:focus:ring-dark-sea-green-400 focus:border-dark-sea-green-500 dark:focus:border-dark-sea-green-400 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label
                        htmlFor="budget"
                        className="block mb-2 text-sm font-medium text-rich-black-300 dark:text-platinum-700"
                      >
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        id="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-rich-black-300 border-2 border-cambridge-blue-300/30 dark:border-cambridge-blue-600 text-rich-black-200 dark:text-platinum-800 rounded-xl focus:ring-2 focus:ring-dark-sea-green-500 dark:focus:ring-dark-sea-green-400 focus:border-dark-sea-green-500 dark:focus:border-dark-sea-green-400 transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-rich-black-300 dark:text-platinum-700"
                    >
                      Tell me about your biggest time-waster *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-rich-black-300 border-2 border-cambridge-blue-300/30 dark:border-cambridge-blue-600 text-rich-black-200 dark:text-platinum-800 rounded-xl focus:ring-2 focus:ring-dark-sea-green-500 dark:focus:ring-dark-sea-green-400 focus:border-dark-sea-green-500 dark:focus:border-dark-sea-green-400 transition-all duration-300 placeholder:text-rich-black-600 dark:placeholder:text-cambridge-blue-400 resize-none"
                      placeholder="Manual data entry, customer support, social media management, inventory tracking..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-russian-green-500 to-dark-sea-green-500 hover:from-russian-green-600 hover:to-dark-sea-green-600 dark:from-russian-green-400 dark:to-dark-sea-green-400 dark:hover:from-russian-green-500 dark:hover:to-dark-sea-green-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Get My Free Assessment
                      </>
                    )}
                  </button>

                  {/* Trust indicators */}
                  <div className="text-center pt-4">
                    <p className="text-xs text-rich-black-600 dark:text-cambridge-blue-400 leading-relaxed">
                      ✓ Free consultation &nbsp;•&nbsp; ✓ No spam, ever &nbsp;•&nbsp; ✓ Response within 24 hours
                    </p>
                  </div>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8 sm:py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-russian-green-500 to-dark-sea-green-500 dark:from-russian-green-400 dark:to-dark-sea-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-rich-black-200 dark:text-platinum-800 mb-4">
                  Thanks! I'll be in touch soon.
                </h3>
                <p className="text-rich-black-600 dark:text-cambridge-blue-300 mb-6">
                  I've received your request and will get back to you within 24 hours with a personalized plan to save
                  you time and money.
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-rich-black-500 dark:text-cambridge-blue-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Check your email
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Expect my call
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
