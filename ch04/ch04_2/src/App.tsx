import UseOrCreateTest from './pages/UseOrCreateTest.tsx'
import Callback from './pages/Callback.tsx'
import Memo from './pages/Memo.tsx'
import HighOrderCallback from './pages/HighOrderCallback.tsx'

export default function App() {
  return (
    <div>
      <HighOrderCallback />
      <Callback />
      <Memo />
      <UseOrCreateTest />
    </div>
  )
}
