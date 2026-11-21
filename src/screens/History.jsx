import { useTranslation } from 'react-i18next'
import { getTransactions, naira } from '../store'

export default function History({ go }) {
  const { t, i18n } = useTranslation()
  const items = getTransactions()

  return (
    <>
      <button className="link" onClick={() => go('home')}>← {t('back')}</button>
      <h2>{t('history')}</h2>
      {items.length === 0 ? (
        // KNOWN BUG (planted): hardcoded English, should be t('no_transactions')
        <p className="empty">No transactions yet</p>
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
                <small>{new Date(tx.date).toLocaleString(i18n.language)}</small>
              </div>
              <span className="amount">{naira(tx.amount)}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
