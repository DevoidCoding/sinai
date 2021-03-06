export interface Class<R> {
  new (...args: any[]): R
}

export interface Dictionary<T> {
  [key: string]: T
}

export type CHD<K extends string, T> = {
  [_ in K]: T
}

export function assert (condition: any, message: string): void {
  if (!condition) {
    throw new Error('[sinai] ' + message)
  }
}

export function identity<T> (value: T): T {
  return value
}

export function forEachValues<T> (
  t: Dictionary<T>,
  fn: (t: T, key: string) => void
): void {
  Object.keys(t).forEach(key => {
    fn(t[key], key)
  })
}

export function getByPath<T> (path: string[], obj: any): T {
  return path.reduce((acc, key) => acc[key], obj)
}

export function bind<T extends Function> (obj: any, fn: T): T {
  return function boundFn () {
    return fn.apply(obj, arguments)
  } as any
}

export function isPromise (p: any): p is Promise<any> {
  return p != null && typeof p.then === 'function'
}
