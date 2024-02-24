import { useRouter } from 'next/router'
import { map, prop } from 'ramda'

const monthLocales = [
  {
    ru: 'Январь',
    en: 'January',
    uz: 'Yanvar'
  },
  {
    ru: 'Февраль',
    en: 'February',
    uz: 'Fevral'
  },
  {
    ru: 'Март',
    en: 'March',
    uz: 'Mart'
  },
  {
    ru: 'Апрель',
    en: 'April',
    uz: 'Aprel'
  },
  {
    ru: 'Май',
    en: 'May',
    uz: 'Mayda'
  },
  {
    ru: 'Июнь',
    en: 'June',
    uz: 'Iyun'
  },
  {
    ru: 'Июль',
    en: 'July',
    uz: 'Iyul'
  },
  {
    ru: 'Август',
    en: 'August',
    uz: 'Avgust'
  },
  {
    ru: 'Сентябрь',
    en: 'September',
    uz: 'Sentyabr'
  },
  {
    ru: 'Октябрь',
    en: 'October',
    uz: 'Oktyabr'
  },
  {
    ru: 'Ноябрь',
    en: 'November',
    uz: 'Noyabr'
  },
  {
    ru: 'Декабрь',
    en: 'December',
    uz: 'Dekabr'
  }
]

export default function useCalendarMonths () {
  const { locale } = useRouter()

  return map(prop(locale), monthLocales)
}
