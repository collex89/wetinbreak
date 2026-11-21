import { useTranslation } from 'react-i18next'

export default function Success({ message, go }) {
  const { t } = useTranslation()
  return (
    <div className="card success" role="status">
      <div className="tick" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </div>
      <h2>Payment successful</h2>
      <p>{message}</p>
      <button className="primary" onClick={() => go('home')}>{t('back_home')}</button>
    </div>
  )
}
