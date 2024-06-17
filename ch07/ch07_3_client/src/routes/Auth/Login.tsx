import {ChangeEvent, useCallback, useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {readObjectP} from '../../utils/readWriteObjectP.ts'
import useAuth from '../../hooks/useAuth.ts'

type LoginFormType = Record<'email' | 'password', string>

const initialFormState = {email: '', password: ''}

export default function Login() {
  const [{email, password}, setForm] = useState<LoginFormType>(initialFormState)

  const changed = useCallback((key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setForm(obj => ({...obj, [key]: e.target.value}))
  }, [])

  const navigate = useNavigate()
  const {login} = useAuth()

  const loginAccount = useCallback(() => {
    login(email, password, () => navigate('/'))
  }, [email, password, navigate, login])

  useEffect(() => {
    readObjectP<LoginFormType>('user')
    .then(user => {
      user && setForm(user)
    })
  }, [])


  return (
    <div className={'flex flex-col bg-gray-100 border border-gray-300 shadow-xl rounded-xl'}>
      <div className={'flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto'}>
        <div className={'w-full px-6 py-8 text-black bg-white rounded shadow-md'}>
          <h1 className={'mb-8 text-2xl text-center text-primary'}>Login</h1>
          <input type="text"
                 className={'w-full p-3 mb-4 input input-primary'}
                 name={'email'}
                 placeholder={'Email'}
                 value={email}
                 onChange={changed('email')}
          />
          <input type="password"
                 className={'w-full p-3 mb-4 input input-primary'}
                 name={'password'}
                 placeholder={'Password'}
                 value={password}
                 onChange={changed('password')}
          />
          <button type={'submit'} className={'w-full btn btn-primary'} onClick={loginAccount}>Login</button>
        </div>
        <div className={'mt-6 text-gray-900'}>
          Create account?
          <Link to={'/signup'} className={'btn btn-link btn-primary'}>SignUp</Link>
        </div>
      </div>
    </div>
  )
}