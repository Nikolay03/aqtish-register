export default {
  defaultProps: {
    colorScheme: 'primary'
  },
  baseStyle: {
    control: {
      alignSelf: 'baseline',
      border: '1px solid',
      borderRadius: 'base',
      _focus: {
        boxShadow: null
      }
    },
    label: {
      lineHeight: '18px',
      ml: 3
    }
  },
  sizes: {
    md: {
      control: {
        h: '18px',
        w: '18px'
      }
    }
  }
}
