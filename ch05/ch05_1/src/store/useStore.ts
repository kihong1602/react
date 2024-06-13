import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer.ts'
import {useMemo} from 'react'

const initializeStore = () => {
  return configureStore({reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware()})
}

export function useStore() {
  return useMemo(() => initializeStore(), [])
}