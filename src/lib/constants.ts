export const SITE_NAME = "Kurtis Dunn"
export const SITE_URL = "https://kurtisdunn.com.au"
export const SITE_DESCRIPTION = "Business automation consulting for Australian SMBs"

export const CONTACT = {
  email: "kurtis@kurtisdunn.com.au",
  phone: "", // TODO: Add phone number
  abn: "69 866 882 083",
  city: "NSW",
  state: "NSW",
  hours: "Monday to Friday, 9am – 5pm AEST",
} as const

export const SOCIAL = {
  linkedin: "", // TODO: Add LinkedIn URL
} as const

export const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
{ label: "Contact", href: "/contact" },
] as const

export const BOOKING_URL = "/book-audit"
export const ASSESSMENT_URL = "/assessment"
export const BOOKING_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0LyPPamgp7NeHBoKivFgjnf8YlQMZws52cvHDc-r55CzxHguJtGwBjFbQsKDKQ-WVq-jRbfayZ?gv=true"
