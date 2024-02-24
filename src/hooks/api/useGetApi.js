import { useReducer, useCallback } from 'react'
import { useRouter } from 'next/router'

import { initialState, reducer, FAIL, SUCCESS, PENDING } from './state'
import { getDataFromSuccess, getDataFromError } from './utils'

import request from '~/utils/request'

export default function useGetApi (url) {
  const { locale } = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState)

  const requestCallback = useCallback(params => {
    dispatch({ type: PENDING })

    return request().get(url, { ...params, language: locale })
      .then(response => {
        const data = getDataFromSuccess(response)
        dispatch({ type: SUCCESS, payload: data })

        return data
      })
      .catch(response => {
        const error = getDataFromError(response)
        dispatch({ type: FAIL, payload: error })

        return Promise.reject(error)
      })
  }, [request, url, locale])

  return { ...state, get: requestCallback }
}
