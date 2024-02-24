import React from 'react'
import { path, prop } from 'ramda'
import { Link, SkeletonCircle, Stack, Circle } from '@chakra-ui/react'
import { Facebook } from 'react-feather'

import { useList } from '~/hooks/crud'
import * as API from '~/constants/api'

export default function Socials ({ withBg, ...props }) {
  if (false) {
    return (
      <Stack direction={'row'} spacing={4}>
        <SkeletonCircle size={6} />
        <SkeletonCircle size={6} />
        <SkeletonCircle size={6} />
      </Stack>
    )
  }

  return (
    <Stack direction={'row'} spacing={4} {...props}>

      <Circle bg={withBg && 'secondary.300'} p={2}>
        <Link isExternal={true}>
          <Facebook />
        </Link>
      </Circle>
    </Stack>
  )
}
