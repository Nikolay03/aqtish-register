import React, { useCallback, useEffect, useRef, useState } from 'react'
import { prop } from 'ramda'
import { Box, Center } from '@chakra-ui/react'

import { ROOT_URL } from '~/constants/routes'
import { useTranslate } from '~/utils/translate'
import { useRequest } from '~/hooks/api'
import PageWrapper from '~/components/PageWrapper'
import { PageLayout } from '~/components/Layouts'
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
  BreadcrumbCurrent
} from '~/components/Breadcumb'
import { PageHeading } from '~/components/Titles'
import Pagination from '~/components/Pagination'
import { NewsCard, NewsGrid } from '~/Containers/News'
import { SearchField } from '~/components/Search'
import { useDebounce } from '~/hooks'

export default function News (props) {
  const { api, newsData } = props
  const { results, count, isLoading, refetch } = useRequest(api, {
    disableLocale: false,
    initialData: newsData
  })

  const { t } = useTranslate()

  const isFirstTime = useRef(true)
  const [searchValue, setSearchValue] = useState('')
  const searchValueDebounced = useDebounce(searchValue, 500)
  useEffect(() => {
    if (searchValueDebounced) {
      isFirstTime.current = false
    }

    if (!isFirstTime.current) {
      refetch({
        search: searchValueDebounced
      })
    }
  }, [searchValueDebounced])

  const onInputChange = useCallback((event) => {
    setSearchValue(event.target.value)
  }, [])

  return (
    <PageWrapper title={t('news_page_title')}>
      <PageLayout>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href={ROOT_URL}>
              {t('home_page_title')}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbCurrent>
              {t('news_page_title')}
            </BreadcrumbCurrent>
          </BreadcrumbItem>
        </Breadcrumb>

        <PageHeading align={'center'} mb={10}>
          {t('news_page_title')}
        </PageHeading>

        <Center mb={20}>
          <Box w={'45%'}>
            <SearchField
              onChange={onInputChange}
              value={searchValue}
              isLoading={isLoading}
              placeholder={t('input_search_label')}
            />
          </Box>
        </Center>

        <NewsGrid isLoading={isLoading} columns={{ base: 1, md: 2 }}>
          {results.map(news => (
            <NewsCard key={news.id} data={news} />
          ))}
        </NewsGrid>

        <Pagination totalRecords={count} />
      </PageLayout>
    </PageWrapper>
  )
}
