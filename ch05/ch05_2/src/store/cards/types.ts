import {Action} from 'redux'
import {ICard} from "../../data";

export type Card = ICard
export type State = Card[]

export type AddCardAction = Action<'@cards/addCard'> & {
  payload: Card
}

export type RemoveCardAction = Action<'@cards/removeCard'> & {
  payload: string
}

export type Actions = AddCardAction | RemoveCardAction