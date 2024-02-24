import React from 'react'

import { useTranslate } from '~/utils/translate'
import PageWrapper from '~/components/PageWrapper'
import { AccountLayout } from '~/components/Layouts'
import { AccountWorkspace, AccountWrapper } from '~/Containers/Account'

export default function Account () {
  const { t } = useTranslate()

  const title = t('account_page_title')

  return (
    <PageWrapper title={title}>
      <AccountLayout>
        <AccountWrapper>
          <AccountWorkspace isRoot={true} />
        </AccountWrapper>
      </AccountLayout>
    </PageWrapper>
  )
}
