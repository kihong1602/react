import ResponsiveContextTest from './pages/ResponsiveContextTest.tsx'
import {ResponsiveProvider} from './contexts/ResponsiveContext.tsx'

export default function App() {
  return (
    <ResponsiveProvider>
      <main>
        <ResponsiveContextTest />
      </main>
    </ResponsiveProvider>
  )
}
