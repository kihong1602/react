import * as T from './types'

const initialState: T.State = []

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@listIdOrders/set':
      return action.payload
    case '@listIdOrders/add':
      return [...state, action.payload]
    case '@listIdOrders/remove':
      return state.filter(uuid => uuid !== action.payload)
  }
  return state
}