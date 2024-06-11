import {FC, PropsWithChildren, ReactNode} from 'react'

export type PProps = {
  children?: ReactNode
}

const P: FC<PropsWithChildren<PProps>> = (props) => {
  return <p{...props} />
}

export default P