import { ref, computed } from 'vue'
import { useCookieConsent } from './useCookieConsent'
import db from '../../firebase.js'
import { ref as dbRef, set, get, remove } from 'firebase/database'

// Estado global simples
const { safeLocalStorage, COOKIE_CATEGORIES } = useCookieConsent()
let globalIsAuthenticated = ref(false)
let globalAccessExpiry = ref(null)
let globalIsAdmin = ref(false)

export function useAccessControlSimple() {
  const isAuthenticated = globalIsAuthenticated
  const accessExpiry = globalAccessExpiry
  const isAdmin = globalIsAdmin

  // Código MASTER para admin (só tu sabes este)
  const MASTER_CODE = 'JM.gjpm!23A83g4x31'


  const isAccessValid = computed(() => {
    if (!isAuthenticated.value || !accessExpiry.value) return false

    const now = new Date().getTime()
    if (now >= accessExpiry.value) {
      isAuthenticated.value = false
      accessExpiry.value = null
      return false
    }
    return true
  })

  const timeRemaining = computed(() => {
    if (!accessExpiry.value) return 0

    const now = new Date().getTime()
    const remaining = Math.max(0, accessExpiry.value - now)
    return Math.floor(remaining / (1000 * 60)) // em minutos
  })

  // Função para gerar código único
  const generateUniqueCode = (length = 8) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  // Função para converter código em chave válida do Firebase
  const sanitizeCodeForFirebase = (code) => {
    return code.replace(/[.#$[\]!]/g, '_')
  }

  // Função para gerar código temporário para um usuário (Firebase)
  const generateTempCode = async (email, duration = '1h') => {
    if (!isAdmin.value) {
      throw new Error('Apenas admin pode gerar códigos')
    }

    try {
      const code = generateUniqueCode()
      const now = new Date().getTime()

      // Calcular tempo de expiração
      let expiryTime
      switch (duration) {
        case '1h':
          expiryTime = now + (1 * 60 * 60 * 1000)
          break
        case '4h':
          expiryTime = now + (4 * 60 * 60 * 1000)
          break
        case '1d':
          expiryTime = now + (24 * 60 * 60 * 1000)
          break
        default:
          expiryTime = now + (1 * 60 * 60 * 1000)
      }

      // Armazenar código no Firebase
      const sanitizedCode = sanitizeCodeForFirebase(code)
      const codesRef = dbRef(db, `portfolioCodes/${sanitizedCode}`)
      await set(codesRef, {
        originalCode: code, // manter o código original
        email,
        expiryTime,
        duration,
        createdAt: now,
        used: false,
        createdBy: 'admin'
      })

      return {
        success: true,
        code,
        email,
        duration,
        expiryTime: new Date(expiryTime).toLocaleString(),
        message: `Código ${code} gerado para ${email}`
      }
    } catch (error) {
      console.error('Erro ao gerar código:', error)
      return {
        success: false,
        message: 'Erro ao gerar código: ' + error.message
      }
    }
  }

  // Função para listar códigos com histórico (Firebase)
  const getAllCodes = async () => {
    if (!isAdmin.value) return []

    try {
      const codesRef = dbRef(db, 'portfolioCodes')
      const snapshot = await get(codesRef)

      if (!snapshot.exists()) {
        return []
      }

      const codes = snapshot.val()
      const now = new Date().getTime()

      // Mapear todos os códigos com status
      const allCodes = Object.entries(codes)
        .map(([codeKey, data]) => {
          let status = 'active'
          if (data.used) {
            status = 'used'
          } else if (data.expiryTime <= now) {
            status = 'expired'
          }

          return {
            code: data.originalCode || codeKey,
            sanitizedKey: codeKey,
            ...data,
            status,
            timeRemaining: status === 'active' ? Math.floor((data.expiryTime - now) / (1000 * 60)) : 0,
            expiryTimeFormatted: new Date(data.expiryTime).toLocaleString(),
            createdAtFormatted: new Date(data.createdAt).toLocaleString(),
            usedAtFormatted: data.usedAt ? new Date(data.usedAt).toLocaleString() : null
          }
        })
        .sort((a, b) => b.createdAt - a.createdAt) // Mais recentes primeiro
        .slice(0, 10) // Últimos 10

      return allCodes
    } catch (error) {
      console.error('Erro ao buscar códigos:', error)
      return []
    }
  }

  // Função para listar apenas códigos ativos (manter compatibilidade)
  const getActiveCodes = async () => {
    const allCodes = await getAllCodes()
    return allCodes.filter(code => code.status === 'active')
  }

  // Função para limpar códigos expirados (Firebase)
  const cleanExpiredCodes = async () => {
    if (!isAdmin.value) return

    try {
      const codesRef = dbRef(db, 'portfolioCodes')
      const snapshot = await get(codesRef)

      if (!snapshot.exists()) return

      const codes = snapshot.val()
      const now = new Date().getTime()

      // Remover códigos expirados ou usados
      for (const [codeKey, data] of Object.entries(codes)) {
        if (data.expiryTime <= now || data.used) {
          await remove(dbRef(db, `portfolioCodes/${codeKey}`))
        }
      }

      console.log('Códigos expirados removidos')
    } catch (error) {
      console.error('Erro ao limpar códigos:', error)
    }
  }

  // Função para extender tempo de um código
  const extendCodeTime = async (email, newDuration = '1h') => {
    if (!isAdmin.value) {
      throw new Error('Apenas admin pode extender códigos')
    }

    // Verificação adicional de segurança
    const storedCode = safeLocalStorage.getItem('portfolioAccessCode', COOKIE_CATEGORIES.FUNCTIONAL)
    const storedAdmin = safeLocalStorage.getItem('portfolioAdminAccess', COOKIE_CATEGORIES.FUNCTIONAL)
    const masterCode = 'JM.gjpm!23A83g4x31'

    if (storedCode !== masterCode || storedAdmin !== 'true') {
      throw new Error('Acesso não autorizado - apenas admin MASTER')
    }

    try {
      const allCodes = await getAllCodes()

      // Encontrar código ativo para o email
      const codeToExtend = allCodes.find(code =>
        code.email.toLowerCase() === email.toLowerCase() &&
        code.status === 'active'
      )

      if (!codeToExtend) {
        return {
          success: false,
          message: `Nenhum código ativo encontrado para ${email}`
        }
      }

      // Calcular novo tempo de expiração
      const now = new Date().getTime()
      let additionalTime
      switch (newDuration) {
        case '1h':
          additionalTime = 1 * 60 * 60 * 1000
          break
        case '4h':
          additionalTime = 4 * 60 * 60 * 1000
          break
        case '1d':
          additionalTime = 24 * 60 * 60 * 1000
          break
        default:
          additionalTime = 1 * 60 * 60 * 1000
      }

      const newExpiryTime = now + additionalTime

      // Atualizar no Firebase
      const codeRef = dbRef(db, `portfolioCodes/${codeToExtend.sanitizedKey}`)
      await set(codeRef, {
        ...codeToExtend,
        expiryTime: newExpiryTime,
        extendedAt: now,
        extendedBy: 'admin'
      })

      return {
        success: true,
        code: codeToExtend.code,
        email: codeToExtend.email,
        newExpiryTime: new Date(newExpiryTime).toLocaleString(),
        message: `Código para ${email} extendido por ${newDuration}`
      }

    } catch (error) {
      console.error('Erro ao extender código:', error)
      return {
        success: false,
        message: 'Erro ao extender código: ' + error.message
      }
    }
  }

  const validateAccessCode = async (code) => {
    const codeToCheck = code.trim()

    // Verificar se é o código MASTER (sem converter para uppercase)
    if (codeToCheck === MASTER_CODE) {
      console.log('🔥 CÓDIGO MASTER RECONHECIDO!')

      isAdmin.value = true
      isAuthenticated.value = true
      const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000) // 24h para admin
      accessExpiry.value = expiryTime

      safeLocalStorage.setItem('portfolioAdminAccess', 'true', COOKIE_CATEGORIES.FUNCTIONAL)
      safeLocalStorage.setItem('portfolioAccessCode', codeToCheck, COOKIE_CATEGORIES.FUNCTIONAL)
      safeLocalStorage.setItem('portfolioAccessExpiry', expiryTime.toString(), COOKIE_CATEGORIES.FUNCTIONAL)

      console.log('🔧 Admin state:', {
        isAdmin: isAdmin.value,
        isAuthenticated: isAuthenticated.value,
        isAccessValid: isAccessValid.value
      })

      // Disparar eventos
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('portfolio-admin-access'))
        window.dispatchEvent(new CustomEvent('portfolio-access-granted'))
        window.dispatchEvent(new CustomEvent('portfolio-access-state-changed'))
        window.dispatchEvent(new CustomEvent('vue-force-update'))
      }, 100)

      return { success: true, type: 'admin', message: 'Acesso de admin ativado!' }
    }

    // Verificar códigos no Firebase
    try {
      const sanitizedCode = sanitizeCodeForFirebase(codeToCheck)
      const codeRef = dbRef(db, `portfolioCodes/${sanitizedCode}`)
      const snapshot = await get(codeRef)

      if (snapshot.exists()) {
        const codeData = snapshot.val()
        const now = new Date().getTime()

        // Verificar se o código original coincide (segurança extra)
        if (codeData.originalCode && codeData.originalCode !== codeToCheck) {
          return { success: false, message: 'Código inválido.' }
        }

        // Verificar se código não expirou e não foi usado
        if (codeData.expiryTime > now && !codeData.used) {
          // Marcar código como usado no Firebase
          await set(dbRef(db, `portfolioCodes/${sanitizedCode}/used`), true)
          await set(dbRef(db, `portfolioCodes/${sanitizedCode}/usedAt`), now)

          // Dar acesso
          isAuthenticated.value = true
          accessExpiry.value = codeData.expiryTime

          safeLocalStorage.setItem('portfolioAccessCode', codeToCheck, COOKIE_CATEGORIES.FUNCTIONAL)
          safeLocalStorage.setItem('portfolioAccessExpiry', codeData.expiryTime.toString(), COOKIE_CATEGORIES.FUNCTIONAL)

          // Disparar eventos
          setTimeout(() => {
            window.dispatchEvent(new CustomEvent('portfolio-access-granted'))
            window.dispatchEvent(new CustomEvent('portfolio-access-state-changed'))
            window.dispatchEvent(new CustomEvent('vue-force-update'))
          }, 100)

          return {
            success: true,
            type: 'user',
            message: `Acesso concedido! Válido até ${new Date(codeData.expiryTime).toLocaleString()}`,
            duration: codeData.duration,
            email: codeData.email
          }
        } else if (codeData.used) {
          return { success: false, message: 'Este código já foi utilizado.' }
        } else {
          return { success: false, message: 'Este código expirou.' }
        }
      }
    } catch (error) {
      console.error('Erro ao verificar código no Firebase:', error)
    }

    // Códigos antigos (manter compatibilidade) - verificar em uppercase
    const codeToCheckUpper = codeToCheck.toUpperCase()
    const now2 = new Date()
    const currentMonth = String(now2.getMonth() + 1).padStart(2, '0')
    const currentDay = String(now2.getDate()).padStart(2, '0')

    const oldValidCodes = [
      `272${currentMonth}${currentDay}`,
      `272${currentDay}${currentMonth}`,
      `DEMO${currentMonth}${currentDay}`,
      `PORTFOLIO${currentMonth}${currentDay}`,
      'DEMO2024',
      'TEST123'
    ]

    if (oldValidCodes.includes(codeToCheckUpper)) {
      const now = new Date().getTime()
      const expiryTime = now + (24 * 60 * 60 * 1000) // 24 horas
      isAuthenticated.value = true
      accessExpiry.value = expiryTime

      safeLocalStorage.setItem('portfolioAccessCode', codeToCheckUpper, COOKIE_CATEGORIES.FUNCTIONAL)
      safeLocalStorage.setItem('portfolioAccessExpiry', expiryTime.toString(), COOKIE_CATEGORIES.FUNCTIONAL)

      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('portfolio-access-granted'))
        window.dispatchEvent(new CustomEvent('portfolio-access-state-changed'))
        window.dispatchEvent(new CustomEvent('vue-force-update'))
      }, 100)

      return { success: true, type: 'legacy', message: 'Acesso concedido (código legacy)!' }
    }

    return { success: false, message: 'Código inválido.' }
  }

  const revokeAccess = () => {
    isAuthenticated.value = false
    accessExpiry.value = null
    isAdmin.value = false
    safeLocalStorage.removeItem('portfolioAccessCode', COOKIE_CATEGORIES.FUNCTIONAL)
    safeLocalStorage.removeItem('portfolioAccessExpiry', COOKIE_CATEGORIES.FUNCTIONAL)
    safeLocalStorage.removeItem('portfolioAdminAccess', COOKIE_CATEGORIES.FUNCTIONAL)
  }

  // Verificar localStorage na inicialização
  const checkStoredAccess = () => {
    const storedCode = safeLocalStorage.getItem('portfolioAccessCode', COOKIE_CATEGORIES.FUNCTIONAL)
    const storedExpiry = safeLocalStorage.getItem('portfolioAccessExpiry', COOKIE_CATEGORIES.FUNCTIONAL)
    const storedAdmin = safeLocalStorage.getItem('portfolioAdminAccess', COOKIE_CATEGORIES.FUNCTIONAL)

    if (storedCode && storedExpiry) {
      const now = new Date().getTime()
      const expiryTime = parseInt(storedExpiry)

      if (now < expiryTime) {
        isAuthenticated.value = true
        accessExpiry.value = expiryTime

        if (storedAdmin === 'true') {
          isAdmin.value = true
        }

        return true
      } else {
        revokeAccess()
      }
    }

    return false
  }

  // Inicializar
  checkStoredAccess()

  return {
    isAuthenticated,
    isAccessValid,
    timeRemaining,
    validateAccessCode,
    revokeAccess,
    isAdmin,
    generateTempCode,
    getActiveCodes,
    getAllCodes,
    extendCodeTime,
    cleanExpiredCodes
  }
}