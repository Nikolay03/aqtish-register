import { always, ifElse, isNil, mapObjIndexed } from 'ramda'

export function replaceNilValues (object) {
  return mapObjIndexed((ifElse(
    isNil,
    always(''),
    value => value
  )), object)
}
