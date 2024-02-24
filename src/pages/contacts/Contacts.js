import React from 'react'
import { Box, Stack } from '@chakra-ui/react'

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
import Pagination from '~/components/Pagination'

export default function Contacts ({ faqData, faqCategoryData }) {
  const { results } = getListData(faqData)
  const { t } = useTranslate()

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
            <Box display={{ base: 'block', lg: 'none' }}>
            </Box>
          </Stack>

          <Box display={{ base: 'none', lg: 'block' }}>

          </Box>
        </PageGrid>
      </PageLayout>
    </PageWrapper>
  )
}
