import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import LayoutContent from './LayoutContent'

import { HeaderSimple } from '~/components/Header'
import FooterCopyright from '~/components/Footer/FooterCopyright'

export default function SimpleLayout ({ children }) {
  return (
    <Flex
      bgColor={'gray.100'}
      direction={'column'}
      justify={'space-between'}
      minH={'100vh'}>
      <HeaderSimple />

      <Box
        as={'main'}
        py={8}
        px={{ base: 4, md: 8 }}>
        <LayoutContent>
          {children}
        </LayoutContent>
      </Box>

      <FooterCopyright />
    </Flex>
  )
}
