import type * as T from './types'

export const setClock = (payload: T.State) => ({type: '@clock/setClock', payload})