
import { prop, path } from 'ramda'
import { sprintf } from 'sprintf-js'
import { useRouter } from 'next/router'

import { capitalize } from './string'

import locales from '~/constants/locales'

function translate (key, locale) {
  return path([key, locale], locales) || path([key, 'ru'], locales)
}

export function useTranslate () {
  const { locale } = useRouter()

  function t (key, params) {
    return sprintf(translate(key, locale), params)
  }

  function translateData (obj, objName) {
    const name = objName + capitalize(locale)
    return prop(name, obj) || prop(objName, obj)
  }

  return { t, translateData }
}
