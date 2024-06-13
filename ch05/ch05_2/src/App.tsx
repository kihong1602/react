import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store/useStore.ts'
import RemoteUserTest from "./pages/RemoteUserTest.tsx";
import CounterTest from "./pages/CounterTest.tsx";
import ClockTest from "./pages/ClockTest.tsx";
import CardsTest from "./pages/CardsTest";


export default function App() {
  const store = useStore()
  return (
      <ReduxProvider store={store}>
        <CardsTest/>
        <RemoteUserTest/>
        <CounterTest/>
        <ClockTest/>
      </ReduxProvider>
  )
}
