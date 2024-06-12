import {ChangeEvent, FormEvent, useCallback, useState} from 'react'
import {Title} from '../components'

export default function BasicForm() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    alert(JSON.stringify(Object.fromEntries(formData), null, 2))
  }, [name, email])

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(_ => e.target.value)
  }, [])

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(_ => e.target.value)
  }, [])

  return (
    <section className={'mt-4'}>
      <Title>BasicForm</Title>
      <div className={'flex justify-center mt-4'}>
        <form onSubmit={onSubmit}>
          <div className={'form-control'}>
            <label htmlFor="name" className={'label'}>
              <span className={'label-text'}>Username</span>
            </label>
            <input type={'text'} value={name} onChange={onChangeName} id={'name'}
                   placeholder={'enter your name'} className={'input input-primary'} />
          </div>
          <div className={'form-control'}>
            <label htmlFor="email" className={'label'}>
              <span className={'label-text'}>email</span>
            </label>
            <input type={'email'} value={email} onChange={onChangeEmail} id={'email'}
                   placeholder={'enter your email'} className={'input input-primary'} />
          </div>
          <div className={'flex justify-center mt-4'}>
            <input type={'submit'} value={'Submit'} className={'w-1/2 btn btn-sm btn-primary'} />
            <input defaultValue={'Cancel'} className={'w-1/2 ml-4 btn btn-sm'} />
          </div>
        </form>
      </div>
    </section>
  )
}