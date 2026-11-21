import { useTranslation } from 'react-i18next'

export default function Success({ message, go }) {
  const { t } = useTranslation()
  return (
    <div className="card success" role="status">
      <div className="tick">✓</div>
      <h2>{t('payment_successful')}</h2>
      <p>{message}</p>
      <button className="primary" onClick={() => go('home')}>{t('back_home')}</button>
    </div>
  )
}
