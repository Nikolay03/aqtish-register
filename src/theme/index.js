import { extendTheme } from '@chakra-ui/react'

import colors from './colors'
import sizes from './sizes'
import components from './components'
import styles from './styles'

const fonts = {
  body: '"Source Sans Pro", sans-serif',
  heading: '"Source Sans Pro", sans-serif'
}

const radii = {
  custom: '0.25rem'
}

export default extendTheme({
  sizes,
  colors,
  components,
  fonts,
  styles,
  radii
})
