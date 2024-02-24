/* eslint-disable max-len */
import { replace, length } from 'ramda'

export function withoutSpaceParse (value) {
  if (!value) return ''
  return replace(/ /g, '', value)
}

export function phoneNumberParse (value) {
  if (!value) return ''

  const withoutSpaces = withoutSpaceParse(value)
  const onlyNumsAndSymbol = replace(/[^\d\W]/g, '', withoutSpaces)

  const uzCode = onlyNumsAndSymbol.slice(0, 4)
  const operatorCode = onlyNumsAndSymbol.slice(4, 6)

  if (length(onlyNumsAndSymbol) <= 4) {
    return `${uzCode} `
  }
  else if (length(onlyNumsAndSymbol) <= 6) {
    return `${uzCode} ${operatorCode}`
  }
  else if (length(onlyNumsAndSymbol) <= 9) {
    return `${uzCode} ${operatorCode} ${onlyNumsAndSymbol.slice(6, 9)}`
  }
  else if (length(onlyNumsAndSymbol) <= 11) {
    return `${uzCode} ${operatorCode} ${onlyNumsAndSymbol.slice(6, 9)} ${onlyNumsAndSymbol.slice(9, 11)}`
  }
  else if (length(onlyNumsAndSymbol) <= 13 || length(onlyNumsAndSymbol) > 13) {
    return `${uzCode} ${operatorCode} ${onlyNumsAndSymbol.slice(6, 9)} ${onlyNumsAndSymbol.slice(9, 11)} ${onlyNumsAndSymbol.slice(11, 13)}`
  }
}
