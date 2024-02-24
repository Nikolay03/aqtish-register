import React, { createContext, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'

import PermissionWrapper from '~/components/Utils/PermissionWrapper'

const AccountContext = createContext({
  onOpenBalance: () => null
})

export function useAccount () {
  return useContext(AccountContext)
}

export default function AccountWrapper (props) {
  const { children, hasPermission } = props

  const {
    isOpen: isOpenBalance,
    onOpen: onOpenBalance,
    onClose: onCloseBalance
  } = useDisclosure()

  const providerProps = {
    onOpenBalance
  }

  return (
    <PermissionWrapper hasPermission={hasPermission}>
      <AccountContext.Provider value={providerProps}>
        {children}
      </AccountContext.Provider>
    </PermissionWrapper>
  )
}
