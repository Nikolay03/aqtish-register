import React from 'react'
import { Text } from '@chakra-ui/react'

export default function Paragraph (props) {
  return (
    <Text
      color={'secondary.100'}
      whiteSpace={'pre-line'}
      {...props}
    />
  )
}
