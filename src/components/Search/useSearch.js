import { useRef } from 'react'

export default function useSearch (onSearch) {
  const ref = useRef()

  function onKeyPress (event) {
    if (event.key === 'Enter' && typeof onSearch === 'function') {
      const target = event.target
      onSearch(target.value)
    }
  }

  function onClear () {
    ref.current.value = ''
    if (typeof onSearch === 'function') {
      onSearch('')
    }
  }

  return {
    ref,
    onKeyPress,
    onClear
  }
}
