import { useReducer } from 'react'

export default function useUploadReducer () {
  function reducer (state, action) {
    return { ...state, ...action }
  }

  const initialState = {
    isLoading: false,
    error: null,
    image: null,
    progress: 0
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return [state, dispatch]
}
