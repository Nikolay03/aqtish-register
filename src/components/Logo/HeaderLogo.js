import React from 'react'
import { Stack } from '@chakra-ui/react'
import Link from 'next/link'

import { ROOT_URL } from '~/constants/routes'
import { Image } from '~/components/Images'

export default function HeaderLogo () {
  return (
    <Stack alignItems={'center'} direction={'row'} whiteSpace={'nowrap'}>
      <Link href={ROOT_URL}>
        <Image
          w={'70px'}
          objectFit={'contain'}
          h={'44px'}
          alt={'An SVG of an eye'}
          src={'/assets/logo.png'}
          cursor={'pointer'}
        />
      </Link>
    </Stack>
  )
}
