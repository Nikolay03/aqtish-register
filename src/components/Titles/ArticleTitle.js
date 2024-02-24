import React from 'react'
import { Heading } from '@chakra-ui/react'

export default function ArticleTitle (props) {
  return (
    <Heading
      as={'h2'}
      color={'secondary.300'}
      fontWeight={700}
      fontSize={'2xl'}
      {...props}
    />
  )
}
