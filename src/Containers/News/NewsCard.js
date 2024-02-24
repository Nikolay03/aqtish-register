import React from 'react'
import { path, prop } from 'ramda'
import { ArrowUpRight } from 'react-feather'
import { Box, Text, Heading, Link as ChakraLink, Stack, useToken, HStack } from '@chakra-ui/react'

import { NEWS_URL } from '~/constants/routes'
import { useDateFormat, DATE_FORMATS } from '~/utils/date'
import Link from '~/components/Link'
import { Image } from '~/components/Images'
import { useTranslate } from '~/utils/translate'
import { Paragraph } from '~/components/Chakra'
import News from '~/icons/News'
import Clock from '~/icons/Clock'

function extractDomainFromURL (url) {
  if (!url) return ''

  const { hostname } = new URL(url)
  return hostname
}

export default function NewsCard (props) {
  const { data } = props

  const { dateFormat } = useDateFormat()

  const { translateData } = useTranslate()

  const id = prop('id', data)
  const image = path(['image', 'file'], data)
  const createdDate = prop('date', data)
  const title = translateData(data, 'title')
  const shortDescription = translateData(data, 'description')
  const detailUrl = `${NEWS_URL}/${id}`

  return (
    <Box>
      <Link href={detailUrl}>
        <Image
          alt={title}
          src={image}
          h={'324px'}
          mb={4}
        />
      </Link>

      <Stack justify={'space-between'} direction={'row'} mb={5}>
        <HStack spacing={'10px'}>
          <News fill={'#D3E8FF'} />
          <Text color={'secondary.50'}>
            Новости компании
          </Text>
        </HStack>
        <HStack spacing={'10px'}>
          <Clock fill={'#D3E8FF'} />
          <Text color={'secondary.50'}>
            {dateFormat(createdDate, DATE_FORMATS.DATE_FORMAT_DEFAULT)}
          </Text>
        </HStack>
      </Stack>

      <Heading
        as={Link}
        href={detailUrl}
        fontSize={'2xl'}
        mb={3}
        title={title}
        color={'primary.500'}
        transition={'all 200ms'}
        noOfLines={2}
      >
        {title}
      </Heading>

      <Paragraph color={'gray.500'} noOfLines={4}>
        {shortDescription}
      </Paragraph>

      {detailUrl && (
        <ChakraLink
          href={detailUrl}
          color={'primary.500'}
          display={'inline-flex'}
          alignItems={'center'}
          isExternal={true}
          mt={6}>
          <Box as={'span'} mr={1}>
            Читать больше
          </Box>
          <ArrowUpRight size={16} />
        </ChakraLink>
      )}
    </Box>
  )
}
