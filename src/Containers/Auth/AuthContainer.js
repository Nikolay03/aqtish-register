import React from 'react'
import { Box } from '@chakra-ui/react'

export default function AuthContainer (props) {
  return (
    <Box
      mx={'auto'}
      maxW={{ base: 'container.sm', md: '825px' }}
      pb={{ base: 0, sm: 12 }}
      w={'full'}
      {...props}
    />
  )
}
