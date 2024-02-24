import React from 'react'
import {
  Stack
} from '@chakra-ui/react'

import { useTranslate } from '~/utils/translate'
import { PopModal } from '~/components/Modal'
import AppointmentForm from '~/components/AppointmentCreate/AppointmentForm'

export default function AppointmentCreateModal (props) {
  const { isUpdate, isOpen, onClose, initialState } = props

  const { t } = useTranslate()

  return (
    <PopModal
      title={'Добавление записи'}
      isOpen={isOpen}
      onClose={onClose}
      size={'xl'}>
      <Stack spacing={8}>
        <AppointmentForm />
      </Stack>
    </PopModal>
  )
}
