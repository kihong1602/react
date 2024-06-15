import {Action} from 'redux'
import {UUID} from '../commonTypes'

export type State = UUID[]

export type SetListIdOrders = Action<'@listIdOrders/set'> & {
  payload: State
}

export type AddListIdToOrders = Action<'@listIdOrders/add'> & {
  payload: UUID
}

export type RemoveListIdFromOrders = Action<'@listIdOrders/remove'> & {
  payload: UUID
}

export type Actions = SetListIdOrders | AddListIdToOrders | RemoveListIdFromOrders