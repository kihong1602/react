import {useContext} from 'react'
import {ResponsiveContext} from '../contexts/ResponsiveContext.tsx'

export const useResponsive = () => {
  const {breakpoint} = useContext(ResponsiveContext)
  return breakpoint
}