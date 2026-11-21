import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { saveUser } from '../store'

export default function SignUp({ onDone }) {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return setError(t('error_required'))
    if (!/^\d{11}$/.test(phone)) return setError(t('error_phone'))
    const user = { name: name.trim(), phone }
    saveUser(user)
    onDone(user)
  }

  return (
    <main className="app">
      <header className="brand">
        <h1>{t('app_name')}</h1>
        <p>{t('tagline')}</p>
      </header>
      <form className="card" onSubmit={submit}>
        <label>
          {t('full_name')}
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          {t('phone_number')}
          <input value={phone} inputMode="numeric" onChange={(e) => setPhone(e.target.value)} />
        </label>
        {error && <p className="error" role="alert">{error}</p>}
        <button type="submit" className="primary">{t('sign_up')}</button>
      </form>
    </main>
  )
}
