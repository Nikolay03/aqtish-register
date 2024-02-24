import React from 'react'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { BookOpen } from 'react-feather'

import RightNavigation from './RightNavigation'

import { RightBarSearch } from '~/components/Article/RightBar/RightBarComponents'

export default function RightBar ({ currentArticle }) {
  return (
    <Box display={{ base: 'none', lg: 'block' }}>
      <Box
        pos={'sticky'}
        top={{ base: '20px', lg: '30px' }}
        pb={{ base: '11px', lg: '28px' }}
      >
        <Flex direction={'column'} justify={'space-between'}>
          <RightBarSearch />
          <HStack spacing={4} pl={4} mb={5} mt={'39px'} cursor={'pointer'}>
            <BookOpen size={24} color={'#AAB2C4'} />
            <Text fontSize={'sm'} color={'primary.200'}>
              Copy link
            </Text>
          </HStack>
          <RightNavigation currentArticle={currentArticle} />
        </Flex>
      </Box>
    </Box>
  )
}
