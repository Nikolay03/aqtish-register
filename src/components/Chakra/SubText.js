import React from 'react'
import { Text } from '@chakra-ui/react'

export default function SubText (props) {
  return (
    <Text
      color={'secondary.200'}
      fontSize={'sm'}
      whiteSpace={'pre-line'}
      {...props}
    />
  )
}
