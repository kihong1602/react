import {useNavigate} from 'react-router-dom'
import {useCallback} from 'react'

export default function NoMatch() {
  const navigate = useNavigate()

  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <div className={'flex flex-col p-4'}>
      <p className={'text-xl text-center p-4 alert alert-error'}>Oops! No Page Found!</p>
      <div className={'flex justify-center mt-4'}>
        <button className={'ml-4 btn btn-primary gtn-xs'} onClick={goBack}>
          go Back
        </button>
      </div>
    </div>
  )
}