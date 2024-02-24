import hexToRgba from '~/utils/hexToRgba'

export default {
  defaultProps: {
    colorScheme: 'primary'
  },
  baseStyle: {
    borderRadius: 'md',
    _focus: {
      boxShadow: 'none'
    }
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      h: '40px',
      minW: 'auto',
      px: 3
    },
    md: {
      h: '48px',
      px: 6
    },
    lg: {
      fontSize: 'lg',
      h: '60px',
      px: 7
    }
  },
  variants: {
    gray: ({ theme }) => ({
      bg: 'palette.lightGray',
      color: 'palette.gray',
      _hover: { bg: hexToRgba(theme.colors.palette.gray, '0.25') },
      _active: { bg: hexToRgba(theme.colors.palette.gray, '0.4') }
    }),
    language: () => ({
      bg: 'transparent',
      borderColor: 'white',
      borderRadius: 'lg',
      borderWidth: 1,
      color: 'white',
      height: '44px',
      _hover: { bg: 'blackAlpha.200' },
      _active: { bg: 'blackAlpha.300' }
    }),
    outline: ({ colorScheme }) => ({
      bg: 'primary.300',
      // borderColor: `${colorScheme}.500`,
      color: 'white',
      _hover: {
        bg: 'primary.500'
        // borderColor: `${colorScheme}.600`
      },
      _active: {
        bg: 'primary.500'
        // borderColor: `${colorScheme}.700`
      }
    }),
    pagination: ({ colorScheme, isActive }) => ({
      border: '1px solid',
      borderColor: isActive ? 'transparent' : 'gray.100',
      bg: isActive ? `${colorScheme}.100` : 'white',
      pointerEvents: isActive ? 'none' : 'all',
      _hover: {
        bg: `${colorScheme}.50`,
        borderColor: `${colorScheme}.300`
      },
      _active: {
        bg: `${colorScheme}.100`
      }
    })
  }
}
