import { mapObjIndexed, path, pipe, prop } from 'ramda'
import { useTheme } from '@chakra-ui/react'

export default function useInputSizes () {
  const { components } = useTheme()

  return pipe(
    path(['Input', 'sizes']),
    mapObjIndexed(prop('field'))
  )(components)
}
