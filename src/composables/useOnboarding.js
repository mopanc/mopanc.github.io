import { ref, computed } from 'vue'
import { getProfile, saveProfile } from './useIndexedDB'

const profile = ref(null)
const isLoading = ref(true)

export function useOnboarding() {
  const hasProfile = computed(() => {
    if (!profile.value) return false
    return !!(profile.value.name && profile.value.objectives?.length > 0)
  })

  async function loadProfile() {
    isLoading.value = true
    try {
      const p = await getProfile()
      profile.value = p || null
    } catch (err) {
      console.error('Failed to load profile:', err)
    } finally {
      isLoading.value = false
    }
  }

  async function saveOnboarding(data) {
    const profileData = {
      name: data.name,
      startDate: data.startDate || new Date().toISOString().split('T')[0],
      objectives: data.objectives || [],
      euSou: data.euSou || [],
    }
    await saveProfile(profileData)
    profile.value = { ...profileData, id: 'default' }
  }

  async function updateObjectives(objectives) {
    if (!profile.value) return
    profile.value.objectives = objectives
    await saveProfile(profile.value)
  }

  async function updateEuSou(euSou) {
    if (!profile.value) return
    profile.value.euSou = euSou
    await saveProfile(profile.value)
  }

  async function updateProfile(updates) {
    if (!profile.value) return
    Object.assign(profile.value, updates)
    await saveProfile(profile.value)
  }

  return {
    profile,
    isLoading,
    hasProfile,
    loadProfile,
    saveOnboarding,
    updateObjectives,
    updateEuSou,
    updateProfile,
  }
}
