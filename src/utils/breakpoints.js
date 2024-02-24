import { pipe, replace } from 'ramda'

export function emToPixel (value) {
  if (!value) return 0
  const numberValue = pipe(replace('em', ''), Number)(value)
  return numberValue * 16
}
