import ValidatableInputTest from './pages/ValidatableInputTest.tsx'
import ForwardRefTest from './pages/ForwardRefTest.tsx'
import InputValueTest from './pages/InputValueTest.tsx'
import InputFocusTest from './pages/InputFocusTest.tsx'
import FileDrop from './pages/FileDrop.tsx'
import ClickTest from './pages/ClickTest.tsx'

export default function App() {
  return (
    <main>
      <ValidatableInputTest />
      <ForwardRefTest />
      <InputValueTest />
      <InputFocusTest />
      <FileDrop />
      <ClickTest />
    </main>
  )
}
