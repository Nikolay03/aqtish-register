import hexToRgba from '~/utils/hexToRgba'

export const outline = ({ colorScheme, theme }) => ({
  bg: 'primary.50',
  borderColor: 'primary.100',
  borderWidth: 1,
  color: 'secondary.100',
  _hover: {
    borderColor: hexToRgba(theme.colors.palette.gray, 0.5)
  },
  _focus: {
    bg: 'primary.50',
    borderColor: 'primary.100'
  },
  _placeholder: {
    color: 'secondary.100',
    opacity: 0.6
  }
})

export const search = ({ colorScheme, theme }) => ({
  bg: 'primary.50',
  borderColor: hexToRgba(theme.colors.palette.gray, 0.5),
  borderWidth: 1,
  borderRadius: '25px',
  color: 'secondary.100',
  _hover: {
    borderColor: hexToRgba(theme.colors.palette.gray, 0.5)
  },
  _focus: {
    bg: 'primary.50',
    borderColor: 'primary.500'
  },
  _placeholder: {
    color: 'secondary.100',
    opacity: 0.6
  }
})

export const filled = ({ colorScheme, theme }) => ({
  bg: 'gray.100',
  _hover: {
    borderColor: hexToRgba(theme.colors.palette.gray, 0.5),
    bg: hexToRgba(theme.colors.gray['100'], '0.75')
  },
  _focus: {
    bg: hexToRgba(theme.colors.gray['100'], '0.75'),
    borderColor: 'primary.100'
  },
  _placeholder: {
    color: 'secondary.100',
    opacity: 0.6
  }
})
