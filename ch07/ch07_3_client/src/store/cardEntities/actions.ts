import {Card, UUID} from '../commonTypes.ts'
import {AddCardAction, RemoveCardAction} from './types.ts'


export const addCard = (payload: Card): AddCardAction => ({
  type: '@cardEntities/add',
  payload
})

export const removeCard = (payload: UUID): RemoveCardAction => ({
  type: '@cardEntities/remove',
  payload
})