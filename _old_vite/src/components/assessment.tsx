"use client"

import { useState, useEffect } from "react"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Building2,
  Settings,
  Zap,
  Target,
  Send,
  User,
  Mail,
  Building,
  Home,
  UserCheck,
} from "lucide-react"
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Header from "./header"
import Footer from "./footer"

interface HeroFormData {
  name: string
  email: string
  company: string
  message: string
  timestamp: string
}

interface AssessmentFormData {
  industry: string
  teamSize: string
  businessAge: string
  timeConsumingTasks: string[]
  otherTimeConsumingTask: string
  biggestBottleneck: string
  taskTracking: string
  processConsistency: string
  timeWasterSituations: string[]
  adminHours: string
  currentTools: string[]
  currentAutomation: string[]
  techComfort: string
  automationOpenness: string
  businessGoals: string[]
  otherBusinessGoal: string
  extraTimeUse: string
  timeImportance: string
}

interface AssessmentProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
  onContactClick: () => void
}

const sections = [
  {
    id: "contact",
    title: "Your Information",
    icon: <UserCheck className="h-5 w-5 sm:h-6 sm:w-6" />,
    description: "Let's start with your basic information",
  },
  {
    id: "business",
    title: "About Your Business",
    icon: <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />,
    description: "Tell us about your business basics",
  },
  {
    id: "operations",
    title: "Daily Operations",
    icon: <Settings className="h-5 w-5 sm:h-6 sm:w-6" />,
    description: "Your day-to-day work and routines",
  },
  {
    id: "timewasters",
    title: "Time Wasters",
    icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />,
    description: "Identify what slows you down",
  },
  {
    id: "technology",
    title: "Technology & Tools",
    icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
    description: "Your current tools and automation readiness",
  },
  {
    id: "goals",
    title: "Goals & Growth",
    icon: <Target className="h-5 w-5 sm:h-6 sm:w-6" />,
    description: "Where you want to take your business",
  },
]

