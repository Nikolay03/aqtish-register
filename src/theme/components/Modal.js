export default {
  baseStyle: {
    dialog: {
      borderRadius: 'custom',
      mx: 4,
      my: { base: 24, md: 16 }
    },
    closeButton: {
      borderColor: 'currentColor',
      borderRadius: 'full',
      borderWidth: 2,
      color: 'palette.gray',
      h: 9,
      w: 9,
      top: 8,
      right: 8,
      _focus: { boxShadow: 'none' }
    },
    header: {
      color: 'palette.darkGreen',
      fontSize: { base: 'lg', md: 'xl' },
      pt: { base: 6, md: 9 },
      px: { base: 6, md: 10, lg: 16 },
      pb: 6
    },
    body: {
      pt: { base: 2, md: 6 },
      px: { base: 6, md: 9 },
      pb: { base: 6, md: 10 }
    },
    overlay: {
      backdropFilter: 'blur(2px)'
    }
  }
}
