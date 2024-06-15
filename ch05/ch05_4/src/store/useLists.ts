import {List} from './commonTypes.ts'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from './AppState.ts'
import {useCallback} from 'react'
import * as LO from '../store/listIdOrders'
import * as L from '../store/listEntities'
import * as LC from '../store/listIdCardIdOrders'
import {removeCard} from './cardEntities'

export const useLists = () => {
  const dispatch = useDispatch()

  const lists = useSelector<AppState, List[]>(({
                                                 listIdOrders,
                                                 listEntities
                                               }) => listIdOrders.map(uuid => listEntities[uuid]))

  const listIdCardIdOrders = useSelector<AppState, LC.State>(({listIdCardIdOrders}) => listIdCardIdOrders)

  const listIdOrders = useSelector<AppState, LO.State>(({listIdOrders}) => listIdOrders)

  const onCreateList = useCallback((uuid: string, title: string) => {
    const list = {uuid, title}
    dispatch(LO.addListIdToOrders(list.uuid))
    dispatch(L.addList(list))
    dispatch(LC.setListIdCardIds(({listId: list.uuid, cardIds: []})))
  }, [dispatch])


  const onRemoveList = useCallback((listId: string) => () => {
    listIdCardIdOrders[listId].forEach(cardId => {
      dispatch(removeCard(cardId))
    })
    dispatch(LC.removeListId(listId))
    dispatch(L.removeList(listId))
    dispatch(LO.removeListIdFromOrders(listId))
  }, [dispatch, listIdCardIdOrders])

  const onMoveList = useCallback((dragIndex: number, hoverIndex: number) => {
    const newOrders = listIdOrders.map((item, index) =>
      index === dragIndex
        ? listIdOrders[hoverIndex]
        : index === hoverIndex
          ? listIdOrders[dragIndex]
          : item)
    dispatch(LO.setListIdOrders(newOrders))
  }, [dispatch, listIdOrders])

  return {lists, onCreateList, onRemoveList, onMoveList}
}