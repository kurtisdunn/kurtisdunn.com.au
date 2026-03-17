type DataLayerEvent = {
  event: string
  [key: string]: string | number | boolean | undefined
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[]
  }
}

export function pushEvent(event: DataLayerEvent) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(event)
  }
}

export function trackCtaClick(ctaText: string, ctaLocation: string) {
  pushEvent({
    event: "cta_click",
    cta_text: ctaText,
    cta_location: ctaLocation,
  })
}

export function trackFormSubmit(formName: string) {
  pushEvent({
    event: "form_submit",
    form_name: formName,
  })
}

export function trackScrollDepth(depth: number, pagePath: string) {
  pushEvent({
    event: "scroll_depth",
    scroll_percentage: depth,
    page_path: pagePath,
  })
}

export function trackAssessmentStep(step: number, selection: string) {
  pushEvent({
    event: "assessment_step",
    step,
    selection,
  })
}

export function trackAssessmentComplete(
  industry: string,
  teamSize: string,
  painPoint: string,
) {
  pushEvent({
    event: "assessment_complete",
    industry,
    team_size: teamSize,
    pain_point: painPoint,
  })
}
