import React from 'react'
import { Box, Divider } from '@chakra-ui/react'

import { useTranslate } from '~/utils/translate'
import PageWrapper from '~/components/PageWrapper'
import { AccountLayout } from '~/components/Layouts'
import { AccountWrapper } from '~/Containers/Account'
import { PROFILE_PACKAGE_URL, PROFILE_PERSONAL_URL, ROOT_URL } from '~/constants/routes'
import { Breadcrumb, BreadcrumbCurrent, BreadcrumbItem, BreadcrumbLink } from '~/components/Breadcumb'
import PackageForm from '~/Containers/Account/AccPackage/PackageCreate/PackageForm'
import { SubTitle } from '~/components/Titles'

export default function PackageCreate () {
  const { t } = useTranslate()

  return (
    <PageWrapper title={t('packages_create_modal_title')}>
      <AccountLayout>
        <AccountWrapper hasPermission={true}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href={ROOT_URL}>
                {t('home_page_title')}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={PROFILE_PERSONAL_URL}>
                {t('account_page_title')}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={PROFILE_PACKAGE_URL}>
                {t('account_nav_package')}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbCurrent>
                {t('packages_create_modal_title')}
              </BreadcrumbCurrent>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box
            bgColor={'white'}
            borderRadius={'xl'}
            px={{ base: 4, md: 10 }}
            py={{ base: 6, md: 9 }}
          >
            <SubTitle mb={6}>{t('packages_create_modal_title')}</SubTitle>
            <Divider orientation={'horizontal'} />
            <PackageForm />
          </Box>
        </AccountWrapper>
      </AccountLayout>
    </PageWrapper>
  )
}
