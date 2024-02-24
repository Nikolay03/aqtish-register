import React from 'react'
import {
  Stack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { useTranslate } from '~/utils/translate'
import { PopModal } from '~/components/Modal'
import { RecipientTableContainer } from '~/Containers/Account/AccRecipient/RecipientTable'

export default function RecipientTableModal (props) {
  const { isUpdate, isOpen, onClose, initialState } = props
  const { setValue } = useForm()

  const { t } = useTranslate()

  const onClick = (item) => {
    // setValue('recipient.name.first_name', item?.first_name)
    // setValue('recipient.name.sur_name', item?.sur_name)
    // setValue('recipient.name.third_name', item?.third_name)
    // setValue('recipient.passport.series', item?.series)
    // setValue('recipient.passport.number', item?.number)
    return onClose()
  }

  return (
    <PopModal
      title={'Добавление получателя'}
      isOpen={isOpen}
      onClose={onClose}
      size={'5xl'}>
      <Stack spacing={8} mt={6}>
        <RecipientTableContainer withActions={false} variant={'styled'} isClickable={true} onClick={onClick} />
      </Stack>
    </PopModal>
  )
}
