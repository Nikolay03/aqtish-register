import React, { useEffect } from 'react'
import {
  Box,
  Flex,
  Stack,
  useDisclosure,
  // eslint-disable-next-line import/named
  Drawer, DrawerBody, DrawerContent, DrawerOverlay,
  useToken
} from '@chakra-ui/react'

import { OpenMenuButton, CloseMenuButton } from './MobileNavButtons'

import nav from '~/constants/nav'
import { useDimensions, useMediaBreakpoint } from '~/hooks'
import { useDOM } from '~/components/Utils/Contexts'
import Socials from '~/components/Socials'
import Link from '~/components/Link'
import { AuthButton } from '~/components/Buttons'

export default function MobileNavigation () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { headerRef } = useDOM()
  const { height: headerHeight } = useDimensions(headerRef)
  const secondary300 = useToken('colors', 'primary.50')
  const isLargerThanLG = useMediaBreakpoint({ breakpoint: 'lg' })

  useEffect(() => {
    if (isLargerThanLG) {
      onClose()
    }
  }, [isLargerThanLG])

  return (
    <Box display={{ base: 'block', lg: 'none' }}>
      <OpenMenuButton onClick={onOpen} />

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={'right'}
        preserveScrollBarGap={true}
        scrollBehavior={'inside'}
        size={'sm'}>
        <DrawerOverlay>
          <DrawerContent bg={'primary.50'}>
            <Flex
              align={'center'}
              justify={'space-between'}
              h={`${headerHeight}px`}
              px={4}
              pos={'relative'}>
              <AuthButton isFullWidth={true} />
              <CloseMenuButton onClick={onClose} />
            </Flex>

            <DrawerBody
              as={Flex}
              borderColor={'primary.200'}
              borderTopWidth={1}
              direction={'column'}
              p={6}>
              <Stack
                lineHeight={'base'}
                flexGrow={1}
                mb={6}
                spacing={6}>
                {nav.map(menu => (
                  <Link
                    key={menu.title}
                    href={menu.url}
                    fontSize={'xl'}
                    color={'primary.500'}
                    sx={{
                      '&.active': {
                        color: 'secondary.300'
                      },
                      '&:hover': {
                        color: 'secondary.300'
                      }
                    }}>
                    {menu.title}
                  </Link>
                ))}
              </Stack>
              <Box sx={{
                '& svg': {
                  color: secondary300
                }
              }}>
                <Socials withBg={true} />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}
