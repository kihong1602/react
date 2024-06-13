import * as Counter from './counter'
import * as R from './remoteUser'
import * as Cards from './cards'
import * as Clock from './clock'

export type AppState = {
  clock: Clock.State
  counter: Counter.State
  remoteUser: R.State
  cards: Cards.State
}