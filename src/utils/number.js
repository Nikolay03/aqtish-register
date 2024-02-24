export function toNumber (value) {
  const parsedStr = Number(value)
  return isNaN(parsedStr) ? 0 : parsedStr
}

export function numberFormat (value, suffix, options) {
  const formatter = new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 2,
    ...options
  })

  const number = toNumber(value)

  if (number && suffix) return `${formatter.format(number)} ${suffix}`

  if (number) return formatter.format(number)

  return suffix ? `0 ${suffix}` : '0'
}
