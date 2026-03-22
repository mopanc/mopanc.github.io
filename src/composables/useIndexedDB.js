import { openDB } from 'idb'

const DB_NAME = 'codigo-mental-db'
const DB_VERSION = 1

let dbPromise = null

function getDB() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        // Profile store — single record with id 'default'
        if (!db.objectStoreNames.contains('profile')) {
          db.createObjectStore('profile', { keyPath: 'id' })
        }

        // Days store — one record per date (YYYY-MM-DD)
        if (!db.objectStoreNames.contains('days')) {
          const daysStore = db.createObjectStore('days', { keyPath: 'date' })
          daysStore.createIndex('dayCompleted', 'dayCompleted')
        }

        // Breathing sessions store
        if (!db.objectStoreNames.contains('breathingSessions')) {
          const breatheStore = db.createObjectStore('breathingSessions', {
            keyPath: 'id',
            autoIncrement: true,
          })
          breatheStore.createIndex('date', 'date')
        }
      },
    })
  }
  return dbPromise
}

// ── Profile ──
export async function getProfile() {
  const db = await getDB()
  return db.get('profile', 'default')
}

export async function saveProfile(profile) {
  const db = await getDB()
  const now = new Date().toISOString()
  const existing = await db.get('profile', 'default')
  const raw = JSON.parse(JSON.stringify(profile))
  const record = {
    ...raw,
    id: 'default',
    updatedAt: now,
    createdAt: existing?.createdAt || now,
  }
  return db.put('profile', record)
}

// ── Days ──
export async function getDay(date) {
  const db = await getDB()
  return db.get('days', date)
}

export async function saveDay(dayData) {
  const db = await getDB()
  const now = new Date().toISOString()
  const raw = JSON.parse(JSON.stringify(dayData))
  const existing = await db.get('days', raw.date)
  const record = {
    ...raw,
    updatedAt: now,
    createdAt: existing?.createdAt || now,
  }
  return db.put('days', record)
}

export async function getAllDays() {
  const db = await getDB()
  return db.getAll('days')
}

export async function getCompletedDays() {
  const db = await getDB()
  const tx = db.transaction('days', 'readonly')
  const index = tx.store.index('dayCompleted')
  return index.getAll(1) // dayCompleted stored as 1/0 for indexing
}

export async function getDayRange(startDate, endDate) {
  const db = await getDB()
  const tx = db.transaction('days', 'readonly')
  return tx.store.getAll(IDBKeyRange.bound(startDate, endDate))
}

// ── Breathing Sessions ──
export async function addBreathingSession(session) {
  const db = await getDB()
  return db.add('breathingSessions', session)
}

export async function getBreathingSessionsByDate(date) {
  const db = await getDB()
  const tx = db.transaction('breathingSessions', 'readonly')
  const index = tx.store.index('date')
  return index.getAll(date)
}

export async function getAllBreathingSessions() {
  const db = await getDB()
  return db.getAll('breathingSessions')
}
