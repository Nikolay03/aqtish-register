import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'

import { ROOT_URL } from '~/constants/routes'

export default function FooterLogo (props) {
  return (
    <Flex justifyContent={'start'}>
      <Link href={ROOT_URL}>
        <Box
          cursor={'pointer'}
          w={'215px'}
          h={'30px'}
          as={'img'}
          src={'/assets/logo.png'}
          alt={'An SVG of an eye'}
        />
      </Link>
    </Flex>
  )
}
