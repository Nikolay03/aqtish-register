import React from 'react'
import { Flex } from '@chakra-ui/react'

export default function AccountContainer (props) {
  return (
    <Flex
      direction={'column'}
      justify={'space-between'}
      h={'full'}
      {...props}
    />
  )
}
