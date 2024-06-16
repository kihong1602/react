import {readStringP, writeStringP} from './logcalStorageP.ts'

export const readObjectP = <T extends object>(key: string) =>
  new Promise<T | null>((resolve, reject) => {
    readStringP(key)
    .then(value => resolve(value ? JSON.parse(value) : null))
    .catch(reject)
  })

export const writeObjectP = (key: string, value: object) => writeStringP(key, JSON.stringify(value))