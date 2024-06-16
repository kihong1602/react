import {Route, Routes} from 'react-router-dom'
import NoMatch from './NoMatch.tsx'

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path={'*'} element={<NoMatch />} />
    </Routes>
  )
}
