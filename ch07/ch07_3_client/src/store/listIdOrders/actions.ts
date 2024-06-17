import {AddListIdToOrders, RemoveListIdFromOrders, SetListIdOrders, State} from './types.ts'
import {UUID} from '../commonTypes.ts'

export const setListIdOrders = (payload: State): SetListIdOrders => ({
  type: '@listIdOrders/set',
  payload
})

export const addListIdToOrders = (payload: UUID): AddListIdToOrders => ({
  type: '@listIdOrders/add',
  payload
})

export const removeListIdFromOrders = (payload: UUID): RemoveListIdFromOrders => ({
  type: '@listIdOrders/remove',
  payload
})