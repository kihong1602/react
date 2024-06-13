import {useEffect, useState} from 'react'
import {useEventListener} from './useEventListener.ts'

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0])

  useEffect(() => {
    setWidthHeight(_ => [window.innerWidth, window.innerHeight])
  }, []) // 컴포넌트가 마운트될 때 창 크기 설정

  useEventListener(window, 'resize', () => {
    setWidthHeight(_ => [window.innerWidth, window.innerHeight])
  }) // 창 크기 변경될 때마다 설정

  return widthHeight
}