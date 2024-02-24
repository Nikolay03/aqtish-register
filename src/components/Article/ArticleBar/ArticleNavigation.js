import React from 'react'
import { Box } from '@chakra-ui/react'

import { PowerBlock } from '~/components/PowerBlock'
import ArticleNav from '~/components/Article/ArticleBar/ArticleNav'

export default function ArticleNavigation ({ setArticle, filterActions }) {
  return (
    <>
      <ArticleNav
        setArticle={setArticle}
        filterActions={filterActions}
      />
      <Box mr={'16px'} mt={32}>
        <PowerBlock />
      </Box>
    </>
  )
}
