import * as L from './listEntities'
import * as LO from './listIdOrders'
import * as LC from './listIdCardIdOrders'
import * as C from './cardEntities'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
  listEntities: L.reducer,
  listIdOrders: LO.reducer,
  listIdCardIdOrders: LC.reducer,
  cardEntities: C.reducer
})