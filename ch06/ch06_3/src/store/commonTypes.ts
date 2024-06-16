import type {ICard} from '../data'

export type UUID = string
export type List = {
  uuid: UUID
  title: string
}

export type Card = ICard

export type CardIdListId = {
  cardId: UUID
  listId: UUID
}

export type ListIdCardId = CardIdListId

export type ListIdCardIds = {
  listId: UUID
  cardIds: UUID[]
}

export type CardIdListIdIndex = CardIdListId & {
  index: number
}