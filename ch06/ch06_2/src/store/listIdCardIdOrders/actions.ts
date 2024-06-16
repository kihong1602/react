import {ListIdCardId, ListIdCardIds} from '../commonTypes.ts'
import {
  AppendCardIdToListIdAction,
  PrependCardIdToListIdAction,
  RemoveCardIdFromListIdAction,
  RemoveListIdAction,
  SetListIdCardIds
} from './types.ts'

export const setListIdCardIds = (payload: ListIdCardIds): SetListIdCardIds => ({
  type: '@listIdCardIds/set',
  payload
})

export const removeListId = (payload: string): RemoveListIdAction => ({
  type: '@listIdCardIds/remove',
  payload
})

export const prependCardIdToListId = (payload: ListIdCardId): PrependCardIdToListIdAction => ({
  type: '@listIdCardIds/prependCardId',
  payload
})

export const appendCardIdToListId = (payload: ListIdCardId): AppendCardIdToListIdAction => ({
  type: '@listIdCardIds/appendCardId',
  payload
})

export const removeCardIdFromListId = (payload: ListIdCardId): RemoveCardIdFromListIdAction => ({
  type: '@listIdCardIds/removeCardId',
  payload
})