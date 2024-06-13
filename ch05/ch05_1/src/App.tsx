import UseReducerClock from './pages/UseReducerClock.tsx'
import ReduxClock from './pages/ReduxClock.tsx'
import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store/useStore.ts'


export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <main className={'p-8'}>
        <UseReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  )
}
