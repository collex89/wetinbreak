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
      <span className="lang-field">
        <svg className="globe" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
        </svg>
        <select aria-label={t('language')} value={i18n.resolvedLanguage} onChange={change}>
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>{l.name}</option>
          ))}
        </select>
        <svg className="chevron" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </div>
  )
}
