import type {ChangeEvent} from 'react'
import {useCallback, useState} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'

export default function InputTest() {
  const [value, setValue] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(_ => e.target.value)
  }, [])

  const onChangeChekced = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChecked(_ => e.target.checked)
  }, [])

  return (
    <section className={'mt-4'}>
      <Title>InputTest</Title>
      <div className={'flex items-center justify-center p-4 mt-4'}>
        <Input type={'text'} value={value} onChange={onChangeValue} className={'input-primary input-sm'} />
        <Input type={'checkbox'} checked={checked} onChange={onChangeChekced}
               className={'ml-4 checkbox checkbox-primary input-sm'} />
      </div>
    </section>
  )
}