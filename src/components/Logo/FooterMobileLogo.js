import React from 'react'
import { Stack } from '@chakra-ui/react'
import Link from 'next/link'

import ViralaxLogo from './ViralaxLogo'

import { ROOT_URL } from '~/constants/routes'

export default function FooterMobileLogo (props) {
  return (
    <Stack>
      <Link href={ROOT_URL}>
        <ViralaxLogo height={'full'} cursor={'pointer'} />
      </Link>
    </Stack>
  )
}
