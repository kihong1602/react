import {useToggle} from '../../hooks/useToggle.ts'
import {useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth.ts'
import {useCallback} from 'react'
import {Modal, ModalAction, ModalContent} from '../../theme/daisyui'

export default function Logout() {

  const [open, toggleOpen] = useToggle(true)

  const navigate = useNavigate()
  const {logout} = useAuth()

  const onAccept = useCallback(() => {
    logout(() => {
      toggleOpen()
      navigate('/')
    })
  }, [logout, toggleOpen, navigate])

  const onCancel = useCallback(() => {
    toggleOpen()
    navigate(-1)
  }, [toggleOpen, navigate])

  return (
    <Modal open={open}>
      <ModalContent
        closeIconClassName={'btn-primary btn-outline'}
        onCloseIconClicked={onCancel}>
        <p className={'text-xl text-center'}>Are you sure you want to logout?</p>
        <ModalAction>
          <button className={'btn btn-primary btn-sm'} onClick={onAccept}>Logout</button>
          <button className={'btn btn-secondary btn-sm'} onClick={onCancel}>Cancel</button>
        </ModalAction>
      </ModalContent>
    </Modal>
  )
}