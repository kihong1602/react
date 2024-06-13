import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store/useStore.ts'
import FetchTest from './pages/FetchTest.tsx'
import ErrorMessageTest from './pages/ErrorMessageTest.tsx'
import LoadingTest from './pages/LoadingTest.tsx'
import LoggerTest from './pages/LoggerTest.tsx'


export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <FetchTest />
      <ErrorMessageTest />
      <LoadingTest />
      <LoggerTest />
    </ReduxProvider>
  )
}
