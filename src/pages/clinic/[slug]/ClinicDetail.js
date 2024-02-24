import React from 'react'
import { path, prop } from 'ramda'
import {
  Box,
  Button,
  Card,
  Center,
  Grid,
  GridItem,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import styled from '@emotion/styled'

import PageHeading from '../../../components/Titles/PageHeading'
import MiniImage from '../../../components/Images/MiniImage'
import ShopsCard from '../../../Containers/Shops/ShopsCard'
import DoctorsGrid from '../../../Containers/Doctors/DoctorsGrid'
import DoctorsCard from '../../../Containers/Doctors/DoctorsCard'

import { ROOT_URL, SHOP_URL } from '~/constants/routes'
import { useTranslate } from '~/utils/translate'
import PageWrapper from '~/components/PageWrapper'
import { HomeLayout, PageLayout } from '~/components/Layouts'
import {
  Breadcrumb,
  BreadcrumbCurrent,
  BreadcrumbItem,
  BreadcrumbLink
} from '~/components/Breadcumb'
import { Image } from '~/components/Images'
import { useDateFormat } from '~/utils/date'
import Container from '~/components/Container'
import { HookForm, SelectFieldStatic } from '~/components/HookForm'
import { ArticleTitle, SubTitle } from '~/components/Titles'
import { Paragraph } from '~/components/Chakra'
import HomeSection from '~/Containers/Home/HomeSection'
import { ShopsGrid } from '~/Containers/Shops'
import Pagination from '~/components/Pagination'

const Phone = styled.a`
        color: blueviolet
`

export default function ClinicDetail (props) {
  const { data } = props
  const { t, translateData } = useTranslate()
  const name = translateData(data, 'name')
  const image = path(['image', 'file'], data)
  const description = translateData(data, 'description')
  const countries = prop('countries', data) || []
  const infos = prop('infos', data) || []

  return (
    <PageWrapper title={name}>
      <HomeLayout withContacts={false}>
        <Container>
          <Grid w={'100%'} templateColumns={{ base: '1fr 1fr' }} mb={14} mt={16} gap={7}>
            <Image
              w={'100%'}
              h={'100%'}
              src={'/assets/auth_bg.jpg'}
              alt={name}
              objectFit={'cover'}
              borderRadius={'lg'}
            >
              <Box
                pos={'absolute'}
                h={'100%'}
                w={'100%'}
              >
                <Grid p={'16px 24px'} templateColumns={'20% 80%'} gap={6}>
                  <SimpleGrid bg={'#fff'} w={'100px'} h={'100px'} borderRadius={'2xl'} alignItems={'center'}>
                    <Image
                      src={'/assets/logo.png'}
                      objectFit={'contain'}
                      h={'50px'}
                    />
                  </SimpleGrid>
                  <Text color={'primary.50'} fontSize={'lg'} fontWeight={600} textTransform={'uppercase'}>
                    Клиника неврологии и ортопедии ЗдравКлиник на Беговой
                  </Text>
                </Grid>
              </Box>
            </Image>

            <Box borderRadius={'lg'} overflow={'hidden'}>
              <iframe src={'https://yandex.ru/map-widget/v1/?ll=37.624513%2C55.748635&z=12'} width={'560'} height={'400'}
                frameBorder={'1'} allowFullScreen={'true'}></iframe>
            </Box>
            <GridItem colSpan={2}>
              <HStack >
                <Phone href={''}>+998 90 345 68 90</Phone>
                <Button size={'md'} variant={'outline'} type={'button'}>
                  Записаться в клинику
                </Button>
              </HStack>
            </GridItem>
          </Grid>
        </Container>
        <HomeSection py={6} bgColor={'#f2f6fb'}>
          <Container pb={16}>
            <SubTitle align={'center'} mb={10}>
              Врачи клиники "Клиника неврологии и ортопедии ЗдравКлиник на Беговой" · 17
            </SubTitle>
            <Box>
              <DoctorsGrid columns={{ base: 1 }}>
                {[1, 2, 3, 3, 5].map((news, index) => (
                  <DoctorsCard data={news} key={index} />
                ))}
              </DoctorsGrid>
            </Box>
            <Pagination totalRecords={100} />
          </Container>
        </HomeSection>
      </HomeLayout>
    </PageWrapper>
  )
}
