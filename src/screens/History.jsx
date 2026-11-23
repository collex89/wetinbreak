import { useTranslation } from 'react-i18next'
import { getTransactions, naira } from '../store'

// Browsers have no Yoruba, Igbo or Hausa date data and fall back to the English
// 12-hour clock, which adds "AM"/"PM". Numbers only, day first, 24-hour clock.
const dateFormat = new Intl.DateTimeFormat('en-NG', {
  day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
})

export default function History({ go }) {
  const { t } = useTranslation()
  const items = getTransactions()

  return (
    <>
      <button className="link" onClick={() => go('home')}>← {t('back')}</button>
      <h2>{t('history')}</h2>
      {items.length === 0 ? (
        <p className="empty">{t('no_transactions')}</p>
      ) : (
        <ul className="list">
          {items.map((tx) => (
            <li key={tx.id}>
              <div>
                <strong>
                  {tx.type === 'airtime'
                    ? t('airtime_label', { network: tx.network })
                    : t('bill_label', { company: tx.company })}
                </strong>
                <small>{dateFormat.format(new Date(tx.date))}</small>
              </div>
              <span className="amount">{naira(tx.amount)}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
