import {useCallback, useState} from 'react'
import {put} from '../../server/postAndPut.ts'
import {makeRandomCard} from '../../data'

type Body = Record<'id' | string, any>

type Data = {
  ok: boolean
  body?: Body
  errorMessage?: string
}

export default function PutTest() {
  const [data, setDate] = useState<Data | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const putTest = useCallback(() => {
    put('/api/test/1234', makeRandomCard())
    .then(res => res.json())
    .then(data => setDate(data))
    .catch(e => setErrorMessage(e.message))
  }, [])

  return (
    <div className={'mb-4'}>
      <div className={'flex justify-center mb-4'}>
        <button onClick={putTest} className={'btn btn-primary'}>
          PUT id 1234
        </button>
      </div>
      <div className={'mt-4 text-center'}>
        <p>id: {data?.body?.id}</p>
        <p>data: {JSON.stringify(data, null, 2)}</p>
        {errorMessage && <p>error: {errorMessage}</p>}
      </div>
    </div>
  )
}