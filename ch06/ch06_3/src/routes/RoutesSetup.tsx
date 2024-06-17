import {Route, Routes} from 'react-router-dom'
import NoMatch from './NoMatch.tsx'
import Layout from './Layout'
import Board from '../pages/Board'
import LandingPage from './LandingPage'
import SignUp from './Auth/SignUp.tsx'
import Login from './Auth/Login.tsx'
import Logout from './Auth/Logout.tsx'
import RequireAuth from './Auth/RequireAuth.tsx'

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path={'/board'} element={
          <RequireAuth>
            <Board />
          </RequireAuth>
        } />
        <Route path={'*'} element={<NoMatch />} />
      </Route>
      <Route path={'/signup'} element={<SignUp />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/logout'} element={
        <RequireAuth>
          <Logout />
        </RequireAuth>
      } />
      <Route path={'*'} element={<NoMatch />} />
    </Routes>
  )
}
