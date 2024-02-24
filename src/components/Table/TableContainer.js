import React from 'react'
import { Box } from '@chakra-ui/react'

export default function TableContainer (props) {
  const { children, ...restProps } = props

  return (
    <Box
      bgColor={'gray.100'}
      borderRadius={{ base: 'lg', md: '2xl' }}
      py={{ base: 6, md: 8 }}
      px={{ base: 4, md: 8 }}
      {...restProps}>
      {children}
    </Box>
  )
}
