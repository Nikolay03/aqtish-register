import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'

import MobileNavigation from './MobileNavigation'

import * as ROUTES from '~/constants/routes'
import Container from '~/components/Container'
import { HeaderLogo } from '~/components/Logo'
import Navigation from '~/components/Header/NavBar/Navigation'

export default function NavBar () {
  return (
    <Box
      pt={{ base: '11px', lg: '28px' }}
    >
      <Container>
        <Box
          pb={{ base: '11px', lg: '28px' }}
        >
          <Flex align={'center'} justify={'space-between'}>
            <Link href={ROUTES.ROOT_URL}>
              <HeaderLogo />
            </Link>
            <Navigation />
            <MobileNavigation />
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
