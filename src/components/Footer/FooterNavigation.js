import React from 'react'
import { Box, Text, SimpleGrid, Stack, Divider } from '@chakra-ui/react'

import AsideTitle from '../Titles/AsideTitle'

import { NavLink } from '~/components/Link'
import FooterStack from '~/components/Footer/FooterStack'
import FooterChangeCountry from '~/components/Footer/FooterChangeCountry'
import FooterSubscription from '~/components/Footer/FooterSubscription'
import Container from '~/components/Container'
import { useMediaBreakpoint } from '~/hooks'
import * as ROUTES from '~/constants/routes'
import { useTranslate } from '~/utils/translate'
import { DANGEROUS_GOODS, PROHIBITED_ITEM } from '~/constants/routes'

function FooterHeader (props) {
  return (
    <AsideTitle
      fontSize={{ base: 'md', md: 'lg' }}
      color={'secondary.300'}
      {...props}
    />
  )
}

function FooterLink ({ active, ...props }) {
  return (
    <NavLink
      sx={{
        color: active ? 'secondary.300' : 'secondary.100',
        '&:hover': {
          color: 'secondary.300'
        }
      }}
      {...props}
    />
  )
}

function NavGrid (props) {
  return (
    <Stack
      spacing={3}
      {...props}
    />
  )
}

export default function FooterNavigation () {
  const { t } = useTranslate()

  const isLargerThanMd = useMediaBreakpoint({ breakpoint: 'md' })
  return (
    <Box as={'section'} bg={'primary.200'} py={{ base: 10, md: 16 }}>
      <Container>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={14}>
          <FooterStack>
            <FooterHeader>
              Сервис
            </FooterHeader>
            <NavGrid>
              <FooterLink href={''}>
                Контакты
              </FooterLink >
              <FooterLink href={''}>
                FAQ
              </FooterLink>
            </NavGrid>
            {isLargerThanMd && <Divider />}
          </FooterStack>
          <FooterStack>
            <FooterHeader>
              Пациенту
            </FooterHeader>
            <Text>
              Врачи
            </Text>
          </FooterStack>
          <FooterStack>
            <FooterHeader>
              Подписаться на новостную рассылку
            </FooterHeader>
            <Text>
              Будьте первыми, кто узнает наши новости
            </Text>
            <FooterSubscription />
          </FooterStack>
          <FooterStack>
            <FooterHeader>
              О нас
            </FooterHeader>
            <NavGrid>
              <FooterLink href={'/'}>
                Инфо
              </FooterLink>
              <FooterLink href={''}>
                Помощь
              </FooterLink>
            </NavGrid>
            {isLargerThanMd && <Divider />}
          </FooterStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
