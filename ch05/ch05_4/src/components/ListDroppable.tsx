import {Divprops} from './Div.tsx'
import {FC, useRef} from 'react'
import {useDrop} from 'react-dnd'

export type ListDroppableProps = Divprops & {}

export const ListDroppable: FC<ListDroppableProps> = ({...props}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({accept: 'list'})
  drop(divRef)
  return <div ref={divRef} {...props} />
}
