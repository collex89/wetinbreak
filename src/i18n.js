import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Every JSON file in ./locales becomes a language automatically.
// Drop in yo.json, ig.json, ha.json, pcm.json later and they just work.
const files = import.meta.glob('./locales/*.json', { eager: true })
const resources = {}
for (const path in files) {
  const code = path.split('/').pop().replace('.json', '')
  resources[code] = { translation: files[path].default }
}

// Pick the language from ?lang=yo in the URL, then saved choice, then English.
const params = new URLSearchParams(window.location.search)
const lang = params.get('lang') || localStorage.getItem('lang') || 'en'
localStorage.setItem('lang', lang)

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
