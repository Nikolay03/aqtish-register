import React from 'react'
import { Box, Stack } from '@chakra-ui/react'

export default function SectionTitleWrap (props) {
  return (
    <Box mb={{ base: 6, md: 12 }}>
      <Stack
        spacing={{ base: 2, md: 4 }}
        {...props}
      />
    </Box>
  )
}
