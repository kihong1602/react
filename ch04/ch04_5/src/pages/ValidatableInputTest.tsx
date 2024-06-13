import {useCallback, useRef} from 'react'
import {ValidatableInput, ValidatableInputMethods} from '../theme/daisyui/ValidatableInput.tsx'
import {Title} from '../components'

export default function ValidatableInputTest() {
  const methodsRef = useRef<ValidatableInputMethods>(null)

  const validateEmail = useCallback(() => {
    if (methodsRef.current) {
      const [valid, valueOrErrorMessage] = methodsRef.current.validate()
      const message = valid ? `${valueOrErrorMessage}는 유효한 이메일 주소입니다.` : valueOrErrorMessage
      alert(message)
    }
  }, [])
  return (
    <section className={'mt-4'}>
      <Title>ValidatableInputTest</Title>
      <div className={'flex justify-center mt-4'}>
        <div className={'flex flex-col w-1/3 p-2'}>
          <ValidatableInput type={'email'} ref={methodsRef} className={'input-primary'} />
          <button onClick={validateEmail} className={'mt-4 btn btn-primary'}>validate</button>
        </div>
      </div>
    </section>
  )
}