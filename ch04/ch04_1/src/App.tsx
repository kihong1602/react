import Clock from './pages/Clock.tsx'
import {useClock} from './hooks/useClock.ts'

export default function App() {
  const today = useClock()
  return <Clock today={today} />
}
