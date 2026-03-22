import { getProfile, getDayRange } from './useIndexedDB'

const colors = {
  primary: [74, 134, 232],
  text: [30, 42, 56],
  muted: [138, 148, 166],
  line: [200, 210, 220],
  bg: [248, 250, 252],
  gold: [201, 168, 76],
}

export async function exportMonthlyPdf(year, month) {
  const { default: jsPDF } = await import('jspdf')

  const profile = await getProfile()
  const name = profile?.name || 'Utilizador'

  // Get month range
  const startDate = `${year}-${String(month).padStart(2, '0')}-01`
  const endDay = new Date(year, month, 0).getDate()
  const endDate = `${year}-${String(month).padStart(2, '0')}-${String(endDay).padStart(2, '0')}`
  const days = await getDayRange(startDate, endDate)

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const W = 210
  const H = 297
  const M = 20
  const CW = W - M * 2

  const monthName = new Date(year, month - 1).toLocaleDateString('pt-PT', { month: 'long', year: 'numeric' })

  // ── Cover ──
  doc.setFillColor(...colors.bg)
  doc.rect(0, 0, W, H, 'F')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(32)
  doc.setTextColor(...colors.text)
  doc.text('Diário Mensal', W / 2, 90, { align: 'center' })

  doc.setFontSize(18)
  doc.setTextColor(...colors.gold)
  doc.text(monthName.charAt(0).toUpperCase() + monthName.slice(1), W / 2, 108, { align: 'center' })

  doc.setFontSize(14)
  doc.setTextColor(...colors.muted)
  doc.text(name, W / 2, 124, { align: 'center' })

  // Stats summary
  const completed = days.filter(d => d.dayCompleted)
  const avgRating = completed.length
    ? (completed.reduce((sum, d) => sum + (d.dayRating || 0), 0) / completed.length).toFixed(1)
    : '—'

  doc.setFontSize(11)
  doc.text(`${completed.length}/${endDay} dias completos · Rating médio: ${avgRating}/5`, W / 2, 145, { align: 'center' })

  doc.setFontSize(9)
  doc.setTextColor(...colors.muted)
  doc.text('Código Mental — jorgemopanc.com/codigo-mental', W / 2, 260, { align: 'center' })

  // ── Day entries ──
  const sortedDays = days.sort((a, b) => a.date.localeCompare(b.date))

  for (const day of sortedDays) {
    if (!day.dayCompleted && !day.stepsCompleted?.length) continue

    doc.addPage()
    let y = M

    // Date header
    const d = new Date(day.date)
    const dateFormatted = d.toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' })
    y = drawModuleTitle(doc, dateFormatted.charAt(0).toUpperCase() + dateFormatted.slice(1), '', y, M, CW)

    // Rating stars
    if (day.dayRating) {
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(11)
      doc.setTextColor(...colors.gold)
      doc.text('★'.repeat(day.dayRating) + '☆'.repeat(5 - day.dayRating), M, y)
      y += 8
    }

    // Actions
    if (day.actions?.some(a => a)) {
      y += 2
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(10)
      doc.setTextColor(...colors.text)
      doc.text('Acções do dia:', M, y)
      y += 6

      day.actions.forEach((a, i) => {
        if (!a) return
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(10)
        doc.setTextColor(...colors.text)
        doc.text(`${i + 1}. ${a}`, M + 4, y)
        y += 6
      })
      y += 4
    }

    // Gratitude
    if (day.gratitude) {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(10)
      doc.setTextColor(...colors.text)
      doc.text('Gratidão:', M, y)
      y += 6
      doc.setFont('helvetica', 'normal')
      const lines = doc.splitTextToSize(day.gratitude, CW - 4)
      doc.text(lines, M + 4, y)
      y += lines.length * 5 + 4
    }

    // Went well
    if (day.wentWell?.some(w => w)) {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(10)
      doc.setTextColor(...colors.text)
      doc.text('O que correu bem:', M, y)
      y += 6
      day.wentWell.forEach((w, i) => {
        if (!w) return
        doc.setFont('helvetica', 'normal')
        doc.text(`${i + 1}. ${w}`, M + 4, y)
        y += 6
      })
      y += 4
    }

    // Went wrong
    if (day.wentWrong) {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(10)
      doc.setTextColor(...colors.text)
      doc.text('A melhorar:', M, y)
      y += 6
      doc.setFont('helvetica', 'normal')
      const lines = doc.splitTextToSize(day.wentWrong, CW - 4)
      doc.text(lines, M + 4, y)
      y += lines.length * 5 + 4
    }

    // Protocol
    if (day.protocol) {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(10)
      doc.setTextColor(...colors.text)
      doc.text('Protocolo:', M, y)
      doc.setFont('helvetica', 'normal')
      doc.text(day.protocol, M + 24, y)
      y += 8
    }

    // Journal
    if (day.journal) {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(10)
      doc.setTextColor(...colors.text)
      doc.text('Diário:', M, y)
      y += 6

      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      doc.setTextColor(...colors.muted)
      const lines = doc.splitTextToSize(day.journal, CW - 4)
      // Handle page break if needed
      if (y + lines.length * 4 > H - M) {
        doc.addPage()
        y = M
      }
      doc.text(lines, M + 4, y)
      y += lines.length * 4 + 4
    }

    // Breathing info
    if (day.breathingCompleted) {
      doc.setDrawColor(...colors.line)
      doc.line(M, y, M + CW, y)
      y += 6
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      doc.setTextColor(...colors.muted)
      doc.text('✓ Respiração 5-5-5 concluída', M, y)
    }
  }

  // Save
  const filename = `diario-${monthName.replace(/\s+/g, '-').toLowerCase()}-${name.toLowerCase().replace(/\s+/g, '-')}.pdf`
  doc.save(filename)
}

function drawModuleTitle(doc, title, ref, y, M, CW) {
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(16)
  doc.setTextColor(...colors.text)
  doc.text(title, M, y + 6)
  y += 8

  if (ref) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...colors.muted)
    doc.text(ref, M, y + 4)
    y += 6
  }

  y += 4
  doc.setDrawColor(...colors.primary)
  doc.setLineWidth(0.8)
  doc.line(M, y, M + 40, y)
  doc.setLineWidth(0.2)
  y += 6

  return y
}
