export default {
  baseStyle: {
    th: {
      letterSpacing: 'normal',
      textTransform: 'unset'
    }
  },
  sizes: {
    md: {
      th: {
        fontSize: 'md',
        py: 4,
        px: 3
      },
      td: {
        lineHeight: 'normal',
        fontSize: 'sm',
        px: 3
      }
    }
  },
  variants: {
    simple: ({ colorScheme }) => ({
      th: {
        borderColor: `${colorScheme}.200`
      },
      td: {
        borderColor: `${colorScheme}.200`
      }
    }),
    tooltip: ({ colorScheme }) => ({
      th: {
        borderColor: 'transparent'
      },
      td: {
        color: 'secondary.100',
        borderColor: 'transparent'
      }
    }),
    styled: ({ colorScheme }) => ({
      th: {
        color: 'primary.100',
        background: 'secondary.300'
      },
      tr: {
        _hover: {
          bg: 'primary.200'
        }
      },
      td: {
        borderBottom: '1px solid',
        borderColor: 'gray.200'
      }
    })
  }
}
