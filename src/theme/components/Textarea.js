import { outline, filled } from '../common/inputVariants'

export default {
  defaultProps: {
    colorScheme: 'primary',
    errorBorderColor: 'palette.red',
    focusBorderColor: 'primary.500',
    variant: 'outline'
  },
  sizes: {
    md: {
      borderRadius: 'xl',
      fontWeight: 'inherit',
      minH: 32,
      px: 6,
      py: 4
    }
  },
  variants: {
    filled,
    outline
  }
}
