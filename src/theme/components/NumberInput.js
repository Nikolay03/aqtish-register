import { defaultProps, sizes } from '../common/inputStyles'
import { filled, outline } from '../common/inputVariants'

export default {
  defaultProps,
  sizes,
  variants: {
    filled: props => ({
      field: filled(props)
    }),
    outline: props => ({
      field: outline(props)
    })
  }
}
