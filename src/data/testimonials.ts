export type Testimonial = {
  quote: string
  name: string
  title: string
  company: string
  city: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Kurtis saved our team about 12 hours a week just by automating our quoting process. We were copying the same information into three different systems. Now it happens once and flows everywhere.",
    name: "Client Name",
    title: "Director",
    company: "Trades Company",
    city: "Brisbane",
  },
  {
    quote:
      "I was sceptical about automation — I thought it was for big companies. Kurtis showed me we could automate our client onboarding in a week. It's been running perfectly for six months.",
    name: "Client Name",
    title: "Practice Manager",
    company: "Accounting Firm",
    city: "Sydney",
  },
  {
    quote:
      "What I appreciated most was that everything was documented. When Kurtis finished, my team could actually maintain it. That's rare.",
    name: "Client Name",
    title: "Ops Manager",
    company: "Professional Services Firm",
    city: "Melbourne",
  },
]
