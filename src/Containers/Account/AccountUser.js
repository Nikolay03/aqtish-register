import React from 'react'
import { prop } from 'ramda'
import { Box, Stack, Text } from '@chakra-ui/react'

import { useAuth } from '~/providers/AuthProvider'
import { phoneNumberParse } from '~/utils/fieldParsers'

export default function AccountUser () {
  const { user } = useAuth()

  const firstName = prop('firstName', user)
  const lastName = prop('lastName', user)
  const phoneNumber = phoneNumberParse(prop('phoneNumber', user))
  const username = prop('username', user)
  const fullName = `${firstName} ${lastName}`

  return (
    <Stack px={5} spacing={1}>
      <Text fontSize={'lg'} fontWeight={'bold'}>{fullName}</Text>

      <Box>
        <Text fontSize={'md'}>{username}</Text>
        <Text fontSize={'md'}>{phoneNumber}</Text>
      </Box>
    </Stack>
  )
}
