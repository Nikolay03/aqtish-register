import React from 'react'
import { Container as ChakraContainer } from '@chakra-ui/react'

export default function Container (props) {
  return (
    <ChakraContainer
      maxW={'container.xl'}
      mx={'auto'}
      px={{ base: 4, xl: 8 }}
      w={'full'}
      {...props}
    />
  )
}
