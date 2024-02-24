import React from 'react'

import { useTranslate } from '~/utils/translate'
import PageWrapper from '~/components/PageWrapper'
import { SimpleLayout } from '~/components/Layouts'
import { PageHeading } from '~/components/Titles'
import { AuthContainer, LoginForm } from '~/Containers/Auth'

export default function Login () {
  const { t } = useTranslate()

  return (
    <PageWrapper title={t('login_page_title')}>
      <SimpleLayout>
        <PageHeading mb={8} align={'center'}>
          {t('login_page_heading')}
        </PageHeading>

        <AuthContainer>
          <LoginForm />
        </AuthContainer>
      </SimpleLayout>
    </PageWrapper>
  )
}
