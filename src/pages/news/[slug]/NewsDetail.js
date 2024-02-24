import React from 'react'
import { path, prop } from 'ramda'
import { Box, Card, Container, HStack, Link, Stack, Text } from '@chakra-ui/react'
import { Star } from 'react-feather'

import SectionTitle from '../../../components/Titles/SectionTitle'

import { NEWS_URL, ROOT_URL } from '~/constants/routes'
import { useTranslate } from '~/utils/translate'
import PageWrapper from '~/components/PageWrapper'
import { PageLayout } from '~/components/Layouts'
import {
  Breadcrumb,
  BreadcrumbCurrent,
  BreadcrumbItem,
  BreadcrumbLink
} from '~/components/Breadcumb'
import { DetailImage } from '~/components/Images'
import { SubTitle } from '~/components/Titles'
import { DATE_FORMATS, useDateFormat } from '~/utils/date'
import Clock from '~/icons/Clock'
import Eye from '~/icons/Eye'
import RegistrationBlock from '~/components/RegistrationBlock/RegistrationBlock'

export default function NewsDetail (props) {
  const { data } = props
  const { t, translateData } = useTranslate()
  const { dateFormat } = useDateFormat()

  const title = translateData(data, 'title')
  const image = path(['image', 'file'], data)
  const description = translateData(data, 'description')
  const sourceUrl = prop('url', data) || 'http://localhost:3000/news/1'
  const createdDate = prop('date', data)

  const Stats = (
    <HStack spacing={'20px'}>
      <HStack spacing={'9px'}>
        <Clock fill={'#D3E8FF'} />
        <Text color={'secondary.50'}>
          7 мин
        </Text>
      </HStack>
      <HStack spacing={'9px'}>
        <Eye color={'#D3E8FF'} />
        <Text color={'secondary.50'}>
          4.51
        </Text>
      </HStack>
      <HStack spacing={'9px'}>
        <Star size={22} color={'#D3E8FF'} />
        <Text color={'secondary.50'}>
          4.51
        </Text>
      </HStack>
    </HStack>
  )

  return (
    <PageWrapper title={title}>
      <PageLayout>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href={ROOT_URL}>
              {t('home_page_title')}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href={NEWS_URL}>
              {t('news_page_title')}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbCurrent>
              {title}
            </BreadcrumbCurrent>
          </BreadcrumbItem>
        </Breadcrumb>
        <Container maxW={'container.lg'}>
          <Card variant={'news'}>
            <HStack justify={'space-between'} mb={7}>
              <HStack spacing={'10px'}>
                <Text color={'secondary.50'}>
                  {dateFormat(createdDate, DATE_FORMATS.DATE_FORMAT_DEFAULT)}
                </Text>
              </HStack>
              <Box display={{ base: 'none', lg: 'block' }}>
                {Stats}
              </Box>
            </HStack>
            <DetailImage alt={title} height={'350px'} src={image} />
            <Box display={{ base: 'block', lg: 'none' }} mb={6}>
              {Stats}
            </Box>
            <SectionTitle as={'h1'} mb={{ base: 8, lg: 12 }}>{title}</SectionTitle>
            <Stack>
              <Text whiteSpace={'pre-line'}>{description}</Text>
              {sourceUrl && (
                <Link
                  alignSelf={'baseline'}
                  colorScheme={'primary'}
                  isExternal={true}
                  href={sourceUrl}>
                  {t('news_source_label')}
                </Link>
              )}
            </Stack>
            <RegistrationBlock />
          </Card>
        </Container>
      </PageLayout>
    </PageWrapper>
  )
}
