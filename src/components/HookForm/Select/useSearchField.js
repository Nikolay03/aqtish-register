import { find, prop, propEq } from 'ramda'

import request from '~/utils/request'
import { getDataFromSuccess } from '~/hooks/api/utils'

export function useSearchField ({ api, params, pageSize }) {
  function getOptions (search) {
    const formedParams = { pageSize, search, ...params }
    return request().get(api, formedParams)
      .then(resp => {
        const data = prop('data', resp)
        const results = prop('results', data)
        return results || data || []
      })
  }

  function getOption (id) {
    const url = `${api}detail/${id}/`
    return request().get(url)
      .then(getDataFromSuccess)
  }

  return {
    getOptions,
    getOption
  }
}

export function useStaticSearchField ({ list }) {
  function getStaticOptions () {
    return Promise.resolve(list)
  }

  function getStaticOption (id) {
    return Promise.resolve(find(propEq('id', id))(list))
  }

  function filterOption (option, input) {
    const words = input.split(' ')
    function reducer (acc, cur) {
      const label = prop('label', option)
      return (acc && label) && label.toLowerCase().includes(cur.toLowerCase())
    }
    return words.reduce(reducer, true)
  }

  return {
    getStaticOptions,
    getStaticOption,
    filterOption
  }
}
