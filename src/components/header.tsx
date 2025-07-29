
import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Calendar, Sun, Moon } from "lucide-react"

interface HeaderProps {
  isDarkMode?: boolean
  toggleDarkMode?: () => void
  onContactClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
      const isDark = savedTheme === "dark"
      setIsDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(systemPrefersDark)
      if (systemPrefersDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [])

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  // const services = [
  //   "Workflow Automation",
  //   "AI Customer Support",
  //   "Smart Reporting",
  //   "Custom Business Tools",
  //   "Professional Websites",
  //   "System Integration",
  // ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 dark:bg-rich-black-300/90 backdrop-blur-md shadow-lg border-b border-cambridge-blue-400/20 dark:border-dark-sea-green-400/30"
        : "bg-white/95 dark:bg-rich-black-300/90"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-russian-green-500 to-dark-sea-green-500 dark:from-russian-green-400 dark:to-dark-sea-green-400 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-sm sm:text-base">KD</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-rich-black-200 dark:text-platinum-800 group-hover:text-dark-sea-green-500 dark:group-hover:text-dark-sea-green-400 transition-colors duration-300">
                  Kurtis Dunn
                </div>
                <div className="text-xs text-rich-black-600 dark:text-cambridge-blue-300 -mt-1">
                  IT Counsulting & Automation
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">

                <a
                  href={item.href}
                  className="text-rich-black-300 dark:text-cambridge-blue-900 hover:text-dark-sea-green-500 dark:hover:text-dark-sea-green-400  transition-colors duration-300"
                >
                  {item.name}
                </a>

              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-rich-black-400 dark:text-cambridge-blue-400 hover:text-dark-sea-green-500 dark:hover:text-dark-sea-green-400 transition-colors duration-300 rounded-lg hover:bg-cambridge-blue-100/50 dark:hover:bg-rich-black-300/50"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={onContactClick}
              className="group inline-flex items-center justify-center gap-2 w-full bg-russian-green-500 hover:bg-russian-green-600 dark:bg-russian-green-400 dark:hover:bg-russian-green-500 text-platinum-900 dark:text-platinum-900 font-semibold text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl  text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
            >
              <Calendar className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-rich-black-300 dark:text-cambridge-blue-300 hover:text-dark-sea-green-500 dark:hover:text-dark-sea-green-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-rich-black-400/95 backdrop-blur-md border-b border-cambridge-blue-400/20 dark:border-dark-sea-green-400/30 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-rich-black-300 dark:text-cambridge-blue-300 hover:text-dark-sea-green-500 dark:hover:text-dark-sea-green-400  py-2 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-between py-2">
                <span className="text-rich-black-300 dark:text-cambridge-blue-300 font-medium">Dark Mode</span>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 text-rich-black-400 dark:text-cambridge-blue-400 hover:text-dark-sea-green-500 dark:hover:text-dark-sea-green-400 transition-colors duration-300 rounded-lg hover:bg-cambridge-blue-100/50 dark:hover:bg-rich-black-300/50"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>
              <div className="pt-4 border-t border-cambridge-blue-400/20 dark:border-dark-sea-green-400/30">
                <button
                  onClick={() => {
                    onContactClick()
                    setIsMenuOpen(false)
                  }}
                  className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-russian-green-500 to-dark-sea-green-500 hover:from-russian-green-600 hover:to-dark-sea-green-600 dark:from-russian-green-400 dark:to-dark-sea-green-400 dark:hover:from-russian-green-500 dark:hover:to-dark-sea-green-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
                >
                  <Calendar className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