export default function Assessment({ isDarkMode, toggleDarkMode, onContactClick }: AssessmentProps) {
  const navigate = useNavigate()
  const [heroData, setHeroData] = useState<HeroFormData | null>(null)
  const [hasHeroData, setHasHeroData] = useState<boolean>(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<AssessmentFormData>({
    industry: "",
    teamSize: "",
    businessAge: "",
    timeConsumingTasks: [],
    otherTimeConsumingTask: "",
    biggestBottleneck: "",
    taskTracking: "",
    processConsistency: "",
    timeWasterSituations: [],
    adminHours: "",
    currentTools: [],
    currentAutomation: [],
    techComfort: "",
    automationOpenness: "",
    businessGoals: [],
    otherBusinessGoal: "",
    extraTimeUse: "",
    timeImportance: "",
  })

  // Check for hero form data
  useEffect(() => {
    const storedData = sessionStorage.getItem("heroFormData")
    if (storedData) {
      try {
        const parsedData: HeroFormData = JSON.parse(storedData)
        const dataAge = new Date().getTime() - new Date(parsedData.timestamp).getTime()
        const oneHour = 60 * 60 * 1000

        if (dataAge <= oneHour) {
          setHeroData(parsedData)
          setHasHeroData(true)
          setCurrentSection(1) // Skip contact form if we have hero data
          return
        } else {
          sessionStorage.removeItem("heroFormData")
        }
      } catch (error) {
        console.error("Invalid hero form data:", error)
        sessionStorage.removeItem("heroFormData")
      }
    }

    // If no valid hero data, start with contact form
    setHasHeroData(false)
    setCurrentSection(0)
  }, [])

  const totalSections = hasHeroData ? sections.length - 1 : sections.length
  const progress = ((currentSection + (hasHeroData ? 0 : 1)) / totalSections) * 100

  const handleInputChange = (field: keyof AssessmentFormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleContactInputChange = (field: keyof typeof contactFormData, value: string) => {
    setContactFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (contactErrors[field]) {
      setContactErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateContactForm = () => {
    const newErrors: Record<string, string> = {}

    if (!contactFormData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!contactFormData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactFormData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!contactFormData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    setContactErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    // If on contact form, validate before proceeding
    if (currentSection === 0 && !hasHeroData) {
      if (!validateContactForm()) {
        return
      }
      // Create hero data from contact form
      const newHeroData: HeroFormData = {
        ...contactFormData,
        timestamp: new Date().toISOString(),
      }
      setHeroData(newHeroData)
      setHasHeroData(true)
    }

    const maxSection = hasHeroData ? sections.length - 1 : sections.length - 1
    if (currentSection < maxSection) {
      setCurrentSection(currentSection + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePrevious = () => {
    const minSection = hasHeroData ? 1 : 0
    if (currentSection > minSection) {
      setCurrentSection(currentSection - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const completeData = {
      heroData,
      assessmentData: formData,
      completedAt: new Date().toISOString(),
    }

    console.log("Complete assessment data:", completeData)
    sessionStorage.removeItem("heroFormData")
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleBackToHome = () => {
    sessionStorage.removeItem("heroFormData")
    navigate("/")
  }

  const renderSection = () => {
    switch (currentSection) {
      case 0: // Contact Information (only shown if no hero data)
        if (hasHeroData) return null
        return (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-neutral-100 dark:bg-neutral-800 p-4 sm:p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-700 dark:bg-neutral-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserCheck className="h-5 w-5 sm:h-6 sm:w-6 text-white dark:text-rich-black-200" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base mb-2">
                    Welcome to Your Business Automation Assessment
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    {"Let's"} start by getting to know you and your business. This information helps us provide
                    personalized recommendations.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                Your Name *
              </Label>
              <Input
                placeholder="John Smith"
                value={contactFormData.name}
                onChange={(e) => handleContactInputChange("name", e.target.value)}
                className={`text-base sm:text-lg py-3 sm:py-4 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white focus:border-neutral-500 dark:focus:border-neutral-400 focus:ring-neutral-500/20 dark:focus:ring-neutral-400/20 ${contactErrors.name ? "border-red-500 dark:border-red-400" : ""
                  }`}
              />
              {contactErrors.name && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{contactErrors.name}</p>
              )}
            </div>

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                Your Email *
              </Label>
              <Input
                type="email"
                placeholder="john@company.com"
                value={contactFormData.email}
                onChange={(e) => handleContactInputChange("email", e.target.value)}
                className={`text-base sm:text-lg py-3 sm:py-4 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white focus:border-neutral-500 dark:focus:border-neutral-400 focus:ring-neutral-500/20 dark:focus:ring-neutral-400/20 ${contactErrors.email ? "border-red-500 dark:border-red-400" : ""
                  }`}
              />
              {contactErrors.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{contactErrors.email}</p>
              )}
            </div>

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                Company Name *
              </Label>
              <Input
                placeholder="Your Company Inc."
                value={contactFormData.company}
                onChange={(e) => handleContactInputChange("company", e.target.value)}
                className={`text-base sm:text-lg py-3 sm:py-4 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white focus:border-neutral-500 dark:focus:border-neutral-400 focus:ring-neutral-500/20 dark:focus:ring-neutral-400/20 ${contactErrors.company ? "border-red-500 dark:border-red-400" : ""
                  }`}
              />
              {contactErrors.company && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">{contactErrors.company}</p>
              )}
            </div>

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                {"What's"} your biggest time-waster? (Optional)
              </Label>
              <Textarea
                placeholder="Manual data entry, customer support, social media automation..."
                value={contactFormData.message}
                onChange={(e) => handleContactInputChange("message", e.target.value)}
                className="min-h-[100px] sm:min-h-[120px] text-base bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white focus:border-neutral-500 dark:focus:border-neutral-400 focus:ring-neutral-500/20 dark:focus:ring-neutral-400/20"
              />
            </div>
          </div>
        )

      case 1: // About Your Business (adjusted index)
        // const sectionIndex = hasHeroData ? 1 : 1
        return (
          <div className="space-y-6 sm:space-y-8">
            {/* Personalized greeting */}
            {heroData && (
              <div className="bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 p-4 sm:p-6 rounded-xl border border-neutral-200 dark:border-neutral-600">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neutral-700 dark:bg-neutral-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base mb-2">
                      Hi {heroData.name}! {"Let's"} dive deeper into {heroData.company}
                      {"'s"} automation needs.
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span className="truncate">{heroData.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span className="truncate">{heroData.company}</span>
                      </div>
                    </div>
                    {heroData.message && (
                      <div className="mt-3 p-3 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-300 dark:border-neutral-600">
                        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                          <strong>Your biggest time-waster:</strong> {`"${heroData.message}"`}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                What industry is your business in?
              </Label>
              <Input
                placeholder="e.g., Construction, Retail, Professional Services, Healthcare..."
                value={formData.industry}
                onChange={(e) => handleInputChange("industry", e.target.value)}
                className="text-base sm:text-lg py-3 sm:py-4 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white focus:border-neutral-500 dark:focus:border-neutral-400 focus:ring-neutral-500/20 dark:focus:ring-neutral-400/20"
              />
            </div>

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                How many people work in your business?
              </Label>
              <RadioGroup value={formData.teamSize} onValueChange={(value) => handleInputChange("teamSize", value)}>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {["1-5", "6-20", "21-50", "51+"].map((size) => (
                    <div
                      key={size}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                    >
                      <RadioGroupItem
                        value={size}
                        id={size}
                        className="border-neutral-400 dark:border-neutral-500 text-neutral-700 dark:text-neutral-400"
                      />
                      <Label
                        htmlFor={size}
                        className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 cursor-pointer flex-1"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                How long have you been in business?
              </Label>
              <RadioGroup
                value={formData.businessAge}
                onValueChange={(value) => handleInputChange("businessAge", value)}
              >
                <div className="space-y-3">
                  {[
                    { value: "less-than-1", label: "Less than 1 year" },
                    { value: "1-5", label: "1–5 years" },
                    { value: "6-10", label: "6–10 years" },
                    { value: "more-than-10", label: "More than 10 years" },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="border-neutral-400 dark:border-neutral-500 text-neutral-700 dark:text-neutral-400"
                      />
                      <Label
                        htmlFor={option.value}
                        className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 cursor-pointer flex-1"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        )

      // Continue with other cases, adjusting indices as needed...
      case 2: // Daily Operations
        return (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-neutral-100 dark:bg-neutral-800 p-4 sm:p-5 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                {"We'll"} ask about your day-to-day work. Think about a typical week as you answer these questions.
              </p>
            </div>

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                Which tasks take up most of your time each week? (Check all that apply)
              </Label>
              <div className="space-y-3">
                {[
                  "Managing inventory or orders",
                  "Invoicing and billing",
                  "Scheduling appointments or calendar management",
                  "Responding to customer emails or messages",
                  "Marketing tasks (social posts, email campaigns)",
                  "Data entry or record-keeping (spreadsheets, reports)",
                  "Payroll or team management (timesheets, pay)",
                ].map((task) => (
                  <div
                    key={task}
                    className="flex items-start space-x-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                  >
                    <Checkbox
                      id={task}
                      checked={formData.timeConsumingTasks.includes(task)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleInputChange("timeConsumingTasks", [...formData.timeConsumingTasks, task])
                        } else {
                          handleInputChange(
                            "timeConsumingTasks",
                            formData.timeConsumingTasks.filter((t) => t !== task),
                          )
                        }
                      }}
                      className="mt-0.5 border-neutral-400 dark:border-neutral-500 data-[state=checked]:bg-neutral-700 dark:data-[state=checked]:bg-neutral-600 data-[state=checked]:border-neutral-700 dark:data-[state=checked]:border-neutral-600"
                    />
                    <Label
                      htmlFor={task}
                      className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 cursor-pointer"
                    >
                      {task}
                    </Label>
                  </div>
                ))}
                <div className="flex items-start space-x-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700">
                  <Checkbox
                    id="other-task"
                    checked={formData.otherTimeConsumingTask !== ""}
                    onCheckedChange={(checked) => {
                      if (!checked) {
                        handleInputChange("otherTimeConsumingTask", "")
                      }
                    }}
                    className="mt-0.5 border-neutral-400 dark:border-neutral-500 data-[state=checked]:bg-neutral-700 dark:data-[state=checked]:bg-neutral-600 data-[state=checked]:border-neutral-700 dark:data-[state=checked]:border-neutral-600"
                  />
                  <div className="flex-1 space-y-2">
                    <Label
                      htmlFor="other-task"
                      className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 cursor-pointer"
                    >
                      Other:
                    </Label>
                    <Input
                      placeholder="Specify other task..."
                      value={formData.otherTimeConsumingTask}
                      onChange={(e) => handleInputChange("otherTimeConsumingTask", e.target.value)}
                      className="text-sm bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white focus:border-neutral-500 dark:focus:border-neutral-400 focus:ring-neutral-500/20 dark:focus:ring-neutral-400/20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                What is the biggest bottleneck or frustration in your daily workflow?
              </Label>
              <Textarea
                placeholder="Describe your biggest workflow challenge..."
                value={formData.biggestBottleneck}
                onChange={(e) => handleInputChange("biggestBottleneck", e.target.value)}
                className="min-h-[100px] sm:min-h-[120px] text-base bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white focus:border-neutral-500 dark:focus:border-neutral-400 focus:ring-neutral-500/20 dark:focus:ring-neutral-400/20"
              />
            </div>

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                How do you currently keep track of tasks and deadlines?
              </Label>
              <RadioGroup
                value={formData.taskTracking}
                onValueChange={(value) => handleInputChange("taskTracking", value)}
              >
                <div className="space-y-3">
                  {[
                    { value: "paper", label: "Paper to-do lists or notebooks" },
                    { value: "spreadsheets", label: "Spreadsheets (e.g. Excel, Google Sheets)" },
                    { value: "digital-tools", label: "A digital tool or app (e.g. Trello, Asana, calendar)" },
                    { value: "memory", label: "Mental notes / memory" },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className="flex items-start space-x-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="mt-0.5 border-neutral-400 dark:border-neutral-500 text-neutral-700 dark:text-neutral-400"
                      />
                      <Label
                        htmlFor={option.value}
                        className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 cursor-pointer flex-1"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                On a scale of 1–5, how consistent and documented are your daily processes?
              </Label>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">(1 = not at all, 5 = very well)</p>
              <RadioGroup
                value={formData.processConsistency}
                onValueChange={(value) => handleInputChange("processConsistency", value)}
              >
                <div className="flex flex-wrap gap-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div
                      key={num}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 min-w-[60px]"
                    >
                      <RadioGroupItem
                        value={num.toString()}
                        id={`process-${num}`}
                        className="border-neutral-400 dark:border-neutral-500 text-neutral-700 dark:text-neutral-400"
                      />
                      <Label
                        htmlFor={`process-${num}`}
                        className="text-base font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer"
                      >
                        {num}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        )

      // Add remaining cases (3, 4, 5) with similar structure...
      // For brevity, I'll include just one more case and indicate the pattern

      case 3: // Time Wasters
        return (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-neutral-100 dark:bg-neutral-800 p-4 sm:p-5 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                Check any of these situations that sound familiar to your daily operations:
              </p>
            </div>

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                Which of these time-wasting situations do you experience? (Check all that apply)
              </Label>
              <div className="space-y-3">
                {[
                  "Forgetting to follow up with customers or leads on time",
                  "Entering the same information into multiple systems (and sometimes making errors)",
                  "Spending hours manually creating reports, invoices, or summaries",
                  "Missing or double-booking appointments (scheduling headaches)",
                  "Chasing down late payments or billing reminders",
                  "None of the above – we handle these smoothly",
                ].map((situation) => (
                  <div
                    key={situation}
                    className="flex items-start space-x-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                  >
                    <Checkbox
                      id={situation}
                      checked={formData.timeWasterSituations.includes(situation)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleInputChange("timeWasterSituations", [...formData.timeWasterSituations, situation])
                        } else {
                          handleInputChange(
                            "timeWasterSituations",
                            formData.timeWasterSituations.filter((s) => s !== situation),
                          )
                        }
                      }}
                      className="mt-0.5 border-neutral-400 dark:border-neutral-500 data-[state=checked]:bg-neutral-700 dark:data-[state=checked]:bg-neutral-600 data-[state=checked]:border-neutral-700 dark:data-[state=checked]:border-neutral-600"
                    />
                    <Label
                      htmlFor={situation}
                      className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 cursor-pointer"
                    >
                      {situation}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block text-neutral-900 dark:text-white">
                About how many hours per week do you spend on repetitive administrative tasks?
              </Label>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                (emails, data entry, paperwork, etc.)
              </p>
              <RadioGroup value={formData.adminHours} onValueChange={(value) => handleInputChange("adminHours", value)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: "less-than-5", label: "Less than 5 hours" },
                    { value: "5-10", label: "5–10 hours" },
                    { value: "10-20", label: "10–20 hours" },
                    { value: "more-than-20", label: "More than 20 hours" },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="border-neutral-400 dark:border-neutral-500 text-neutral-700 dark:text-neutral-400"
                      />
                      <Label
                        htmlFor={option.value}
                        className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 cursor-pointer flex-1"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        )

      // Cases 4 and 5 would follow the same pattern...
      // For brevity, I'll add a placeholder for the remaining cases
      case 4:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-cambridge-blue-900 dark:bg-rich-black-400 p-3 sm:p-4 rounded-lg border border-cambridge-blue-700 dark:border-rich-black-500">
              <p className="text-xs sm:text-sm text-rich-black-500 dark:text-platinum-600">
                Tell us about the tools you and your team use. Automation works best when it fits with your existing
                systems.
              </p>
            </div>

            <div>
              <Label className="text-sm sm:text-base font-medium mb-2 sm:mb-3 block text-rich-black-400 dark:text-platinum-700">
                Which of these tools do you use regularly? (Check all that apply)
              </Label>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {[
                  "Email/calendar (Gmail, Outlook, etc.)",
                  "Spreadsheets (Excel, Google Sheets)",
                  "Accounting software (QuickBooks, Xero, etc.)",
                  "Customer database or CRM (Salesforce, HubSpot, etc.)",
                  "Project or task app (Trello, Asana, etc.)",
                  "Scheduling/booking app (Calendly, etc.)",
                  "Marketing tools (email marketing, social schedulers)",
                  "None of the above (mostly manual)",
                ].map((tool) => (
                  <div key={tool} className="flex items-start space-x-2 sm:space-x-3">
                    <Checkbox
                      id={tool}
                      checked={formData.currentTools.includes(tool)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleInputChange("currentTools", [...formData.currentTools, tool])
                        } else {
                          handleInputChange(
                            "currentTools",
                            formData.currentTools.filter((t) => t !== tool),
                          )
                        }
                      }}
                      className="mt-0.5 border-cambridge-blue-600 dark:border-rich-black-600 data-[state=checked]:bg-dark-sea-green-500 dark:data-[state=checked]:bg-dark-sea-green-400 data-[state=checked]:border-dark-sea-green-500 dark:data-[state=checked]:border-dark-sea-green-400"
                    />
                    <Label
                      htmlFor={tool}
                      className="text-xs sm:text-sm leading-relaxed text-rich-black-500 dark:text-platinum-700"
                    >
                      {tool}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-sm sm:text-base font-medium mb-2 sm:mb-3 block text-rich-black-400 dark:text-platinum-700">
                Does your business currently use any automation features? (Check all that apply)
              </Label>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Automatic email reminders or autoresponders",
                  "Online booking/scheduling links (clients book their own appointments)",
                  "Email or marketing automation (newsletters, follow-ups)",
                  "Automatic payment or billing reminders",
                  "No, we mostly do things manually",
                  "Not sure / I need to check",
                ].map((automation) => (
                  <div key={automation} className="flex items-start space-x-2 sm:space-x-3">
                    <Checkbox
                      id={automation}
                      checked={formData.currentAutomation.includes(automation)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleInputChange("currentAutomation", [...formData.currentAutomation, automation])
                        } else {
                          handleInputChange(
                            "currentAutomation",
                            formData.currentAutomation.filter((a) => a !== automation),
                          )
                        }
                      }}
                      className="mt-0.5 border-cambridge-blue-600 dark:border-rich-black-600 data-[state=checked]:bg-dark-sea-green-500 dark:data-[state=checked]:bg-dark-sea-green-400 data-[state=checked]:border-dark-sea-green-500 dark:data-[state=checked]:border-dark-sea-green-400"
                    />
                    <Label
                      htmlFor={automation}
                      className="text-xs sm:text-sm leading-relaxed text-rich-black-500 dark:text-platinum-700"
                    >
                      {automation}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-sm sm:text-base font-medium mb-2 sm:mb-3 block text-rich-black-400 dark:text-platinum-700">
                On a scale of 1–5, how comfortable are you and your team with adopting new technology or tools?
              </Label>
              <p className="text-xs sm:text-sm text-rich-black-600 dark:text-platinum-600 mb-2 sm:mb-3">
                (1 = not comfortable, 5 = very comfortable)
              </p>
              <RadioGroup
                value={formData.techComfort}
                onValueChange={(value) => handleInputChange("techComfort", value)}
              >
                <div className="flex flex-wrap gap-3 sm:gap-6">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={num.toString()}
                        id={`tech-${num}`}
                        className="border-cambridge-blue-600 dark:border-rich-black-600 text-dark-sea-green-500 dark:text-dark-sea-green-400"
                      />
                      <Label
                        htmlFor={`tech-${num}`}
                        className="text-sm sm:text-base text-rich-black-500 dark:text-platinum-700"
                      >
                        {num}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-sm sm:text-base font-medium mb-2 sm:mb-3 block text-rich-black-400 dark:text-platinum-700">
                How open are you to letting software take over repetitive tasks?
              </Label>
              <p className="text-xs sm:text-sm text-rich-black-600 dark:text-platinum-600 mb-2 sm:mb-3">
                (1 = very hesitant, 5 = very excited)
              </p>
              <RadioGroup
                value={formData.automationOpenness}
                onValueChange={(value) => handleInputChange("automationOpenness", value)}
              >
                <div className="flex flex-wrap gap-3 sm:gap-6">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={num.toString()}
                        id={`automation-${num}`}
                        className="border-cambridge-blue-600 dark:border-rich-black-600 text-dark-sea-green-500 dark:text-dark-sea-green-400"
                      />
                      <Label
                        htmlFor={`automation-${num}`}
                        className="text-sm sm:text-base text-rich-black-500 dark:text-platinum-700"
                      >
                        {num}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        )

      case 5: // Goals & Growth
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-cambridge-blue-900 dark:bg-rich-black-400 p-3 sm:p-4 rounded-lg border border-cambridge-blue-700 dark:border-rich-black-500">
              <p className="text-xs sm:text-sm text-rich-black-500 dark:text-platinum-600">
                Finally, we want to align automation with your business goals. Even a small efficiency gain can be big –
                for example, improving customer retention by 5% can boost profits by up to 95%. Let us know where saving
                time would help you the most.
              </p>
            </div>

            <div>
              <Label className="text-sm sm:text-base font-medium mb-2 sm:mb-3 block text-rich-black-400 dark:text-platinum-700">
                What are your main goals for the next 1–3 years? (Check all that apply)
              </Label>
              <div className="space-y-2 sm:space-y-3">
                {[
                  "Increase sales or revenue",
                  "Improve customer service",
                  "Grow our team or staff",
                  "Reduce operating costs",
                  "Spend more time on strategy (not busywork)",
                ].map((goal) => (
                  <div key={goal} className="flex items-start space-x-2 sm:space-x-3">
                    <Checkbox
                      id={goal}
                      checked={formData.businessGoals.includes(goal)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          handleInputChange("businessGoals", [...formData.businessGoals, goal])
                        } else {
                          handleInputChange(
                            "businessGoals",
                            formData.businessGoals.filter((g) => g !== goal),
                          )
                        }
                      }}
                      className="mt-0.5 border-cambridge-blue-600 dark:border-rich-black-600 data-[state=checked]:bg-dark-sea-green-500 dark:data-[state=checked]:bg-dark-sea-green-400 data-[state=checked]:border-dark-sea-green-500 dark:data-[state=checked]:border-dark-sea-green-400"
                    />
                    <Label
                      htmlFor={goal}
                      className="text-xs sm:text-sm leading-relaxed text-rich-black-500 dark:text-platinum-700"
                    >
                      {goal}
                    </Label>
                  </div>
                ))}
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Checkbox
                    id="other-goal"
                    checked={formData.otherBusinessGoal !== ""}
                    onCheckedChange={(checked) => {
                      if (!checked) {
                        handleInputChange("otherBusinessGoal", "")
                      }
                    }}
                    className="mt-0.5 border-cambridge-blue-600 dark:border-rich-black-600 data-[state=checked]:bg-dark-sea-green-500 dark:data-[state=checked]:bg-dark-sea-green-400 data-[state=checked]:border-dark-sea-green-500 dark:data-[state=checked]:border-dark-sea-green-400"
                  />
                  <div className="flex-1 space-y-2">
                    <Label
                      htmlFor="other-goal"
                      className="text-xs sm:text-sm text-rich-black-500 dark:text-platinum-700"
                    >
                      Other:
                    </Label>
                    <Input
                      placeholder="Specify other goal..."
                      value={formData.otherBusinessGoal}
                      onChange={(e) => handleInputChange("otherBusinessGoal", e.target.value)}
                      className="text-sm bg-white dark:bg-rich-black-400 border-cambridge-blue-600 dark:border-rich-black-600 text-rich-black-300 dark:text-platinum-800 focus:border-dark-sea-green-500 dark:focus:border-dark-sea-green-400 focus:ring-dark-sea-green-500/20 dark:focus:ring-dark-sea-green-400/20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-sm sm:text-base font-medium mb-2 sm:mb-3 block text-rich-black-400 dark:text-platinum-700">
                If automation could save you an extra 10 hours per week, what would you do with that time?
              </Label>
              <Textarea
                placeholder="Describe how you would use the extra time..."
                value={formData.extraTimeUse}
                onChange={(e) => handleInputChange("extraTimeUse", e.target.value)}
                className="min-h-[80px] sm:min-h-[100px] text-sm sm:text-base bg-white dark:bg-rich-black-400 border-cambridge-blue-600 dark:border-rich-black-600 text-rich-black-300 dark:text-platinum-800 focus:border-dark-sea-green-500 dark:focus:border-dark-sea-green-400 focus:ring-dark-sea-green-500/20 dark:focus:ring-dark-sea-green-400/20"
              />
            </div>

            <div>
              <Label className="text-sm sm:text-base font-medium mb-2 sm:mb-3 block text-rich-black-400 dark:text-platinum-700">
                How important is it for you to free up time to focus on these goals instead of daily busywork?
              </Label>
              <p className="text-xs sm:text-sm text-rich-black-600 dark:text-platinum-600 mb-2 sm:mb-3">
                (1 = not a priority, 5 = top priority)
              </p>
              <RadioGroup
                value={formData.timeImportance}
                onValueChange={(value) => handleInputChange("timeImportance", value)}
              >
                <div className="flex flex-wrap gap-3 sm:gap-6">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={num.toString()}
                        id={`importance-${num}`}
                        className="border-cambridge-blue-600 dark:border-rich-black-600 text-dark-sea-green-500 dark:text-dark-sea-green-400"
                      />
                      <Label
                        htmlFor={`importance-${num}`}
                        className="text-sm sm:text-base text-rich-black-500 dark:text-platinum-700"
                      >
                        {num}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onContactClick={onContactClick} />
        <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center py-8 sm:py-12 bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
              <CardContent className="px-4 sm:px-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-neutral-700 dark:bg-neutral-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
                  Thanks {heroData?.name}! Your Assessment is Complete
                </h2>
                <p className="text-sm sm:text-lg text-neutral-700 dark:text-neutral-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
                  Thank you for completing the assessment! Your answers highlight where simple automations could have
                  the biggest impact for {heroData?.company}.
                </p>
                <p className="text-xs sm:text-base text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8">
                  {"We'll"} send you a personalized summary to <strong>{heroData?.email}</strong>. {"If you'd"} like to
                  explore the details or see a customized plan, we invite you to schedule a free follow-up consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    className="bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white text-sm sm:text-base"
                    size="lg"
                    onClick={onContactClick}
                  >
                    Schedule Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleBackToHome}
                    className="text-sm sm:text-base border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 bg-transparent"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  const currentSectionData = sections[hasHeroData ? currentSection : currentSection]
  const maxSection = hasHeroData ? sections.length - 1 : sections.length - 1
  const minSection = hasHeroData ? 1 : 0

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} onContactClick={onContactClick} />
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
                Automation Readiness Assessment
              </h1>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
                This quick questionnaire will pinpoint where your business spends the most time and identify tasks that
                could be automated for efficiency and cost savings.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8 sm:mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm sm:text-base font-medium text-neutral-700 dark:text-neutral-300">
                  Step {hasHeroData ? currentSection : currentSection + 1} of {totalSections}
                </span>
                <span className="text-sm sm:text-base font-medium text-neutral-700 dark:text-neutral-300">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <Progress value={progress} className="h-3 bg-neutral-200 dark:bg-neutral-700" />
            </div>

            {/* Main Content */}
            <Card className="mb-8 sm:mb-10 bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 shadow-lg">
              <CardHeader className="pb-6 sm:pb-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className=" text-white w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-russian-green-500 to-dark-sea-green-500 dark:from-russian-green-400 dark:to-dark-sea-green-400 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-11">
                    {currentSectionData.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl sm:text-2xl text-neutral-900 dark:text-white">
                      {currentSectionData.title}
                    </CardTitle>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1">
                      {currentSectionData.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-8">{renderSection()}</CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center gap-4 mb-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentSection === minSection}
                className="flex items-center gap-2 text-base px-6 py-3 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-50 bg-transparent"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                {hasHeroData ? currentSection : currentSection + 1} / {totalSections}
              </div>

              {currentSection === maxSection ? (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white flex items-center gap-2 text-base px-6 py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Assessment
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white flex items-center gap-2 text-base px-6 py-3"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Estimated Time */}
            <div className="text-center text-sm text-neutral-600 dark:text-neutral-400">
              <Clock className="h-4 w-4 inline mr-2" />
              Estimated time remaining:{" "}
              {Math.max(1, totalSections - (hasHeroData ? currentSection : currentSection + 1))} minutes
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
