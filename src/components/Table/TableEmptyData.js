import React from 'react'
import { Center, Container } from '@chakra-ui/react'

import { useTranslate } from '~/utils/translate'

export default function TableEmptyData (props) {
  const { children } = props

  const { t } = useTranslate()

  return (
    <Center px={6} py={6} textAlign={'center'} w={'full'}>
      <Container maxW={'container.sm'}>
        {children || t('table_no_data')}
      </Container>
    </Center>
  )
}
