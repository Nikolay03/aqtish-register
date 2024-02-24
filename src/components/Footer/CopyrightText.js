import React from 'react'
import { Text } from '@chakra-ui/react'

export default function CopyrightText (props) {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <Text align={'center'} fontSize={'md'} {...props}>
      © {currentYear} All rights reserved.
    </Text>
  )
}
