import {useCallback, useRef} from 'react'
import {Title} from '../components'

export default function ClickTest() {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClick = useCallback(() => inputRef.current?.click(), [])
  return (
    <section className={'mt-4'}>
      <Title>ClickTest</Title>
      <div className={'mt-4 flex justify-center items-center'}>
        <button className={'btn btn-primary mr-4'} onClick={onClick}>
          Click Me
        </button>
        <input type="file" ref={inputRef} className={'hidden'} accept={'image/*'} />
      </div>
    </section>
  )
}