import { toRawType, isArray, isString, camelize, isObject } from '@vue/shared'
/**
 * Generate random number in range [0, 1000]
 */
export const generateId = (): number => Math.floor(Math.random() * 10000)
export const isBool = (val: unknown) => typeof val === 'boolean'
export const isHTMLElement = (val: unknown) => toRawType(val).startsWith('HTML')

export {
  isArray,
  isString,
  camelize,
  isObject,
}
