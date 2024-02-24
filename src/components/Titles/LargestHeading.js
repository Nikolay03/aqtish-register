import React from 'react'
import { Heading } from '@chakra-ui/react'

export default function LargestHeading (props) {
  return (
    <Heading
      as={'h1'}
      fontSize={{ base: '5xl', md: '6xl', xl: '90px' }}
      lineHeight={'none'}
      {...props}
    />
  )
}
