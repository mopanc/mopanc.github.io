/**
 * Analytics and SEO Utilities
 * Jorge Mopanc Portfolio - Advanced Analytics Setup
 */

// Google Analytics Enhanced Events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      ...parameters,
      event_category: 'portfolio_interaction',
      event_label: 'jorge_mopanc_portfolio'
    })
  }
}

// Track specific portfolio events
export const trackPortfolioEvents = {
  // Contact form interactions
  contactFormSubmit: (method = 'email') => {
    trackEvent('contact_form_submit', {
      contact_method: method,
      value: 1
    })
  },

  // Project views
  projectView: (projectName, projectType = 'web') => {
    trackEvent('project_view', {
      project_name: projectName,
      project_type: projectType,
      value: 1
    })
  },

  // Download CV
  downloadCV: (format = 'pdf') => {
    trackEvent('cv_download', {
      file_format: format,
      value: 5
    })
  },

  // Social media clicks
  socialClick: (platform) => {
    trackEvent('social_media_click', {
      social_platform: platform,
      value: 1
    })
  },

  // Service interest
  serviceInterest: (service) => {
    trackEvent('service_interest', {
      service_type: service,
      value: 3
    })
  },

  // Certificate view
  certificateView: (certificateName) => {
    trackEvent('certificate_view', {
      certificate_name: certificateName,
      value: 1
    })
  },

  // Technology interest
  technologyInterest: (technology) => {
    trackEvent('technology_interest', {
      technology: technology,
      value: 2
    })
  },

  // Accessibility unlock (for protected content)
  accessUnlock: (contentType) => {
    trackEvent('content_unlock', {
      content_type: contentType,
      value: 10
    })
  }
}

// Page view tracking with custom parameters
export const trackPageView = (pageName, additionalParams = {}) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-E08VX9Z7F0', {
      page_title: pageName,
      page_location: window.location.href,
      ...additionalParams
    })
  }
}

// Enhanced user engagement tracking
export const trackUserEngagement = {
  // Time spent on page
  timeOnPage: (pageName, timeInSeconds) => {
    trackEvent('engagement_time', {
      page_name: pageName,
      engagement_time_msec: timeInSeconds * 1000,
      value: Math.floor(timeInSeconds / 30) // Value based on 30-second intervals
    })
  },

  // Scroll depth
  scrollDepth: (percentage) => {
    trackEvent('scroll_depth', {
      scroll_percentage: percentage,
      value: Math.floor(percentage / 25) // Value based on quartiles
    })
  },

  // Click tracking for important elements
  importantClick: (elementType, elementName) => {
    trackEvent('important_click', {
      element_type: elementType,
      element_name: elementName,
      value: 1
    })
  }
}

// SEO and Search Console utilities
export const seoUtils = {
  // Track internal searches (if implemented)
  trackInternalSearch: (searchTerm, resultsCount = 0) => {
    trackEvent('search', {
      search_term: searchTerm,
      results_count: resultsCount
    })
  },

  // Track form completions
  trackFormCompletion: (formName, completionRate = 100) => {
    trackEvent('form_completion', {
      form_name: formName,
      completion_rate: completionRate,
      value: completionRate / 20 // Convert percentage to 0-5 scale
    })
  },

  // Track lead generation
  trackLead: (leadType, leadValue = 'contact_form') => {
    trackEvent('generate_lead', {
      lead_type: leadType,
      lead_value: leadValue,
      value: 20 // High value for leads
    })
  }
}

// Conversion tracking for business goals
export const conversionTracking = {
  // Track when someone shows interest in hiring
  hiringInterest: (source = 'portfolio') => {
    trackEvent('hiring_interest', {
      source: source,
      value: 50 // High value for potential business
    })

    // Also track as conversion
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        send_to: 'G-E08VX9Z7F0/portfolio_lead',
        value: 50,
        currency: 'EUR'
      })
    }
  },

  // Track project inquiries
  projectInquiry: (projectType, budget = 'not_specified') => {
    trackEvent('project_inquiry', {
      project_type: projectType,
      budget_range: budget,
      value: 30
    })
  },

  // Track consultation requests
  consultationRequest: (topic = 'general') => {
    trackEvent('consultation_request', {
      consultation_topic: topic,
      value: 25
    })
  }
}

// Initialize analytics when page loads
export const initializeAnalytics = () => {
  // Track page load
  trackPageView(document.title)

  // Track scroll depth
  let maxScroll = 0
  let scrollTimer = null

  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    )

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent

      // Debounce scroll tracking
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        if (maxScroll >= 25 && maxScroll < 50) {
          trackUserEngagement.scrollDepth(25)
        } else if (maxScroll >= 50 && maxScroll < 75) {
          trackUserEngagement.scrollDepth(50)
        } else if (maxScroll >= 75 && maxScroll < 90) {
          trackUserEngagement.scrollDepth(75)
        } else if (maxScroll >= 90) {
          trackUserEngagement.scrollDepth(100)
        }
      }, 1000)
    }
  })

  // Track time on page
  const startTime = Date.now()

  // Track when user leaves page
  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000)
    if (timeSpent > 10) { // Only track if spent more than 10 seconds
      trackUserEngagement.timeOnPage(document.title, timeSpent)
    }
  })

  // Track visibility changes (tab switching)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      if (timeSpent > 10) {
        trackUserEngagement.timeOnPage(document.title, timeSpent)
      }
    }
  })
}

// Structured data utilities for better SEO
export const structuredDataTemplates = {
  // Person/Professional schema
  person: (data = {}) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": data.name || "Jorge Mopanc",
    "jobTitle": data.jobTitle || "Programador Full Stack",
    "description": data.description || "Programador Full Stack especializado em desenvolvimento web",
    "url": data.url || "https://mopanc.github.io",
    "image": data.image || "https://avatars.githubusercontent.com/u/45471030?v=4",
    "email": data.email || "jorgemopanc@icloud.com",
    "telephone": data.telephone || "+351910559307",
    "knowsAbout": data.skills || ["Vue.js", "React.js", "Node.js", "TypeScript"],
    "areaServed": "Portugal"
  }),

  // Service schema
  service: (serviceName, description) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Person",
      "name": "Jorge Mopanc"
    },
    "areaServed": "Portugal",
    "serviceType": "Desenvolvimento Web"
  }),

  // Project/Work schema
  creativeWork: (projectName, description, technologies = []) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": projectName,
    "description": description,
    "author": {
      "@type": "Person",
      "name": "Jorge Mopanc"
    },
    "programmingLanguage": technologies
  })
}

// Export all utilities
export default {
  trackEvent,
  trackPortfolioEvents,
  trackPageView,
  trackUserEngagement,
  seoUtils,
  conversionTracking,
  initializeAnalytics,
  structuredDataTemplates
}