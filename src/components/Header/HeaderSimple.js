import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'

import { ROOT_URL } from '~/constants/routes'
import Container from '~/components/Container'
import { HeaderLogo } from '~/components/Logo'
import Languages from '~/components/Languages/Languages'

export default function HeaderSimple () {
  return (
    <Box as={'header'} bgColor={'transparent'}>
      <Container>
        <Flex align={'center'} justify={'space-between'} h={{ base: '60px', md: 20 }}>
          <Link href={ROOT_URL}>
            <HeaderLogo />
          </Link>
          <Languages />
        </Flex>
      </Container>
    </Box>
  )
}
