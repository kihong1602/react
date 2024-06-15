import {Action} from 'redux'
import {Card, UUID} from '../commonTypes.ts'

export * from '../commonTypes.ts'
export type State = Record<UUID, Card>

export type AddCardAction = Action<'@cardEntities/add'> & {
  payload: Card
}

export type RemoveCardAction = Action<'@cardEntities/remove'> & {
  payload: UUID
}
export type Actions = AddCardAction | RemoveCardAction