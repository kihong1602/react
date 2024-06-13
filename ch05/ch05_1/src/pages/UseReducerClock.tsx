import {useReducer} from 'react'
import {AppState} from '../store/AppState.ts'
import {SetTodayAction} from '../store/actions.ts'
import {useInterval} from '../hooks/useInterval.ts'
import {Div, Subtitle, Title} from '../components'

export default function UseReducerClock() {

  const [{today}, dispatch] = useReducer((state: AppState, action: SetTodayAction) => {
    switch (action.type) {
      case 'setToday': {
        return {...state, today: new Date()}
      }
    }
  }, {today: new Date()})

  useInterval(() => {
    dispatch({type: 'setToday', today: new Date()})
  })
  return (
    <Div className={'flex flex-col items-center justify-center mt-16'}>
      <Title className={'text-5xl'}>UseReducer</Title>
      <Title className={'mt-4 text-3xl'}>{today.toLocaleTimeString()}</Title>
      <Subtitle className={'mt-4 text-2xl'}>{today.toLocaleDateString()}</Subtitle>
    </Div>
  )
}