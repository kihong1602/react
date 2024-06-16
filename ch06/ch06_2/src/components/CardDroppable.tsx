import {FC, PropsWithChildren} from 'react'
import {Droppable} from 'react-beautiful-dnd'

export type CardProppableProps = {
  droppableId: string
}

export const CardDroppable: FC<PropsWithChildren<CardProppableProps>> =
  ({droppableId, children}) => {
    return (
      <Droppable droppableId={droppableId}>
        {provided => (
          <div {...provided.droppableProps}
               ref={provided.innerRef}
               className={'flex flex-col p-2'}>
            {children}
          </div>
        )}
      </Droppable>
    )
  }