import { useTranslation } from 'react-i18next'

export default function Home({ user, go }) {
  const { t } = useTranslation()
  return (
    <>
      <header className="brand">
        <h1>{t('welcome', { name: user.name })}</h1>
        <p>{t('what_to_do')}</p>
      </header>
      <div className="menu">
        <button className="tile" onClick={() => go('airtime')}>📱 {t('buy_airtime')}</button>
        <button className="tile" onClick={() => go('bill')}>💡 {t('pay_bill')}</button>
        <button className="tile" onClick={() => go('history')}>🧾 {t('history')}</button>
      </div>
    </>
  )
}
