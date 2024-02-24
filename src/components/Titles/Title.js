import React from 'react'
import { Heading } from '@chakra-ui/react'

export default function Title (props) {
  return (
    <Heading
      fontSize={{ base: 'lg', md: '2rem' }}
      lineHeight={'normal'}
      {...props}
    />
  )
}
