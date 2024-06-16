export const swapItemsInArray = <T>(array: T[], index1: number, index2: number) =>
  array.map((item, index) => index == index1 ? array[index2] : index === index2 ? array[index1] : item)

export const removeItemAtIndexInArray = <T>(array: T[], removeIndex: number) => array.filter((_, index) => index !== removeIndex)

export const insertItemAtIndexInArray = <T>(array: T[], insertIndex: number, item: T) => {
  const before = array.filter((_, index) => index < insertIndex)
  const after = array.filter((_, index) => index >= insertIndex)
  return [...before, item, ...after]
}
