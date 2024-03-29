import { pipe, split, map, fromPairs, toPairs, head, join, curry, compose, filter, pick, path, prop, reverse, pluck } from 'ramda'

export function searchToQuery (search) {
  const urlParams = new URLSearchParams(search)
  return Object.fromEntries(urlParams)
}

export const getPathnameFromUrl = pipe(split('?'), head)

export const parseParams = (url) => {
  const [, search] = split('?', url)
  const searchToObject = pipe(split('&'), map(split('=')), fromPairs)
  return search ? searchToObject(search) : {}
}

export const paramsToSearch = pipe(toPairs, map(join('=')), join('&'))

export const appendParamsToQuery = curry((appendParams, router) => {
  const url = router.asPath
  const params = parseParams(url)
  return router.replace({
    pathname: router.pathname,
    query: { ...router.query, ...params, ...appendParams }
  }, null, { shallow: true })
})
export const getParamsFromHistory = compose(parseParams, decodeURIComponent)

export const getInitValuesFromHistory = curry((fields, router) =>
  compose(filter(Boolean), pick(fields), parseParams, path(['asPath']))(router)
)

export const getParamFormHistory = curry((key, history) =>
  compose(prop(key), parseParams, path(['asPath']))(history)
)

export const createSlugsPath = (arr, name = 'alias') => pipe(reverse, pluck(name), join('/'))(arr)
