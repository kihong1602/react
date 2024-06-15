import {useContext} from 'react'
import {ResponsiveContext} from '../ResponsiveContext.tsx'

export const useResponsive = () => {
  const {breakpoint} = useContext(ResponsiveContext)
  return breakpoint
}