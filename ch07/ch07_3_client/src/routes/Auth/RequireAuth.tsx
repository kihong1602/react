import {FC, PropsWithChildren, useEffect} from 'react'
import useAuth from '../../hooks/useAuth.ts'
import {useNavigate} from 'react-router-dom'

type RequireAuthProps = {}

const RequireAuth: FC<PropsWithChildren<RequireAuthProps>> = ({children}) => {
  const {loggedUser} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    !loggedUser && navigate(-1)
  }, [loggedUser, navigate])

  return <>{children}</>
}

export default RequireAuth