import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { prop } from 'ramda'

import ArticleNavigation from './ArticleNavigation'

export default function ArticleNavBar ({ currentArticle, setArticle, filterActions }) {
  const name = prop('name', currentArticle)
  return (
    <Box
      display={{ base: 'none', xl: 'flex' }}
      pt={{ base: '20px', lg: '39px' }}
    >
      <Box
        pb={{ base: '11px', lg: '28px' }}
      >
        <Flex justify={'space-between'} direction={'column'}>
          <Heading
            fontWeight={700}
            color={'primary.100'}
            fontSize={'2xl'}
            mb={10}
          >
            {name}
          </Heading>
          <ArticleNavigation setArticle={setArticle} filterActions={filterActions} />
        </Flex>
      </Box>
    </Box>
  )
}
