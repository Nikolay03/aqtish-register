import format from 'date-fns/format'
import { ru, enUS, uz, ko } from 'date-fns/locale'
import { useRouter } from 'next/router'

export const DATE_FORMATS = {
  DATE_FORMAT_DEFAULT: 'dd MMMM, yyyy',
  DATETIME_FORMAT_DEFAULT: 'dd.MM.yyyy \' | \' HH:mm',
  DATETIME_FORMAT_DEFAULT_SIMPLE: 'dd.MM.yyyy HH:mm',

  DATE_FORMAT_SHORT: 'dd.MM.yy',
  DATETIME_FORMAT_SHORT: 'dd.MM.yy \' | \' HH:mm',

  DATE_MONTH_FORMAT_SHORT: 'MM/yyyy',
  DATETIME_FORMAT_SHORT_SIMPLE: 'dd.MM.yy HH:mm',

  DATE_FORMAT_LOC: 'd MMMM, yyyy',
  DATETIME_FORMAT_LOC: 'd MMMM, yyyy \' | \' HH:mm',

  DATE_FORMAT_SERVER: 'yyyy-MM-dd',
  DATETIME_FORMAT_SERVER: 'yyyy-MM-dd HH:mm'
}

const locales = { ru, en: enUS, uz, ko }

function formatDate (dateString, locale, formatString = DATE_FORMATS.DATE_FORMAT_DEFAULT) {
  if (!dateString) return null
  return format(new Date(dateString), formatString, {
    locale: locales[locale]
  })
}

export function useDateFormat () {
  const { locale } = useRouter()

  function dateFormat (date, format) {
    return formatDate(date, locale, format)
  }

  function dateRangeFormat (fromDate, toDate) {
    if (fromDate === toDate) {
      return `<span>${formatDate(fromDate, locale)}</span>`
    }

    const fromDateFormat = formatDate(fromDate, locale, 'd MMMM')
    const toDateFormat = formatDate(toDate, locale, 'd MMMM')
    const year = formatDate(fromDate, locale, 'yyyy')

    switch (locale) {
      case 'en': return `<span>from ${fromDateFormat} to ${toDateFormat} ${year}</span>`
      case 'uz': return `<span>${fromDateFormat} dan ${toDateFormat} ${year} ga qadar</span>`
      default: return `<span>с ${fromDateFormat} по ${toDateFormat} ${year}</span>`
    }
  }

  return {
    dateFormat,
    dateRangeFormat
  }
}
