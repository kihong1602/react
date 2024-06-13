import {AppState} from './AppState.ts'
import {Actions} from './actions.ts'

const initialAppState = {
  today: new Date()
}

export const rootReducer = (state: AppState = initialAppState, action: Actions) => {
  switch (action.type) {
    case 'setToday': {
      return {...state, today: action.today}
    }
  }
  return state
}
