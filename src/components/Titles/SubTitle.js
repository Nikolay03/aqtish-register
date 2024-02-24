import React from 'react'
import { Heading } from '@chakra-ui/react'

export default function SubTitle (props) {
  return (
    <Heading fontSize={{ base: 'xl' }} lineHeight={'none'} mb={4} {...props} />
  )
}
