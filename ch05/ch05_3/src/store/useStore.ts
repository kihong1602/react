import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer.ts'
import {useMemo} from 'react'
import {logger} from 'redux-logger'
import {thunk} from 'redux-thunk'

const useLogger = process.env.NODE_ENV !== 'production'

const initializeStore = () => {
  const middleware: any[] = [thunk]
  if (useLogger) {
    middleware.push(logger)
  }
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
  })
}

export function useStore() {
  return useMemo(() => initializeStore(), [])
}
