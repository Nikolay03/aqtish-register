import { useReducer, useCallback } from 'react'

import { reducer, PENDING, SUCCESS, FAIL, initialState } from './state'
import { getDataFromSuccess, getDataFromError } from './utils'

import request from '~/utils/request'

export default function useDeleteApi () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const requestCallback = useCallback((url, data) => {
    dispatch({ type: PENDING })

    return request().delete(url, data)
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
  }, [])

  return { ...state, delete: requestCallback }
}
