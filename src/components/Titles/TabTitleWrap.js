import React from 'react'
import { Flex } from '@chakra-ui/react'

export default function TabTitleWrap (props) {
  return (
    <Flex
      align={'center'}
      gridColumnGap={{ base: 4, md: 'unset' }}
      gridRowGap={{ base: 4, md: 'unset' }}
      justify={'space-between'}
      wrap={{ base: 'wrap', md: 'unset' }}
      {...props}
    />
  )
}
