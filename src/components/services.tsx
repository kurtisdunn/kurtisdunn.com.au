"use client"

import type React from "react"
import { useState } from "react"
import { Zap, Code, Bot, Share2, ArrowRight, Layers, Brain, CheckCircle, Star } from "lucide-react"

const services = [
  {
    icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Workflow Automation",
    description:
      "Stop copying data between spreadsheets and apps. I'll connect your tools so they talk to each other automatically.",
    features: ["Save 10+ hrs/week", "No more data entry", "Connect existing apps"],
    gradient: "from-dark-sea-green-500 to-russian-green-500",
    hoverGradient: "from-dark-sea-green-500 to-russian-green-500",
    popular: true,
  },
  {
    icon: <Bot className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "AI Customer Support",
    description: "Answer common customer questions 24/7 with a smart chatbot that sounds like your team.",
    features: ["24/7 availability", "Instant responses", "Reduce support load"],
    gradient: "from-russian-green-500 to-cambridge-blue-500",
    hoverGradient: "from-russian-green-400 to-cambridge-blue-400",
    popular: false,
  },
  {
    icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Smart Reporting",
    description:
      "Get the numbers you need without the headache. Automated reports that actually help you make decisions.",
    features: ["Weekly summaries", "Sales insights", "Easy to understand"],
    gradient: "from-cambridge-blue-500 to-dark-sea-green-500",
    hoverGradient: "from-cambridge-blue-400 to-dark-sea-green-400",
    popular: false,
  },
  {
    icon: <Code className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Custom Business Tools",
    description:
      "Why wrestle with software that doesn't fit? I'll build simple tools that work exactly how your business does.",
    features: ["Fits your process", "No monthly fees", "Easy to use"],
    gradient: "from-rich-black-600 to-russian-green-500",
    hoverGradient: "from-rich-black-600 to-russian-green-500",
    popular: false,
  },
  {
    icon: <Layers className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Professional Websites",
    description:
      "A website that actually brings in customers. Fast, mobile-friendly, and built to convert visitors into sales.",
    features: ["Mobile-first design", "SEO optimized", "Lead capture"],
    gradient: "from-cambridge-blue-500 to-rich-black-600",
    hoverGradient: "from-cambridge-blue-400 to-rich-black-500",
    popular: true,
  },
  {
    icon: <Share2 className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "System Integration",
    description:
      "Make your apps work together. No more manually moving data between your accounting, CRM, and other tools.",
    features: ["Connect any apps", "Real-time sync", "Reduce errors"],
    gradient: "from-dark-sea-green-500 to-cambridge-blue-500",
    hoverGradient: "from-dark-sea-green-400 to-cambridge-blue-400",
    popular: false,
  },
]

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-platinum-900 via-cambridge-blue-800 to-dark-sea-green-800 dark:from-rich-black-500 dark:via-rich-black-400 dark:to-rich-black-300 relative overflow-hidden"
    >
      {/* Animated background elements */}

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-dark-sea-green-600/30 dark:bg-russian-green-400/20 border border-russian-green-300/70 dark:border-russian-green-700/100 rounded-full px-3 sm:px-4 py-2 text-emerald-800 dark:text-russian-green-900 font-semibold text-xs sm:text-sm tracking-wide">
            <Zap className="h-3 sm:h-4 w-3 sm:w-4" />
            Solutions & Services
          </div>

          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-14 text-rich-black-100 dark:text-platinum-800">
              Stop Wasting Time on{" "}
              <span className="block  text-russian-green-300 dark:text-dark-sea-green-700">
                Repetitive Tasks
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-rich-black-100 dark:text-platinum-900 leading-relaxed max-w-3xl mx-auto">
              I help small businesses automate their workflows, reduce manual work, and focus on what matters most               <span className="font-semibold text-russian-green-300 dark:text-dark-sea-green-700">
                growing their business.</span>
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-russian-green-500 to-dark-sea-green-500 dark:from-russian-green-400 dark:to-dark-sea-green-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="h-3 w-3 fill-current" />
                  Popular
                </div>
              )}

              {/* Hover glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${hoveredService === index ? service.hoverGradient : service.gradient} rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`}
              ></div>

              <div className="relative bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-neutral-200/50 dark:border-neutral-700/50 p-6 sm:p-8 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:border-neutral-400/60 dark:group-hover:border-neutral-600/60 h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`flex justify-center items-center mb-4 sm:mb-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r ${service.gradient} text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 text-xs font-medium text-rich-black-200 dark:text-rich-black-100  bg-cambridge-blue-600/50 rounded-lg border border-cambridge-blue-300/30 transition-all duration-300 group-hover:scale-105 "
                      >
                        <CheckCircle className="h-3 w-3 text-dark-sea-green-300 dark:text-[#ffffff]" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated indicator */}
                {hoveredService === index && (
                  <div className="absolute top-4 right-4 w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full animate-ping"></div>
                )}

                {/* Hover arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className=" w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-rich-black-200 dark:text-platinum-800">
              Ready to Transform Your Business?
            </h3>
            <p className="text-sm sm:text-base text-rich-black-100 dark:text-platinum-900 max-w-2xl mx-auto">
              Let's discuss which solutions will save you the most time and money. Free consultation, no obligations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button
              className="
              bg-russian-green-500 hover:bg-russian-green-600 dark:bg-russian-green-400 dark:hover:bg-russian-green-500 text-platinum-900 dark:text-platinum-900 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer"
            >
              <span>Let's Solve Your Business Problems</span>
              <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="group inline-flex items-center justify-center gap-2 text-rich-black-100 dark:text-platinum-900 hover:text-dark-sea-green-500 dark:hover:text-dark-sea-green-700 hover:underline cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300">
              <span>View Case Studies</span>
              <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
