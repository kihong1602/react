import {Card, UUID} from './commonTypes.ts'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from './AppState.ts'
import {useCallback} from 'react'
import {makeRandomCard} from '../data'
import {addCard, removeCard} from './cardEntities'
import {appendCardIdToListId, prependCardIdToListId, removeCardIdFromListId} from './listIdCardIdOrders'

export const useCards = (listId: UUID) => {
  const dispatch = useDispatch()
  const cards = useSelector<AppState, Card[]>(({cardEntities, listIdCardIdOrders}) =>
    listIdCardIdOrders[listId].map(uuid => cardEntities[uuid]))

  const onPrependCard = useCallback(() => {
    const card = makeRandomCard()
    dispatch(addCard(card))
    dispatch(prependCardIdToListId({listId, cardId: card.uuid}))
  }, [dispatch, listId])

  const onAppendCard = useCallback(() => {
    const card = makeRandomCard()
    dispatch(addCard(card))
    dispatch(appendCardIdToListId({listId, cardId: card.uuid}))
  }, [dispatch, listId])

  const onRemoveCard = useCallback((uuid: UUID) => {
    dispatch(removeCard(uuid))
    dispatch(removeCardIdFromListId({listId, cardId: uuid}))
  }, [dispatch, listId])

  return {cards, onPrependCard, onAppendCard, onRemoveCard}
}