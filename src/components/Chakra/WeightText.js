import React from 'react'
import { Text } from '@chakra-ui/react'

const WeightText = (props) => {
  return (
    <Text
      fontWeight={600}
      as={'span'}
      {...props}
    />
  )
}

export default WeightText
