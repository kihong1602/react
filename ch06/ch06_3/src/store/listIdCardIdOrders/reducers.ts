import * as T from './types'

const initialState: T.State = {}

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@listIdCardIds/set':
      return {...state, [action.payload.listId]: action.payload.cardIds}
    case '@listIdCardIds/remove': {
      const newState = {...state}
      delete newState[action.payload]
      return newState
    }
    case '@listIdCardIds/prependCardId': {
      const cardIds = state[action.payload.listId]
      return {...state, [action.payload.listId]: [action.payload.cardId, ...cardIds]}
    }
    case '@listIdCardIds/appendCardId': {
      const cardIds = state[action.payload.listId]
      return {...state, [action.payload.listId]: [...cardIds, action.payload.cardId]}
    }
    case '@listIdCardIds/removeCardId': {
      const cardIds = state[action.payload.listId]
      return {
        ...state,
        [action.payload.listId]: cardIds.filter(id => id !== action.payload.cardId)
      }
    }

  }
  return state
}