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
// TEST HOOK (not a fix): ?slow=1 in the URL makes it wait 20 seconds, so tests
// have time to see the "Processing..." state of the Pay button. (4 seconds was
// too short: Kane takes about 15 seconds to read the screen after a click.)
const payDelay = () =>
  new URLSearchParams(window.location.search).get('slow') === '1' ? 20000 : 1000
export const fakePay = () => new Promise((resolve) => setTimeout(resolve, payDelay()))
