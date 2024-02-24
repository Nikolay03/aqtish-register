import React from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Skeleton } from '@chakra-ui/react'
import { prop } from 'ramda'

import { useTranslate } from '~/utils/translate'
import { PrimaryLink } from '~/components/Link'
import { LOGIN_URL, PROFILE_PERSONAL_URL } from '~/constants/routes'
import { useAuth } from '~/providers/AuthProvider'

export default function AuthButton (props) {
  const { isFullWidth } = props
  const { t } = useTranslate()

  const router = useRouter()

  const { isAuth, isUserLoading, user } = useAuth()

  function toSignIn () {
    return router.push(LOGIN_URL)
  }

  const lastName = prop('lastName', user)
  const firstName = prop('firstName', user)
  const fullName = `${lastName} ${firstName}`

  return (
    <Skeleton
      display={isFullWidth ? 'flex' : 'inline-flex'}
      isLoaded={!isUserLoading}>
      {isAuth && (
        <PrimaryLink
          href={PROFILE_PERSONAL_URL}
          border={'1px solid'}
          color={'secondary.100'}
          borderRadius={'lg'}
          display={'block'}
          lineHeight={'none'}
          px={3}
          py={2}
          w={'174px'}>
          <Box
            color={'secondary.100'}
            fontSize={'sm'}
            fontWeight={'bold'}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            whiteSpace={'nowrap'}>
            {fullName}
          </Box>
          <Box
            fontSize={'xs'}
            color={'secondary.100'}
          >
            {t('button_user_account')}
          </Box>
        </PrimaryLink>
      )}

      {!isAuth && (
        <Button
          variant={'outline'}
          onClick={toSignIn}
          size={'sm'}
          {...props}
        >
          {t('button_sign_in')}
        </Button>
      )}
    </Skeleton>
  )
}
