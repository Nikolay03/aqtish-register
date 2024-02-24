import React from 'react'
import { Box, Stack } from '@chakra-ui/react'

import LoginFormFields from './LoginFormFields'

import { REGISTRATION_URL } from '~/constants/routes'
import { useTranslate } from '~/utils/translate'
import { HookForm } from '~/components/HookForm'
import { AsideTitle } from '~/components/Titles'
import { PrimaryLink } from '~/components/Link'
import { useAuth } from '~/providers/AuthProvider'
import { AuthFormContainer } from '~/Containers/Auth'

export default function LoginHookForm () {
  const { t } = useTranslate()

  const { onLogin } = useAuth()

  return (
    <AuthFormContainer>
      <Stack justifyContent={'space-between'} h={'full'} spacing={8}>
        <Stack spacing={3}>
          <Stack spacing={8}>
            <AsideTitle fontSize={{ base: 'md', sm: 'lg' }}>
              Войдите в свой персональный аккаунт
            </AsideTitle>

            <HookForm onSubmit={onLogin}>
              <LoginFormFields />
            </HookForm>
          </Stack>

        </Stack>

        <Box fontWeight={'semibold'} textAlign={'center'}>
          {t('login_dont_have_an_account')}
          <PrimaryLink
            fontWeight={'inherit'}
            href={REGISTRATION_URL}
            ml={1}
            textDecor={'underline'}>
            {t('login_register')}
          </PrimaryLink>
        </Box>
      </Stack>
    </AuthFormContainer>
  )
}
