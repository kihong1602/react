import {useCallback, useState} from 'react'
import {get} from '../../server/getAndDel.ts'

export default function GetTest() {
  const [data, setData] = useState<object>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const getAllTest = useCallback(() => {
    get('/api/test')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => setErrorMessage(error.message))
  }, [])

  const getTest = useCallback(() => {
    get('/api/test/1234')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => setErrorMessage(error.message))
  }, [])

  return (
    <div className={'mb-4'}>
      <div className={'flex justify-center mb-4'}>
        <button onClick={getAllTest} className={'mr-12 btn btn-primary'}>
          GET ALL
        </button>
        <button onClick={getTest} className={'btn btn-primary'}>
          GET id 1234
        </button>
      </div>
      <div className={'mt-4 text-center'}>
        <p>data: {JSON.stringify(data, null, 2)}</p>
        {errorMessage && <p>error: {errorMessage}</p>}
      </div>
    </div>
  )
}