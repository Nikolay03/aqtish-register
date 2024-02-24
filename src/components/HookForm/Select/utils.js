import PropTypes from 'prop-types'
import { curry, find, path, prop, propEq } from 'ramda'

import request from '~/utils/request'
import { getDataFromSuccess } from '~/hooks/api/utils'

export function getOptions ({ api, search, params, pageSize = 100 }) {
  const formedParams = { pageSize, search, ...params }
  return request().get(api, formedParams)
    .then(resp => {
      const data = prop('data', resp)
      const results = prop('results', data)
      return results || data || []
    })
}

export function getOption (api) {
  return function (id) {
    const url = `${api}detail/${id}/`
    return request().get(url)
      .then(getDataFromSuccess)
  }
}

export function getStaticOptions (list) {
  return Promise.resolve(list)
}

export function getStaticOption (id, list) {
  return Promise.resolve(find(propEq('id', id))(list))
}

export const defaultGetText = curry((text, obj) => path(text, obj))

export const defaultGetValue = curry((value, obj) => path(value, obj))

export const searchFieldPropTypes = {
  api: PropTypes.string.isRequired,
  detailApi: PropTypes.string,
  params: PropTypes.object,
  itemText: PropTypes.array,
  pageSize: PropTypes.number,
  parent: PropTypes.any
}

export const searchFieldStaticPropTypes = {
  list: PropTypes.array.isRequired,
  itemText: PropTypes.array
}
