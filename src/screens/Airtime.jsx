import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { addTransaction, fakePay, naira } from '../store'

const NETWORKS = ['MTN', 'Airtel', 'Glo', '9mobile']

export default function Airtime({ go, done }) {
  const { t } = useTranslation()
  const [network, setNetwork] = useState('')
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!network || !phone || !amount) return setError(t('error_required'))
    if (!/^\d{11}$/.test(phone)) return setError(t('error_phone'))
    if (Number(amount) < 50) return setError(t('error_amount'))
    setError('')
    setBusy(true)
    await fakePay()
    addTransaction({ type: 'airtime', network, phone, amount: Number(amount) })
    done(t('airtime_success', { amount: naira(amount), network, phone }))
  }

  return (
    <>
      <button className="link" onClick={() => go('home')}>← {t('back')}</button>
      <h2>{t('buy_airtime')}</h2>
      <form className="card" onSubmit={submit}>
        <fieldset>
          <legend>{t('network')}</legend>
          <div className="chips">
            {NETWORKS.map((n) => (
              <button
                type="button"
                key={n}
                className={network === n ? 'chip active' : 'chip'}
                aria-pressed={network === n}
                onClick={() => setNetwork(n)}
              >
                {n}
              </button>
            ))}
          </div>
        </fieldset>
        <label>
          {t('phone_number')}
          <input value={phone} inputMode="numeric" onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          {t('amount')}
          <input value={amount} inputMode="numeric" onChange={(e) => setAmount(e.target.value)} />
        </label>
        {error && <p className="error" role="alert">{error}</p>}
        <button type="submit" className="primary" disabled={busy}>
          {/* KNOWN BUG (planted): hardcoded English, should be t('processing') */}
          {busy ? 'Processing...' : t('pay')}
        </button>
      </form>
    </>
  )
}
