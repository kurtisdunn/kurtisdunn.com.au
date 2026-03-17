import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"
import { PSEO_INDUSTRIES } from "@/data/pseo/industries"
import { PSEO_LOCATIONS } from "@/data/pseo/locations"
import { PSEO_USE_CASES } from "@/data/pseo/use-cases"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/book-audit`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/assessment`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/industries`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/industries/trades`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/industries/professional-services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/industries/accounting`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/industries/healthcare`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/industries/property`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/industries/legal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Service detail pages
    {
      url: `${SITE_URL}/services/automation-audit`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/workflow-automation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/ai-automations`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/reporting-dashboards`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/ongoing-support`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Resource pages
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/roi-calculator`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  // Industry × Location pSEO pages (48 pages)
  const industryLocationRoutes: MetadataRoute.Sitemap =
    PSEO_INDUSTRIES.flatMap((industry) =>
      PSEO_LOCATIONS.map((location) => ({
        url: `${SITE_URL}/automation/${industry.slug}-${location.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    )

  // Use-case pSEO pages (15 pages)
  const useCaseRoutes: MetadataRoute.Sitemap = PSEO_USE_CASES.map(
    (useCase) => ({
      url: `${SITE_URL}/automation/${useCase.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  )

  return [...staticRoutes, ...industryLocationRoutes, ...useCaseRoutes]
}
