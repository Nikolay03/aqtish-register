import React from 'react'
import { Box, Center, Stack, Text } from '@chakra-ui/react'

import ClientRender from './ClientRender'

import { useAuth } from '~/providers/AuthProvider'
import { useTranslate } from '~/utils/translate'
import { Title } from '~/components/Titles'

function PermissionWrapper (props) {
  const { children, hasPermission } = props

  const { t } = useTranslate()

  const { isAuth, isUserLoading } = useAuth()

  if (isUserLoading) {
    return (
      <ClientRender>
        <Box>Loading...</Box>
      </ClientRender>
    )
  }

  if (isAuth && hasPermission) {
    return (
      <ClientRender>
        {children}
      </ClientRender>
    )
  }

  return (
    <ClientRender>
      <Center py={24}>
        <Stack spacing={4} textAlign={'center'}>
          <Title as={'h3'}>
            {t('account_no_access_title')}
          </Title>
          {isAuth
            ? <Text fontSize={'lg'}>{t('account_no_permission_text')}</Text>
            : <Text fontSize={'lg'}>{t('account_no_access_text')}</Text>
          }
        </Stack>
      </Center>
    </ClientRender>
  )
}

PermissionWrapper.defaultProps = {
  hasPermission: true
}

export default PermissionWrapper
