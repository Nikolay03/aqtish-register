import React from 'react'
import { Flex } from '@chakra-ui/react'

export default function TableActions (props) {
  const { children } = props

  return (
    <Flex align={'center'} justify={'space-between'} mb={2}>
      {children}
    </Flex>
  )
}
