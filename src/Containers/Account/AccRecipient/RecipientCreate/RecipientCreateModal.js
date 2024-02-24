import React from 'react'
import {
  Stack
} from '@chakra-ui/react'

import { useTranslate } from '~/utils/translate'
import { PopModal } from '~/components/Modal'
import RecipientForm from '~/Containers/Account/AccRecipient/RecipientCreate/RecipientForm'

export default function RecipientCreateModal (props) {
  const { isUpdate, isOpen, onClose, initialState } = props

  const { t } = useTranslate()

  return (
    <PopModal
      title={'Добавление получателя'}
      isOpen={isOpen}
      onClose={onClose}
      size={'5xl'}>
      <Stack spacing={8}>
        <RecipientForm />
      </Stack>
    </PopModal>
  )
}
