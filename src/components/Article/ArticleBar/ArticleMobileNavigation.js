import React, { useEffect } from 'react'
import {
  Box,
  Flex,
  useDisclosure,
  // eslint-disable-next-line import/named
  Drawer, DrawerBody, DrawerContent, DrawerOverlay, Heading
} from '@chakra-ui/react'
import { prop } from 'ramda'

import { useMediaBreakpoint } from '~/hooks'
import { PowerBlock } from '~/components/PowerBlock'
import ArticleNav from '~/components/Article/ArticleBar/ArticleNav'
import { CloseMenuButton, OpenMenuButton } from '~/components/Header/NavBar/MobileNavButtons'

export default function ArticleMobileNavigation ({ currentArticle, setArticle, filterActions }) {
  const name = prop('name', currentArticle)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isLargerThanLG = useMediaBreakpoint({ breakpoint: 'lg' })

  useEffect(() => {
    if (isLargerThanLG) {
      onClose()
    }
  }, [isLargerThanLG])

  return (
    <Box display={{ base: 'block', xl: 'none' }}>
      <Flex justify={'space-between'} align={'center'} pt={5}>
        <Heading
          fontWeight={700}
          color={'primary.100'}
          fontSize={'2xl'}
        >
          {name}
        </Heading>
        <OpenMenuButton onClick={onOpen} />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={'right'}
        preserveScrollBarGap={true}
        scrollBehavior={'inside'}
        size={'xs'}>
        <DrawerOverlay>
          <DrawerContent bg={'secondary.200'}>
            <Flex
              align={'center'}
              justify={'flex-end'}
              h={'70px'}
              px={4}
              pos={'relative'}>
              <CloseMenuButton onClick={onClose} />
            </Flex>

            <DrawerBody
              as={Flex}
              direction={'column'}
              p={6}>
              <ArticleNav
                setArticle={setArticle}
                filterActions={filterActions}
              />
              <Box mt={32}>
                <PowerBlock />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}
