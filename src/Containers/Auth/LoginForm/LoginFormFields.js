import React from 'react'
import { Button, Stack, useBreakpointValue } from '@chakra-ui/react'

import { useTranslate } from '~/utils/translate'
import { Input, PasswordInput } from '~/components/HookForm'
import { useAuth } from '~/providers/AuthProvider'

export default function LoginFormFields () {
  const { t } = useTranslate()

  const { isLoading } = useAuth()

  const buttonSize = useBreakpointValue({ base: 'md', sm: 'lg' })

  return (
    <Stack spacing={6}>
      <Input
        name={'username'}
        label={t('input_login_email_label')}
        isRequired={true}
        rules={{ required: true }}
      />
      <PasswordInput
        name={'password'}
        label={t('input_password_label')}
        isRequired={true}
        rules={{ required: true }}
      />

      <Button
        isFullWidth={true}
        isLoading={isLoading}
        size={buttonSize}
        type={'submit'}>
        {t('button_sign_in')}
      </Button>
    </Stack>
  )
}
