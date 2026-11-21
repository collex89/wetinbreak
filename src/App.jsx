import { useState } from 'react'
import { getUser } from './store'
import SignUp from './screens/SignUp'
import Home from './screens/Home'
import Airtime from './screens/Airtime'
import Bill from './screens/Bill'
import History from './screens/History'
import Success from './screens/Success'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [screen, setScreen] = useState('home')
  const [message, setMessage] = useState('')

  const go = (next) => setScreen(next)
  const done = (msg) => {
    setMessage(msg)
    setScreen('success')
  }

  if (!user) return <SignUp onDone={(u) => setUser(u)} />

  return (
    <main className="app">
      {screen === 'home' && <Home user={user} go={go} />}
      {screen === 'airtime' && <Airtime go={go} done={done} />}
      {screen === 'bill' && <Bill go={go} done={done} />}
      {screen === 'history' && <History go={go} />}
      {screen === 'success' && <Success message={message} go={go} />}
    </main>
  )
}
