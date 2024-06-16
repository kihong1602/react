import {List} from '../../store/commonTypes.ts'
import {FC, useMemo} from 'react'
import {Icon} from '../../theme/daisyui'
import {useCards} from '../../store/useCards.ts'
import ListCard from '../ListCard'
import {CardDroppable, Div, ListDraggable, MoveFunc} from '../../components'

export type BoardListProps = {
  list: List
  onRemoveList?: () => void
  index: number
  onMoveList: MoveFunc
}

const BoardList: FC<BoardListProps> =
  ({list, onRemoveList, index, onMoveList, ...props}) => {
    const {cards, onPrependCard, onAppendCard, onRemoveCard} = useCards(list.uuid)

    const children = useMemo(() =>
      cards.map((card, index) => (
        <ListCard card={card} key={card.uuid} onRemove={() => onRemoveCard(card.uuid)} draggableId={card.uuid}
                  index={index} />
      )), [cards, onRemoveCard])

    return (
      <ListDraggable index={index} onMove={onMoveList} id={list.uuid}>
        <Div {...props} className={'p-2 m-2 border border-gray-300 rounded-lg'}>
          <div className={'flex justify-between mb-2'}>
            <p className={'w-32 text-sm font-bold underline line-clamp-1'}>{list.title}</p>
          </div>
          <div className={'flex justify-between ml-2'}>
            <Icon name={'remove'} className={'btn-error btn-xs'} onClick={onRemoveList} />
            <div className={'flex'}>
              <Icon name={'post_add'} className={'btn-success btn-xs'} onClick={onPrependCard} />
              <Icon name={'playlist_add'} className={'ml-2 btn-success btn-xs'} onClick={onAppendCard} />
            </div>
          </div>
          <CardDroppable droppableId={list.uuid}>{children}</CardDroppable>
        </Div>
      </ListDraggable>
    )
  }

export default BoardList