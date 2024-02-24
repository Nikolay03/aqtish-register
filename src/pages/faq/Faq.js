import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import { find, flatten, pipe, pluck, prop, propEq } from 'ramda'

import { useTranslate } from '~/utils/translate'
import PageWrapper from '~/components/PageWrapper'
import { PageHeading } from '~/components/Titles'
import { PageLayout } from '~/components/Layouts'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbCurrent
} from '~/components/Breadcumb'
import { ROOT_URL } from '~/constants/routes'
import { PageGrid } from '~/components/Grids'
import FaqList from '~/Containers/Faq/FaqList'
import FaqCategories from '~/Containers/Faq/FaqCategories'
import { getListData } from '~/utils/fetch'
import { useCategories } from '~/components/Categories'

export default function Faq ({ faqCategoryData }) {
  const { results, count } = getListData(faqCategoryData)
  const { activeCategory } = useCategories()
  const { t } = useTranslate()
  const faqs = activeCategory
    ? pipe(find(propEq('id', Number(activeCategory))), prop('faqs'))(results)
    : flatten(pluck('faqs')(results))

  return (
    <PageWrapper title={'YUMECS'}>
      <PageLayout>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href={ROOT_URL}>
              {t('home_page_title')}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbCurrent>
              faq
            </BreadcrumbCurrent>
          </BreadcrumbItem>
        </Breadcrumb>

        <PageHeading mb={12} align={'center'}>
          {t('faq_page_title')}
        </PageHeading>
        <PageGrid isReversed={true}>
          <Stack spacing={6}>
            <FaqCategories data={results} allCount={count} />
            <Box display={{ base: 'block', lg: 'none' }}>
              <FaqList
                data={faqs}
              />
            </Box>
          </Stack>

          <Box display={{ base: 'none', lg: 'block' }}>
            <FaqList
              data={faqs}
            />
          </Box>
        </PageGrid>
      </PageLayout>
    </PageWrapper>
  )
}
