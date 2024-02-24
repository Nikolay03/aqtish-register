import React from 'react'
import { path, prop } from 'ramda'
import { sprintf } from 'sprintf-js'
import { Box, Text, Heading, Link as ChakraLink, Stack, useToken, HStack, SimpleGrid, VStack, Grid } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { NEWS_URL, SHOP_DETAIL_URL } from '~/constants/routes'
import { useDateFormat, DATE_FORMATS } from '~/utils/date'
import Link from '~/components/Link'
import { Image } from '~/components/Images'
import { useTranslate } from '~/utils/translate'
import { Paragraph } from '~/components/Chakra'
import CountryFlag from '~/Containers/Countries/CountryFlag'

function extractDomainFromURL (url) {
  if (!url) return ''

  const { hostname } = new URL(url)
  return hostname
}

const Phone = styled.a`
        color: blueviolet
`

export default function ShopsCard (props) {
  const { data } = props

  const { translateData } = useTranslate()

  const id = prop('id', data)
  const image = path(['logo', 'file'], data)
  const countries = prop('countries', data) || []
  const title = translateData(data, 'name')
  const info = path(['infos', '0'], data)
  const shortDescription = translateData(info, 'description')
  const detailUrl = sprintf(SHOP_DETAIL_URL, id)

  return (
    <Link href={detailUrl}>
      <Grid bg={'primary.50'} gap={14} templateColumns={{ base: '20% 40% 40%' }} borderRadius={'3xl'} p={12} pos={'relative'}>
        <Image
          alt={title}
          src={'/assets/logo.png'}
          objectFit={'contain'}
          h={'100px'}
          mb={4}
        />
        <Stack spacing={'10px'}>
          <Text color={'palette.darkGreen'} fontSize={'md'} fontWeight={700} textTransform={'uppercase'}>
            Клиника неврологии и ортопедии ЗдравКлиник на Беговой
          </Text>
          <Paragraph noOfLines={7} mb={4}>
            Многопрофильная клиника на станции метро "Беговая" осуществляет деятельность под руководством д.
          </Paragraph>
        </Stack>
        <Stack spacing={'10px'}>
          <Paragraph color={'gray.500'} noOfLines={7} mb={4}>
            г. Москва, ул. Хорошёвское ш., д. 62
          </Paragraph>
          <Grid templateColumns={{ base: '60px 1fr' }}>
            <Text fontSize={'sm'}>пн-пт</Text>
            <Text fontSize={'sm'}> 0:00 - 24:00</Text>

            <Text fontSize={'sm'}>вт</Text>
            <Text fontSize={'sm'}> 0:00 - 24:00</Text>
          </Grid>
          <Phone href={''}>+998 90 345 68 90</Phone>
        </Stack>
      </Grid >
    </Link>
  )
}
