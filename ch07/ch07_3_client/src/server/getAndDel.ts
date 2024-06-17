export const get = (path: string) => fetch(path)
export const del = (path: string) => fetch(path, {method: 'DELETE'})