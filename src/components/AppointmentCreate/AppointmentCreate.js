import React from 'react'
import { Box, Divider } from '@chakra-ui/react'

import { useTranslate } from '~/utils/translate'
import PageWrapper from '~/components/PageWrapper'
import { AccountLayout } from '~/components/Layouts'
import { AccountWrapper } from '~/Containers/Account'
import { PROFILE_RECIPIENT_URL, PROFILE_PERSONAL_URL, ROOT_URL } from '~/constants/routes'
import { Breadcrumb, BreadcrumbCurrent, BreadcrumbItem, BreadcrumbLink } from '~/components/Breadcumb'
import RecipientForm from '~/Containers/Account/AccRecipient/RecipientCreate/RecipientForm'
import { SubTitle } from '~/components/Titles'

export default function AppointmentCreate () {
  const { t } = useTranslate()

  return (
    <PageWrapper title={t('recipient_create_modal_title')}>
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
              <BreadcrumbLink href={PROFILE_RECIPIENT_URL}>
                {t('account_nav_recipient')}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbCurrent>
                {t('recipient_create_modal_title')}
              </BreadcrumbCurrent>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box
            bgColor={'white'}
            borderRadius={'xl'}
            px={{ base: 4, md: 10 }}
            py={{ base: 6, md: 9 }}
          >
            <SubTitle mb={6}>{t('recipient_create_modal_title')}</SubTitle>
            <Divider orientation={'horizontal'} />
            <RecipientForm />
          </Box>
        </AccountWrapper>
      </AccountLayout>
    </PageWrapper>
  )
}
