import {Action} from 'redux'
import {ListIdCardId, ListIdCardIds, UUID} from '../commonTypes.ts'

export type State = Record<UUID, UUID[]>

export type SetListIdCardIds = Action<'@listIdCardIds/set'> & {
  payload: ListIdCardIds
}

export type RemoveListIdAction = Action<'@listIdCardIds/remove'> & {
  payload: UUID
}

export type PrependCardIdToListIdAction = Action<'@listIdCardIds/prependCardId'> & {
  payload: ListIdCardId
}

export type AppendCardIdToListIdAction = Action<'@listIdCardIds/appendCardId'> & {
  payload: ListIdCardId
}

export type RemoveCardIdFromListIdAction = Action<'@listIdCardIds/removeCardId'> & {
  payload: ListIdCardId
}

export type Actions =
  | SetListIdCardIds
  | RemoveListIdAction
  | PrependCardIdToListIdAction
  | AppendCardIdToListIdAction
  | RemoveCardIdFromListIdAction