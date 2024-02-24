import React from 'react'
import { Heading } from '@chakra-ui/react'

export default function AsideTitle (props) {
  return (
    <Heading
      as={'h3'}
      color={'secondary.100'}
      fontSize={{ base: 'md', md: '3xl' }}
      {...props}
    />
  )
}
