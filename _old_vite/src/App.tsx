import './App.css';

import { useState, useEffect } from "react"
import { Routes, Route } from "react-router"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Footer from "@/components/footer"
import ContactModal from "@/components/contact-modal"
import Assessment from "@/components/assessment"

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isContactModalOpen, setContactModalOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark)
    setIsDarkMode(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    document.documentElement.classList.toggle("dark", newDarkMode)
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")
  }

  useEffect(() => {
    document.body.style.overflow = isContactModalOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isContactModalOpen])

  const HomePage = () => (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onContactClick={() => setContactModalOpen(true)} />
      <main className="pt-16 sm:pt-20">
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)} isDarkMode={isDarkMode} />
    </div>
  )

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/assessment"
        element={
          <Assessment
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            onContactClick={() => setContactModalOpen(true)}
          />
        }
      />
    </Routes>
  )
}
