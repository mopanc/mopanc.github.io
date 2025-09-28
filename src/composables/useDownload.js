export function useDownload() {
  const downloadFile = (url, filename = '') => {
    const link = document.createElement('a')
    link.href = url
    link.download = filename || url.split('/').pop() || 'download'

    // Append to body to ensure it works in Firefox
    document.body.appendChild(link)
    link.click()

    // Clean up
    document.body.removeChild(link)
  }

  const downloadCV = (language = 'en') => {
    // For now, we'll create a placeholder
    // In production, you'd have actual PDF files
    const cvUrls = {
      en: '/cv/Jorge_Mopanc_CV_EN.pdf',
      pt: '/cv/Jorge_Mopanc_CV_PT.pdf'
    }

    const filename = `Jorge_Mopanc_CV_${language.toUpperCase()}.pdf`

    try {
      // Check if file exists first (in production)
      downloadFile(cvUrls[language], filename)

      // Track download for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'download', {
          'event_category': 'CV',
          'event_label': language,
          'value': 1
        })
      }

      return true
    } catch (error) {
      console.error('Error downloading CV:', error)
      return false
    }
  }

  const downloadPortfolio = () => {
    const portfolioUrl = '/portfolio/Jorge_Mopanc_Portfolio.pdf'
    const filename = 'Jorge_Mopanc_Portfolio.pdf'

    try {
      downloadFile(portfolioUrl, filename)

      // Track download for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'download', {
          'event_category': 'Portfolio',
          'event_label': 'PDF',
          'value': 1
        })
      }

      return true
    } catch (error) {
      console.error('Error downloading portfolio:', error)
      return false
    }
  }

  const generateDynamicCV = async (language = 'en', format = 'pdf') => {
    // This would integrate with a service like PDFKit or similar
    // For now, we'll simulate the process

    try {
      const response = await fetch(`/api/generate-cv?lang=${language}&format=${format}`)

      if (!response.ok) {
        throw new Error('Failed to generate CV')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const filename = `Jorge_Mopanc_CV_${language.toUpperCase()}_${new Date().toISOString().split('T')[0]}.${format}`

      downloadFile(url, filename)

      // Clean up object URL
      window.URL.revokeObjectURL(url)

      return true
    } catch (error) {
      console.error('Error generating dynamic CV:', error)
      return false
    }
  }

  return {
    downloadFile,
    downloadCV,
    downloadPortfolio,
    generateDynamicCV
  }
}