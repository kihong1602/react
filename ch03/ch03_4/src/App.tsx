import CardContainer from './pages/CardContainer.tsx'
import UserContainer from './pages/UserContainer.tsx'
import AlignTest from './pages/AlignTest.tsx'
import JustifyCenterTest from './pages/JustifyCenterTest.tsx'
import MinMaxTest from './pages/MinMaxTest.tsx'
import WrapTest from './pages/WrapTest.tsx'
import DirectionTest from './pages/DirectionTest.tsx'

export default function App() {
  return (
    <main>
      <CardContainer />
      <UserContainer />
      <AlignTest />
      <JustifyCenterTest />
      <MinMaxTest />
      <WrapTest />
      <DirectionTest />
    </main>
  )
}
