import type React from "react"
import { useState } from "react"
import {
  Users,
  Clock,
  Target,
  Award,
  Coffee,
  Lightbulb,
  TrendingUp,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import about from "@/assets/about.png"

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"story" | "approach" | "results">("story")

  const stats = [
    { icon: <Users className="h-5 w-5" />, value: "150+", label: "Small Businesses Helped" },
    { icon: <Clock className="h-5 w-5" />, value: "2,000+", label: "Hours Saved Monthly" },
    { icon: <Target className="h-5 w-5" />, value: "98%", label: "Client Satisfaction" },
    { icon: <Award className="h-5 w-5" />, value: "5+", label: "Years Experience" },
  ]

  const values = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Human-First Approach",
      description: "Technology should work for people, not the other way around.",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Simple Solutions",
      description: "Complex problems don't always need complex solutions.",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Real Results",
      description: "Every solution is measured by the time and money it saves you.",
    },
  ]

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-950 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-neutral-200/20 dark:bg-neutral-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-16 sm:-bottom-32 -right-16 sm:-right-32 w-32 sm:w-64 h-32 sm:h-64 bg-neutral-300/20 dark:bg-neutral-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8 sm:space-y-10">
            {/* Header */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 bg-dark-sea-green-600/30 dark:bg-russian-green-400/20 border border-russian-green-300/70 dark:border-russian-green-700/100 rounded-full px-3 sm:px-4 py-2 text-emerald-800 dark:text-russian-green-900 font-semibold text-xs sm:text-sm tracking-wide">
                <Coffee className="h-3 sm:h-4 w-3 sm:w-4" />
                Meet Kurtis Dunn
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-10 text-rich-black-100 dark:text-platinum-800">
                I've Been{" "}
                <span className="block text-russian-green-400 dark:text-dark-sea-green-400 ">
                  Where You Are
                </span>
              </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 sm:gap-4 border-b border-neutral-200 dark:border-neutral-700">
              {[
                { key: "story", label: "My Story" },
                { key: "approach", label: "My Approach" },
                { key: "results", label: "Results" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as "story" | "approach" | "results")}
                  className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-t-lg transition-all duration-300 ${activeTab === tab.key
                    ? "text-dark-sea-green-500 dark:text-dark-sea-green-400 border-b-2 border-dark-sea-green-500 dark:border-dark-sea-green-400 bg-white/10 dark:bg-rich-black-300/50"
                    : "text-rich-black-600 dark:text-cambridge-blue-300 hover:text-dark-sea-green-500 dark:hover:text-dark-sea-green-400"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-4 sm:space-y-6 min-h-[300px]">
              {activeTab === "story" && (
                <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-500">
                  <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {
                      "I'm Kurtis Dunn, and I understand what running a small business is really like. In my career I've worked with organizations of all sizes – from government to private enterprises with multi-million-dollar budgets. One thing I've learned is that simplicity is key: "
                    }
                    <span className="font-semibold text-dark-sea-green-500 dark:text-dark-sea-green-400">solutions don’t have to be complex or expensive to work well.</span>
                    {
                      " I've seen big companies get bogged down with bloated software, and I'm on a mission to help small businesses avoid that trap."
                    }
                  </p>
                  <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Think of me as your personal CTO without the enterprise price tag. I talk in plain language, not
                    jargon, and I focus only on what matters for your business. Together, {"we'll"} identify the exact
                    places where automation will save you time and money – no unnecessary features or hidden fees.
                  </p>
                </div>
              )}

              {activeTab === "approach" && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    My philosophy is simple: technology should make your life easier, not harder.
                  </p>
                  <div className="grid gap-4 sm:gap-6">
                    {values.map((value, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 sm:p-6 bg-white/80 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-700/50 backdrop-blur-sm"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-neutral-700 to-neutral-800 dark:from-neutral-600 dark:to-neutral-700 rounded-lg flex items-center justify-center text-white">
                          {value.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">{value.title}</h4>
                          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "results" && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {"Numbers don't lie. Here's the impact I've made for small businesses like yours:"}
                  </p>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-4 sm:p-6 bg-white/80 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-700/50 backdrop-blur-sm"
                      >
                        <div className="flex justify-center mb-2 sm:mb-3 text-neutral-700 dark:text-neutral-400">
                          {stat.icon}
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {[
                      "No tech jargon or confusing explanations",
                      "Solutions that fit your budget, not break it",
                      "Tools that actually save you time every day",
                    ].map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-neutral-700 dark:text-neutral-400 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="pt-6 sm:pt-8">
              <button
                className="w-full bg-russian-green-500 hover:bg-russian-green-600 dark:bg-russian-green-400 dark:hover:bg-russian-green-500 text-platinum-900 dark:text-platinum-900 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer"
              >
                <span>Let's Talk About Your Business</span>
                <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Visual Section */}
          <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neutral-300 to-neutral-400 dark:from-neutral-600 dark:to-neutral-700 rounded-2xl sm:rounded-3xl blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700/50">
                <div className="aspect-[4/3] rounded-xl flex items-center justify-center">
                  <img
                    src={about || "/placeholder.svg"}
                    alt="Kurtis Dunn"
                    className="w-full h-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105 rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cambridge-blue-500 to-russian-green-500 dark:from-cambridge-blue-400 dark:to-russian-green-400 rounded-xl blur opacity-15 group-hover:opacity-30 transition-all duration-300"></div>
                <div className="relative bg-white/80 dark:bg-rich-black-400/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-cambridge-blue-400/20 dark:border-dark-sea-green-400/30 text-center">
                  <Target className="h-8 w-8 text-russian-green-500 dark:text-russian-green-400 mx-auto mb-3" />
                  <div className="text-sm font-medium text-rich-black-300 dark:text-platinum-700">
                    Focused Solutions
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-dark-sea-green-500 to-cambridge-blue-500 dark:from-dark-sea-green-400 dark:to-cambridge-blue-400 rounded-xl blur opacity-15 group-hover:opacity-30 transition-all duration-300"></div>
                <div className="relative bg-white/80 dark:bg-rich-black-400/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-cambridge-blue-400/20 dark:border-dark-sea-green-400/30 text-center">
                  <Clock className="h-8 w-8 text-dark-sea-green-500 dark:text-dark-sea-green-400 mx-auto mb-3" />
                  <div className="text-sm font-medium text-rich-black-300 dark:text-platinum-700">Time Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Subtle accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-500 dark:from-neutral-600 dark:via-neutral-500 dark:to-neutral-400 opacity-30"></div>
    </section>
  )
}

export default About
