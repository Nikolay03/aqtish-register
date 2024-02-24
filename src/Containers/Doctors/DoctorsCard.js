import React from 'react'
import { path, prop, repeat } from 'ramda'
import { sprintf } from 'sprintf-js'
import {
  Box,
  Text,
  Heading,
  Link as ChakraLink,
  Stack,
  useToken,
  HStack,
  SimpleGrid,
  VStack,
  Grid,
  Tabs, TabList, Tab, Center, useDisclosure
} from '@chakra-ui/react'
import styled from '@emotion/styled'

import { NEWS_URL, SHOP_DETAIL_URL } from '~/constants/routes'
import Link from '~/components/Link'
import { Image } from '~/components/Images'
import { useTranslate } from '~/utils/translate'
import { Paragraph } from '~/components/Chakra'
import { RecipientCreateModal } from '~/Containers/Account/AccRecipient/RecipientCreate'
import { AppointmentCreateModal } from '~/components/AppointmentCreate'

const Phone = styled.a`
        color: blueviolet
`

export default function DoctorsCard (props) {
  const { data } = props
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { translateData } = useTranslate()

  const id = prop('id', data)
  const title = translateData(data, 'name')
  const info = path(['infos', '0'], data)

  return (
    <>
      <Grid bg={'primary.50'} gap={14} templateColumns={{ base: '1fr 2fr 3fr' }} borderRadius={'3xl'} p={12} pos={'relative'}>
        <Image
          alt={title}
          src={'/assets/logo.png'}
          objectFit={'contain'}
          h={'100px'}
          mb={4}
        />
        <Stack spacing={'10px'}>
          <Text color={'palette.darkGreen'} fontSize={'md'} fontWeight={700} textTransform={'uppercase'}>
              Каяшева Кристина Сергеевна
          </Text>
          <Box>
            <Text noOfLines={7} color={'gray.500'}>
                Телефон для записи
              <br />
            </Text>
            <Text>
              <a href={''}>
                  8 (495) 135-38-48
              </a>
            </Text>
          </Box>
        </Stack>
        <Stack spacing={'10px'}>
          <Paragraph color={'gray.500'} noOfLines={7} mb={2}>
              Выберите время приёма для записи онлайн
          </Paragraph>
          <Tabs variant={'soft-rounded'} colorScheme={'gray'} width={'min-content'}>
            <TabList>
              <Tab whiteSpace={'nowrap'} isDisabled={true}>четверг, 22</Tab>
              <Tab whiteSpace={'nowrap'}>четверг, 22</Tab>
              <Tab whiteSpace={'nowrap'}>четверг, 22</Tab>
            </TabList>
          </Tabs>
          <Grid gridTemplateColumns={'repeat(5, min-content)'} gap={2} mt={4}>
            {repeat('11:30', 10).map(item => {
              return (
                <Box bg={'#00adee'} w={'62px'} h={'32px'} borderRadius={'lg'} onClick={onOpen}>
                  <Center h={'100%'}>
                    <Text color={'primary.50'} align={'center'}>
                      {item}
                    </Text>
                  </Center>
                </Box>
              )
            })}
          </Grid>
        </Stack>
      </Grid >
      <AppointmentCreateModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}
