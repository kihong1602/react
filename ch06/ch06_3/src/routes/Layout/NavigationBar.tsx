import {Link as RRLink} from 'react-router-dom'
import {Link} from '../../components'
import useAuth from '../../hooks/useAuth.ts'

export default function NavigationBar() {
  const {loggedUser} = useAuth()
  return (
    <div className={'flex p-2 navbar bg-base-100'}>
      <div className={'flex p-2 navbar'}>
        <Link to={'/'}>Home</Link>
        <Link to={'/board'} className={'ml-4'}>
          Board
        </Link>
      </div>
      <div className={'flex p-2 items-center'}>
        {!loggedUser && <RRLink to={'/login'} className={'btn btn-sm btn-primary'}>
          Login
        </RRLink>}
        {!loggedUser && <RRLink to={'/signup'} className={'ml-4 btn btn-sm btn-outline btn-primary'}>
          Signup
        </RRLink>}
        {loggedUser && <RRLink to={'/logout'} className={'ml-4 mr-4'}>
          Logout
        </RRLink>}
      </div>
    </div>
  )
}