import {AppState} from './AppState.ts'
import {Action} from 'redux'

export const rootReducer = (state: AppState, action: Action) => state
// import {combineReducers} from 'redux'
// import const rootReducer = combineReducers({})