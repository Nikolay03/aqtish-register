import React from 'react'
import { Heading } from '@chakra-ui/react'

export default function PageHeading (props) {
  return (
    <Heading
      as={'h1'}
      fontSize={{ base: 'xl', md: '4xl' }}
      lineHeight={'normal'}
      {...props}
    />
  )
}
