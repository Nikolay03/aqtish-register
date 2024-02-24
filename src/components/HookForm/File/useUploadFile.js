import { path, prop } from 'ramda'

import useUploadReducer from './useUploadReducer'

import * as API from '~/constants/api'
import request from '~/utils/request'

export default function useUploadFile ({ onChange, inputRef }) {
  const [state, dispatch] = useUploadReducer()

  function onInputChange (event) {
    function onUploadProgress (progressEvent) {
      const percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
      dispatch({ progress: percentCompleted })
    }

    const eventTarget = prop('target', event)
    const file = path(['files', '0'], eventTarget)
    const formData = new FormData()

    if (!event.target.value.length) {
      return event.preventDefault()
    }

    if (file) {
      onChange(null)
      formData.append('file', file)
      dispatch({ isLoading: true })

      request().upload(API.FILE_CREATE, formData, onUploadProgress)
        .then(response => {
          // eventTarget.value = ''
          dispatch({
            name: file.name,
            isLoading: false,
            error: null,
            progress: 0
          })
          onChange(response.data)
          return response
        })
        .catch(serverError => {
          // eventTarget.value = ''
          const status = path(['response', 'status'], serverError)
          const errorData = path(['response', 'data'], serverError)

          dispatch({ isLoading: false, progress: 0 })

          switch (status) {
            case 500: return dispatch({
              error: 'Ошибка сервера'
            })
            case 413: return dispatch({
              error: 'Размер файла слишком большой'
            })
            default: return dispatch({
              error: errorData
            })
          }
        })
    }
  }

  function onClear () {
    const inputElement = inputRef.current

    onChange(null)
    inputElement.value = ''
    dispatch({ name: null })
  }

  return { state, onInputChange, onClear }
}
