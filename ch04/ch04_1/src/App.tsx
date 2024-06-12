import Clock from './pages/Clock.tsx'

export default function App() {
  const today = new Date()
  return <Clock today={today} />
}
