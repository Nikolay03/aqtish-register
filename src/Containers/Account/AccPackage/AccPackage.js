import React from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Stack } from '@chakra-ui/react'

import { ACCOUNT_PACKAGE_CREATE_URL } from '~/constants/routes'
import { useTranslate } from '~/utils/translate'
import PageWrapper from '~/components/PageWrapper'
import { AccountLayout } from '~/components/Layouts'
import { TabTitleWrap } from '~/components/Titles'
import { AccountWorkspace, AccountWrapper } from '~/Containers/Account'
import { PackageTableContainer } from '~/Containers/Account/AccPackage/PackageTable'

export default function AccPackage () {
  const { t } = useTranslate()

  const router = useRouter()

  function onOpenCreate () {
    router.push(ACCOUNT_PACKAGE_CREATE_URL)
  }

  const customTitle = (
    <TabTitleWrap>
      <Box>{t('account_nav_package')}</Box>
    </TabTitleWrap>
  )

  return (
    <PageWrapper title={t('account_nav_package')}>
      <AccountLayout>
        <AccountWrapper hasPermission={true}>
          <AccountWorkspace title={customTitle}>
            <Stack spacing={6}>
              <Button
                alignSelf={'baseline'}
                onClick={onOpenCreate}
                w={{ base: 'full', md: 'auto' }}>
                {t('packages_create_button')}
              </Button>
              <PackageTableContainer />
            </Stack>
          </AccountWorkspace>
        </AccountWrapper>
      </AccountLayout>
    </PageWrapper>
  )
}
