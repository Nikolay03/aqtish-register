import React from 'react'
import { Box, Button, Center, HStack, Stack } from '@chakra-ui/react'
import { Navigation as NavigationIcon } from 'react-feather'

import ShopsCard from '../Shops/ShopsCard'

import PageWrapper from '~/components/PageWrapper'
import { HomeLayout } from '~/components/Layouts'
import Container from '~/components/Container'
import { PageHeading } from '~/components/Titles'
import { Paragraph } from '~/components/Chakra'
import { ShopsGrid } from '~/Containers/Shops'
import HomeSection from '~/Containers/Home/HomeSection'
import { HookForm, SelectFieldStatic } from '~/components/HookForm'
import { PageGrid } from '~/components/Grids'
import Pagination from '~/components/Pagination'
import { useTranslate } from '~/utils/translate'

export default function Home (props) {
  const { t } = useTranslate()

  return (
    <PageWrapper title={t('shops_page_title')}>
      <HomeLayout withContacts={false}>
        <Container>
          <Stack alignItems={'center'} mt={10}>
            <PageHeading align={'center'} mb={3}>
             Клиники
            </PageHeading>

            <Paragraph align={'center'} mb={4} maxW={'650px'}>
              можете подобрать нужные параметры
            </Paragraph>
          </Stack>
        </Container>
        <HomeSection py={10}>
          <Container>
            <Center>
              <Box w={'80%'}>
                <HookForm onSubmit={() => null}>
                  <HStack>
                    <SelectFieldStatic
                      name={'from'}
                      list={[{ id: 1, name: 'Врач' }, { id: 2, name: 'Клиника' }]}
                      placeholder={'По имени, номеру телефона врача, клиника'}
                      size={'sm'}
                    />
                    <SelectFieldStatic
                      name={'to'}
                      list={[{ id: 1, name: 'Сергели' }]}
                      placeholder={'район'}
                      size={'sm'}
                    />
                    <Button size={'md'} variant={'outline'} type={'button'}>Найти</Button>
                  </HStack>
                </HookForm>
              </Box>
            </Center>
          </Container>
        </HomeSection>
        <HomeSection py={6} bgColor={'#f2f6fb'}>
          <Container pb={16}>
            <Box>
              <ShopsGrid columns={{ base: 1 }}>
                {[1, 2, 3, 3, 5].map((news, index) => (
                  <ShopsCard data={news} key={index} />
                ))}
              </ShopsGrid>
            </Box>
            <Pagination totalRecords={100} />
          </Container>
        </HomeSection>
      </HomeLayout>
    </PageWrapper>
  )
}
