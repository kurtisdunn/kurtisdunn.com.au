
import type React from "react"
import { useState } from "react"
import { Calendar, Zap, CheckCircle } from "lucide-react"
import herobg from "../assets/herobg.png" // Adjust the path as necessary
import { useNavigate } from "react-router"

const Hero: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Store form data in sessionStorage for the assessment page
    sessionStorage.setItem(
      "heroFormData",
      JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    )

    setIsSubmitting(false)

    // Navigate to assessment page
    navigate("/assessment")
  }

  return (
    <>
      <section
        className="px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background overlay with gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-tl from-neutral-800/90 via-neutral-700/70 to-neutral-900/95 dark:from-neutral-900/95 dark:via-neutral-800/80 dark:to-neutral-950/100"></div> */}

        <div className="absolute inset-0 bg-gradient-to-tl to-platinum-800/100 via-cambridge-blue-900/60 dark:from-neutral-900/95 dark:via-neutral-800/80 dark:to-neutral-950/100"></div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-dark-sea-green-600/30 dark:bg-russian-green-400/20 border border-russian-green-300/70 dark:border-russian-green-700/100 rounded-full px-3 sm:px-4 py-2 text-emerald-800 dark:text-russian-green-900 font-semibold text-xs sm:text-sm tracking-wide">
                <Zap className="h-3 sm:h-4 w-3 sm:w-4" />
                Stop Doing Busy Work
              </div>

              {/* Main Heading */}
              <div className="space-y-1 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-14 text-rich-black-100 dark:text-white">
                  Get Back to{" "}
                  <span className="block text-russian-green-300 dark:text-dark-sea-green-700">
                    Running Your Business
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-rich-black-100 dark:text-platinum-900 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Stop wrestling with software that doesn't fit your business. I bring enterprise-level automation to
                  small businesses at prices that actually make sense.{" "}
                  <span className="font-semibold text-dark-sea-green-300 dark:text-dark-sea-green-900">
                    Save 10+ hours per week
                  </span>{" "}
                  on repetitive tasks.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">

                <button className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-platinum-900 dark:text-rich-platinum-900 bg-russian-green-500 hover:bg-russian-green-600 dark:bg-russian-green-400 dark:hover:bg-russian-green-500 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg cursor-pointer">
                  <Calendar className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Book Free Consultation
                </button>

              </div>


            </div>

            {/* Right Content - Contact Form */}
            <div className="w-full max-w-lg mx-auto mt-8 lg:mt-0">
              <div className="bg-white/95 dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 p-6 sm:p-8 relative">
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neutral-500/20 to-neutral-600/20 dark:from-neutral-400/20 dark:to-neutral-500/20 rounded-2xl sm:rounded-3xl blur opacity-30"></div>

                <div className="relative space-y-5 sm:space-y-6">
                  {/* Form Header */}
                  <div className="text-center space-y-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                      Start Your Free Business Assessment
                    </h2>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      See how much time you could save with automation
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-all duration-300 placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
                        placeholder="John Smith"
                        required
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-all duration-300 placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
                        placeholder="john@company.com.au"
                        required
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{errors.email}</p>
                      )}
                    </div>

                    {/* Company Field */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-all duration-300 placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
                        placeholder="Your Company Inc."
                        required
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{errors.company}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300"
                      >
                        What's your biggest time-waster? (Optional)
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-all duration-300 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 resize-none"
                        placeholder="Manual data entry, customer support, social media automation..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-russian-green-500 hover:bg-russian-green-600 dark:bg-russian-green-400 dark:hover:bg-russian-green-500 text-platinum-900 dark:text-platinum-900 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer"
                    >
                      <CheckCircle className="w-5 h-5" />
                      {isSubmitting ? "Processing..." : "Start My Free Assessment"}
                    </button>

                    {/* Trust Indicators */}
                    <div className="text-center pt-2">
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        ✓ Takes 5 minutes &nbsp;•&nbsp; ✓ Personalized results &nbsp;•&nbsp; ✓ No spam, ever
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
