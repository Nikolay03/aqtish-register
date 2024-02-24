import React from 'react'
import { path } from 'ramda'
import { Box, Button, Stack, Tag, useBreakpointValue } from '@chakra-ui/react'

import { ROOT_URL } from '~/constants/routes'
import { useTranslate } from '~/utils/translate'
// import { useAuth } from '~/components/AuthProvider'
import PageWrapper from '~/components/PageWrapper'
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbCurrent
// } from '~/components/Breadcumb'
// import {
//   AccountWrapper,
//   AccountWorkspace
// } from '~/components/PageComponents/Account'
// import { AccPersonalForm } from '~/components/PageForms/Account'
// import { SectionTitleWrap } from '~/components/Titles'

export default function AccPersonal () {
  const { t } = useTranslate()
  //
  // const { user, onLogout, logoutLoading } = useAuth()
  // const tagSize = useBreakpointValue({ base: 'sm', md: 'md' })
  //
  // const userTariffPlan = path(['tariffPlan', 'name'], user)
  //
  // const customTitle = (
  //   <SectionTitleWrap>
  //     <Stack
  //       align={'center'}
  //       direction={'row'}
  //       spacing={{ base: 2, md: 4 }}>
  //       <Box>{t('account_nav_main')}</Box>
  //       {userTariffPlan && (
  //         <Tag
  //           bgColor={'palette.common.blue'}
  //           color={'white'}
  //           size={tagSize}>
  //           {userTariffPlan}
  //         </Tag>
  //       )}
  //     </Stack>
  //
  //     <Button
  //       color={'palette.common.red'}
  //       colorScheme={'red'}
  //       variant={'link'}
  //       isLoading={logoutLoading}
  //       onClick={onLogout}>
  //       {t('button_log_out')}
  //     </Button>
  //   </SectionTitleWrap>
  // )

  return (
    <PageWrapper title={t('account_nav_main')}>
      {/* <AccountLayout> */}
      {/* <AccountWrapper> */}
      {/*   <Breadcrumb> */}
      {/*     <BreadcrumbItem> */}
      {/*       <BreadcrumbLink href={ROOT_URL}> */}
      {/*         {t('home_page_title')} */}
      {/*       </BreadcrumbLink> */}
      {/*     </BreadcrumbItem> */}
      {/*     <BreadcrumbItem> */}
      {/*       <BreadcrumbLink href={'/'}> */}
      {/*         {t('account_page_title')} */}
      {/*       </BreadcrumbLink> */}
      {/*     </BreadcrumbItem> */}
      {/*     <BreadcrumbItem> */}
      {/*       <BreadcrumbCurrent> */}
      {/*         {t('account_nav_main')} */}
      {/*       </BreadcrumbCurrent> */}
      {/*     </BreadcrumbItem> */}
      {/*   </Breadcrumb> */}

      {/*   <AccountWorkspace title={customTitle}> */}
      {/*     <AccPersonalForm /> */}
      {/*   </AccountWorkspace> */}
      {/* </AccountWrapper> */}
      {/* </AccountLayout> */}
    </PageWrapper>
  )
}
