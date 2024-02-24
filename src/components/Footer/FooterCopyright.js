import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import CopyrightText from './CopyrightText'

import Container from '~/components/Container'
import FooterSocials from '~/components/Footer/FooterSocials'

export default function FooterCopyright () {
  return (
    <Container>
      <Box borderTop={'1px'} borderColor={'gray.200'} py={6}>
        <Flex justifyContent={'space-between'} align={'center'}>
          <CopyrightText />
          <FooterSocials />
        </Flex>
      </Box>
    </Container>
  )
}
