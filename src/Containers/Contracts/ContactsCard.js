import React from 'react'
import { Stack, Highlight, Text } from '@chakra-ui/react'
import { prop } from 'ramda'

import { AsideTitle } from '~/components/Titles'
import { useTranslate } from '~/utils/translate'

const ContactsCard = ({ data }) => {
  const { translateData } = useTranslate()
  const country = prop('country', data)
  const number = `Телефон: ${prop('number', data)}`
  const name = translateData(country, 'name')
  return (
    <Stack spacing={3}>
      <AsideTitle as={'h2'} color={'secondary.300'}>
        {name}
      </AsideTitle>
      <Text color={'secondary.200'}>
        <Highlight query={'Телефон:'} styles={{ fontWeight: 600, color: 'secondary.100' }}>
          {number}
        </Highlight>
      </Text>
    </Stack>
  )
}

export default ContactsCard
