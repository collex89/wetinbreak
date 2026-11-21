import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { addTransaction, fakePay, naira } from '../store'

const COMPANIES = [
  'Ikeja Electric',
  'Eko Electricity (EKEDC)',
  'Abuja Electricity (AEDC)',
  'Enugu Electricity (EEDC)',
  'Ibadan Electricity (IBEDC)',
]

export default function Bill({ go, done }) {
  const { t } = useTranslation()
  const [company, setCompany] = useState('')
  const [meter, setMeter] = useState('')
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!company || !meter || !amount) return setError(t('error_required'))
    if (!/^\d{11}$/.test(meter)) return setError(t('error_meter'))
    if (Number(amount) < 50) return setError(t('error_amount'))
    setError('')
    setBusy(true)
    await fakePay()
    addTransaction({ type: 'bill', company, meter, amount: Number(amount) })
    done(t('bill_success', { amount: naira(amount), company, meter }))
  }

  return (
    <>
      <button className="link" onClick={() => go('home')}>← {t('back')}</button>
      <h2>{t('pay_bill')}</h2>
      <form className="card" onSubmit={submit}>
        <label>
          {t('electricity_company')}
          <select value={company} onChange={(e) => setCompany(e.target.value)}>
            <option value="">{t('choose_company')}</option>
            {COMPANIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          {t('meter_number')}
          <input value={meter} inputMode="numeric" onChange={(e) => setMeter(e.target.value)} />
        </label>
        <label>
          {t('amount')}
          <input value={amount} inputMode="numeric" onChange={(e) => setAmount(e.target.value)} />
        </label>
        {error && <p className="error" role="alert">{error}</p>}
        <button type="submit" className="primary" disabled={busy}>
          {busy ? t('processing') : t('pay')}
        </button>
      </form>
    </>
  )
}
