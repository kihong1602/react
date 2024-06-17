import {randomEmail} from '../../data'
import {ChangeEvent, useCallback, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth.ts'

type SignUpFormType = Record<'email' | 'password' | 'confirmPassword', string>
const initialFormState = {email: randomEmail(), password: '1', confirmPassword: '1'}

export default function SignUp() {
  const [{email, password, confirmPassword}, setForm] = useState<SignUpFormType>(initialFormState)

  const changed = useCallback((key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setForm(obj => ({...obj, [key]: e.target.value}))
  }, [])

  const navigate = useNavigate()
  const {signup} = useAuth()
  const createAccount = useCallback(() => {
    console.log(email, password, confirmPassword)
    if (password === confirmPassword) {
      signup(email, password, () => navigate('/'))
    } else {
      alert('password is not equals to confirmPassword')
    }
  }, [email, password, confirmPassword, navigate, signup])

  return (
    <div className={'flex flex-col border-gray-300 rounded-xl shadow-xl bg-gray-100 border'}>
      <div className={'flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto'}>
        <div className={'w-full px-6 py-8 text-black bg-white rounded shadow-md'}>
          <h1 className={'mb-8 text-2xl text-center text-primary'}>Sign Up</h1>
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
          <input type="password"
                 className={'w-full p-3 mb-4 input input-primary'}
                 name={'confirm_password'}
                 placeholder={'Confirm Password'}
                 value={confirmPassword}
                 onChange={changed('confirmPassword')}
          />
          <button type={'submit'} className={'w-full btn btn-primary'} onChange={createAccount}>Create Account</button>
        </div>
        <div className={'mt-6 text-gray-900'}>
          Already have an account?
          <Link to={'/login'} className={'btn btn-link btn-primary'}>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}