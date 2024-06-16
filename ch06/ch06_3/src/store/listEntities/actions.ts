import {AddListAction, RemoveListAction} from './types'
import {List} from '../commonTypes.ts'

export const addList = (payload: List): AddListAction => ({
  type: '@listEntities/add',
  payload
})

export const removeList = (payload: string): RemoveListAction => ({
  type: '@listEntities/remove',
  payload
})