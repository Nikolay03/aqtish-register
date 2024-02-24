
export default {
  baseStyle: {},
  variants: {
    news: ({ theme }) => ({
      container: {
        boxShadow: theme.shadows.xl,
        bg: 'primary.50',
        px: { base: 4, lg: 20 },
        pt: 8
      }
    })
  }
}
