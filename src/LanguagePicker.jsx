import { useTranslation } from 'react-i18next'

// Each language is listed in its own name (an endonym), so the same label
// shows whatever language the app is in. That is why these are not in the
// locale files: they never change between languages.
const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'pcm', name: 'Pidgin' },
  { code: 'yo', name: 'Yorùbá' },
  { code: 'ig', name: 'Igbo' },
  { code: 'ha', name: 'Hausa' },
]

export default function LanguagePicker() {
  const { t, i18n } = useTranslation()

  const change = (e) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
    // If the page was opened with ?lang=..., update it so a reload keeps the new choice.
    const url = new URL(window.location.href)
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', lang)
      window.history.replaceState(null, '', url)
    }
  }

  return (
    <div className="lang-picker">
      <select aria-label={t('language')} value={i18n.resolvedLanguage} onChange={change}>
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>{l.name}</option>
        ))}
      </select>
    </div>
  )
}
