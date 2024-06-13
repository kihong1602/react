import * as D from '../data'
import * as E from '../store/errorMessage'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../store/AppState.ts'
import {useCallback} from 'react'
import {Title} from '../components'
import {Button} from '../theme/daisyui'


export default function ErrorMessageTest() {
  const dispatch = useDispatch()
  const errorMessage = useSelector<AppState, E.State>(({errorMessage}) => errorMessage)

  const generateErrorMessage = useCallback(() => {
    dispatch<any>(E.generateErrorMessage(D.randomSentence()))
  }, [dispatch])

  return (
    <section className="mt-4">
      <Title>LoadingTest</Title>
      <div className={'mt-4'}>
        <div className={'flex justify-center mt-4'}>
          <Button className={'btn-sm btn-primary'} onClick={generateErrorMessage}>
            generate error message
          </Button>
        </div>
        {errorMessage && (
          <div className={'flex items-center justify-center bg-red-200'}>
            <p className={'text-2xl text-red-600 text-bold'}>error: {errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  )
}
