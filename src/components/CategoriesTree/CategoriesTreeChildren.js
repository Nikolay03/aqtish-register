import React, { Children } from 'react'
import { Box, Center, Heading } from '@chakra-ui/react'

export default function CategoriesTreeChildren (props) {
  const { children, queryKey, boxProps } = props

  return (
    <Box
      alignSelf={'baseline'}
      w={'full'}
      {...boxProps}
    >
      <Box pl={8}>
        {children}
      </Box>
    </Box>
  )
}
