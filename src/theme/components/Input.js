import { defaultProps, sizes } from '../common/inputStyles'
import { outline, filled, search } from '../common/inputVariants'

export default {
  defaultProps,
  sizes,
  variants: {
    filled: props => ({
      field: filled(props)
    }),
    outline: props => ({
      field: outline(props)
    }),
    search: props => ({
      field: search(props)
    })
  }
}
