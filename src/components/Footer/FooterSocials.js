import React from 'react'
import { Box, useToken } from '@chakra-ui/react'

import Socials from '~/components/Socials'
import { useList } from '~/hooks/crud'
import * as API from '~/constants/api'

export default function FooterSocials (props) {
  const secondary300 = useToken('colors', 'primary.50')
  return (
    <Box sx={{
      '& svg': {
        color: secondary300
      }
    }}>
      <Socials withBg={true} />
    </Box>
  )
}
