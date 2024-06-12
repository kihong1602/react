import * as util from './util.ts'

export const picsumUrl = (width: number, height: number): string => `https://picsum.photos/${width}/${height}`

export const randomImage = (
  w: number = 100,
  h: number = 800,
  delta: number = 200
): string => picsumUrl(util.random(w, w + delta), util.random(h, h + delta))

export const randomAvatar = () => {
  const size: number = util.random(200, 400)
  return picsumUrl(size, size)
}