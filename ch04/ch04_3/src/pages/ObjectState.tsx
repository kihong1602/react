import {ChangeEvent, FormEvent, useCallback, useState} from 'react'
import {Title} from '../components'

type FormType = {
  name: string
  email: string
}

export default function ObjectState() {

  const [form, setForm] = useState<FormType>({name: '', email: ''})

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(JSON.stringify(form, null, 2))
  }, [form])

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(state => ({...state, name: e.target.value}))
  }, [])

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(form => ({...form, email: e.target.value}))
  }, [])

  return (
    <section className={'mt-4'}>
      <Title>ObjectState</Title>
      <div className={'flex justify-center mt-4'}>
        <form onSubmit={onSubmit}>
          <div className={'form-control'}>
            <label htmlFor="name" className={'label'}>
              <span className={'label-text'}>Username</span>
            </label>
            <input type={'text'} value={form.name} onChange={onChangeName} id={'name'} placeholder={'enter your name'}
                   className={'input input-primary'} />
          </div>
          <div className={'form-control'}>
            <label htmlFor="email" className={'label'}>
              <span className={'label-text'}>email</span>
            </label>
            <input type={'text'} value={form.email} onChange={onChangeEmail} id={'email'}
                   placeholder={'enter your email'}
                   className={'input input-primary'} />
          </div>
          <div className={'flex justify-center mt-4'}>
            <input type="submit" value={'Submit'} className={'w-1/2 btn btn-sm btn-primary'} />
            <input defaultValue={'Cancel'} className={'w-1/2 ml-4 btn btn-sm'} />
          </div>
        </form>
      </div>
    </section>
  )
}