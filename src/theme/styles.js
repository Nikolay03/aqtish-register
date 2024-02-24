export default {
  global: () => ({
    body: {
      bg: 'primary.50',
      color: 'secondary.100',
      fontFamily: 'body',
      fontSize: 'md',
      lineHeight: 'base'
    },
    '*::placeholder': {
      color: 'primary.200'
    }
  })
}
