import { useState, useEffect } from 'react'

import debounce from '~/utils/debounce'

export default function useDimensions (ref) {
  const defaultDimensions = { width: 0, height: 0 }

  const [dimensions, setDimensions] = useState(defaultDimensions)

  function updateDimensions (element) {
    if (element) {
      setDimensions(prevDimensions => ({
        ...prevDimensions,
        height: element.offsetHeight,
        width: element.offsetWidth
      }))
    }
  }

  useEffect(() => {
    const element = ref.current
    updateDimensions(element)

    const debouncedResize = debounce(function onResize () {
      updateDimensions(element)
    }, 300)

    window.addEventListener('resize', debouncedResize)
    return () => window.removeEventListener('resize', debouncedResize)
  }, [])

  return dimensions
}
