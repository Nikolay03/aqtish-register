import React from 'react'
import { prop, propEq } from 'ramda'
import { useRouter } from 'next/router'
import { Briefcase, Users } from 'react-feather'
import { useToken } from '@chakra-ui/react'

import * as ROUTES from '~/constants/routes'
import { useTranslate } from '~/utils/translate'
import AccountUser from '~/icons/account/AccountUser'
import AccountMailing from '~/icons/account/AccountMailing'
import { useAuth } from '~/providers/AuthProvider'
import AccountWallet from '~/icons/account/AccountWallet'
import { PROFILE_PACKAGE_URL, PROFILE_RECIPIENT_URL } from '~/constants/routes'

export const NAV_KEYS = {
  account_personal: 'account_personal',
  account_balance: 'account_balance',
  account_mailing: 'account_mailing',
  account_notifications: 'account_notifications',
  account_reports: 'account_reports',
  account_security: 'account_security',
  account_trades: 'account_trades',
  account_feedbacks: 'account_feedbacks',
  account_services: 'account_services'
}

export function useAccountNavigation () {
  const { t } = useTranslate()

  const { user } = useAuth()

  const iconColor = 'primary.500'
  const iconColorHex = useToken('colors', iconColor)

  const isRegistered = prop('isRegistered', user)

  const navigation = [
    {
      key: NAV_KEYS.account_personal,
      href: ROUTES.PROFILE_PERSONAL_URL,
      title: t('account_nav_main'),
      icon: <AccountUser color={iconColor} />,
      hasPermission: true
    },
    {
      key: NAV_KEYS.account_mailing,
      href: ROUTES.PROFILE_PACKAGE_URL,
      title: t('account_nav_package'),
      icon: <AccountMailing color={iconColor} />,
      hasPermission: true
    },
    {
      key: NAV_KEYS.account_mailing,
      href: ROUTES.PROFILE_URL,
      title: t('account_nav_order'),
      icon: <Briefcase color={iconColorHex} />,
      hasPermission: true
    },
    {
      key: NAV_KEYS.account_reports,
      href: ROUTES.PROFILE_RECIPIENT_URL,
      title: t('account_nav_recipient'),
      icon: <Users color={iconColorHex} />,
      hasPermission: true
    },
    {
      key: NAV_KEYS.account_trades,
      href: ROUTES.PROFILE_URL,
      title: t('account_nav_payment'),
      icon: <AccountWallet color={iconColor} />,
      hasPermission: true
    }
  ]

  return {
    navigation
  }
}

export function useCurrentNav () {
  const { pathname } = useRouter()

  const { navigation } = useAccountNavigation()

  const foundNav = navigation.find(propEq('href', pathname))

  return foundNav || {}
}
