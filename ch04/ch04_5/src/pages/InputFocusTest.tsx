import {useEffect, useRef} from 'react'
import {Title} from '../components'

export default function InputFocusTest() {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  return (
    <section className={'mt-4'}>
      <Title>InputFocusTest</Title>
      <div className={'flex justify-center mt-4'}>
        <input ref={inputRef} className={'input input-primary'} placeholder={'enter som text'} />
      </div>
    </section>
  )
}