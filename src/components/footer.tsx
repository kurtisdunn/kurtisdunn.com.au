"use client"

import type React from "react"
import { Mail, MapPin, Clock, ArrowRight, Heart } from "lucide-react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    "Workflow Automation",
    "AI Customer Support",
    "Smart Reporting",
    "Custom Business Tools",
    "Professional Websites",
    "System Integration",
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, text: "hello@kurtisdunn.com", href: "mailto:hello@kurtisdunn.com" },
    { icon: <MapPin className="h-4 w-4" />, text: "Remote & On-site", href: "#" },
    { icon: <Clock className="h-4 w-4" />, text: "Mon-Fri 9AM-6PM EST", href: "#" },
  ]



  return (
    <footer className="bg-gradient-to-br from-rich-black-400 via-rich-black-300 to-rich-black-200 dark:from-rich-black-200 dark:via-rich-black-100 dark:to-rich-black-100 text-cambridge-blue-300 dark:text-cambridge-blue-400 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-russian-green-500/5 dark:bg-russian-green-400/3 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-dark-sea-green-500/5 dark:bg-dark-sea-green-400/3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-russian-green-500 to-dark-sea-green-500 dark:from-russian-green-400 dark:to-dark-sea-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">KD</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-platinum-800 dark:text-platinum-900">Kurtis Dunn</div>
                  <div className="text-sm text-cambridge-blue-400 dark:text-cambridge-blue-500 -mt-1">
                    IT Counsulting & Automation
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-cambridge-blue-400 dark:text-cambridge-blue-500">
                Helping small businesses save time and money through smart automation and custom solutions. No tech
                jargon, just results that matter.
              </p>
              <div className="flex space-x-4">
                {/* {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-cambridge-blue-400 dark:text-cambridge-blue-500 hover:text-dark-sea-green-400 dark:hover:text-dark-sea-green-300 transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))} */}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-platinum-800 dark:text-platinum-900">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-sm text-cambridge-blue-400 dark:text-cambridge-blue-500 hover:text-dark-sea-green-400 dark:hover:text-dark-sea-green-300 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-platinum-800 dark:text-platinum-900">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-cambridge-blue-400 dark:text-cambridge-blue-500 hover:text-dark-sea-green-400 dark:hover:text-dark-sea-green-300 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-platinum-800 dark:text-platinum-900">Get In Touch</h3>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <li key={index}>
                    <a
                      href={contact.href}
                      className="text-sm text-cambridge-blue-400 dark:text-cambridge-blue-500 hover:text-dark-sea-green-400 dark:hover:text-dark-sea-green-300 transition-colors duration-300 flex items-center group"
                    >
                      <span className="text-russian-green-400 dark:text-russian-green-300 mr-3 group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </span>
                      {contact.text}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-russian-green-500 to-dark-sea-green-500 hover:from-russian-green-600 hover:to-dark-sea-green-600 dark:from-russian-green-400 dark:to-dark-sea-green-400 dark:hover:from-russian-green-500 dark:hover:to-dark-sea-green-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md w-full sm:w-auto">
                  <Mail className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cambridge-blue-600/20 dark:border-cambridge-blue-500/30 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-cambridge-blue-500 dark:text-cambridge-blue-600">
              © {currentYear} Kurtis Dunn. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-cambridge-blue-500 dark:text-cambridge-blue-600 hover:text-dark-sea-green-400 dark:hover:text-dark-sea-green-300 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-cambridge-blue-500 dark:text-cambridge-blue-600 hover:text-dark-sea-green-400 dark:hover:text-dark-sea-green-300 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <div className="flex items-center text-cambridge-blue-500 dark:text-cambridge-blue-600">
                Made with <Heart className="h-4 w-4 mx-1 text-russian-green-400 dark:text-russian-green-300" /> for
                small businesses
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
