import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer.ts'
import {useMemo} from 'react'
import logger from 'redux-logger'

const initializeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
  })
}

export function useStore() {
  return useMemo(() => initializeStore(), [])
}