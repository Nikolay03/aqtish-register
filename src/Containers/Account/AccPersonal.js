import React from 'react'
import { Box, Button, Stack, useBreakpointValue } from '@chakra-ui/react'
import { LogOut } from 'react-feather'

import { useTranslate } from '~/utils/translate'
import PageWrapper from '~/components/PageWrapper'
import { useAuth } from '~/providers/AuthProvider'
import {
  AccountWrapper,
  AccPersonalForm,
  AccountWorkspace
} from '~/Containers/Account'
import { TabTitleWrap } from '~/components/Titles'
import { AccountLayout } from '~/components/Layouts'

export default function AccPersonal () {
  const { t } = useTranslate()

  const { user, onLogout, logoutLoading } = useAuth()
  const tagSize = useBreakpointValue({ base: 'sm', md: 'md' })

  const customTitle = (
    <TabTitleWrap>
      <Stack
        align={'center'}
        direction={'row'}
        spacing={{ base: 2, md: 4 }}>
        <Box>{t('account_nav_main')}</Box>
        {/* {userTariffPlan && ( */}
        {/*   <Tag */}
        {/*     bgColor={'palette.common.blue'} */}
        {/*     color={'white'} */}
        {/*     size={tagSize}> */}
        {/*     {userTariffPlan} */}
        {/*   </Tag> */}
        {/* )} */}
      </Stack>

      <Button
        color={'red'}
        leftIcon={<LogOut size={14} />}
        colorScheme={'red'}
        lineHeight={'none'}
        variant={'link'}
        isLoading={logoutLoading}
        onClick={onLogout}>
        {t('button_log_out')}
      </Button>
    </TabTitleWrap>
  )

  return (
    <PageWrapper title={t('account_nav_main')}>
      <AccountLayout>
        <AccountWrapper>
          <AccountWorkspace title={customTitle}>
            <AccPersonalForm />
          </AccountWorkspace>
        </AccountWrapper>
      </AccountLayout>
    </PageWrapper>
  )
}
