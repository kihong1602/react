import * as L from './listEntities'
import * as LO from './listIdOrders'
import * as LC from './listIdCardIdOrders'
import * as C from './cardEntities'

export type AppState = {
  listEntities: L.State
  listIdOrders: LO.State
  listIdCardIdOrders: LC.State
  cardEntities: C.State
}