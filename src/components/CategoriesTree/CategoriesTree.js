import React, { Children } from 'react'
import { Box, Center, Heading } from '@chakra-ui/react'
import { isEmpty } from 'ramda'
import { useRouter } from 'next/router'

import CategoriesTreeItem from './CategoriesTreeItem'
import CategoriesTreeSkeleton from './CategoriesTreeSkeleton'

import { useTranslate } from '~/utils/translate'
import { useCategories } from '~/components/Categories'
import { SHOP_URL } from '~/constants/routes'

function CategoriesList (props) {
  const { children, isLoading, list } = props

  const { t } = useTranslate()

  if (isLoading) {
    return (
      <CategoriesTreeSkeleton />
    )
  }

  if (isEmpty(list)) {
    return (
      <Box px={4} py={6}>
        <Center>
          {t('table_no_data')}
        </Center>
      </Box>
    )
  }

  return (
    <Box px={4} pb={4}>
      {children}
    </Box>
  )
}

export default function CategoriesTree (props) {
  const { children, allServicesLabel, queryKey, categoryTitle, allCount, isLoading, boxProps } = props

  const router = useRouter()
  const { t } = useTranslate()
  const arrayChildren = Children.toArray(children)

  return (
    <Box
      alignSelf={'baseline'}
      borderRadius={{ base: 'lg', md: '2xl' }}
      w={'full'}
      {...boxProps}
    >
      <CategoriesList list={arrayChildren} isLoading={isLoading}>
        {allServicesLabel && (
          <CategoriesTreeItem
            count={null}
            onClick={() => router.push({ pathname: SHOP_URL })}>
            {allServicesLabel}
          </CategoriesTreeItem>
        )}
        {children}
      </CategoriesList>
    </Box>
  )
}
