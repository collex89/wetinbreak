const USER_KEY = 'wb_user'
const TX_KEY = 'wb_transactions'

export const getUser = () => JSON.parse(localStorage.getItem(USER_KEY) || 'null')
export const saveUser = (user) => localStorage.setItem(USER_KEY, JSON.stringify(user))

export const getTransactions = () => JSON.parse(localStorage.getItem(TX_KEY) || '[]')
export const addTransaction = (tx) => {
  const all = [{ ...tx, id: Date.now(), date: new Date().toISOString() }, ...getTransactions()]
  localStorage.setItem(TX_KEY, JSON.stringify(all))
}

export const naira = (amount) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount)

// Fake payment: wait a second, then succeed.
export const fakePay = () => new Promise((resolve) => setTimeout(resolve, 1000))
