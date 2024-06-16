import {Route, Routes} from 'react-router-dom'
import NoMatch from './NoMatch.tsx'
import Home from './Home.tsx'
import Board from './Board'
import Card from './Card.tsx'

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/welcome'} element={<Home title={'Welcome to our site'} />} />
      <Route path={'/board'} element={<Board />} />
      <Route path={'/board/card/:cardId'} element={<Card />} />
      <Route path={'*'} element={<NoMatch />} />
    </Routes>
  )
}
