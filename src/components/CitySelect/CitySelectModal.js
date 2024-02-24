import React from 'react'
import {
  Stack
} from '@chakra-ui/react'

import CitySelectForm from './CitySelectForm'

import { useTranslate } from '~/utils/translate'
import { PopModal } from '~/components/Modal'

export default function CitySelectModal (props) {
  const { isUpdate, isOpen, onClose, initialState } = props

  const { t } = useTranslate()

  return (
    <PopModal
      title={'Выберите свой город'}
      isOpen={isOpen}
      onClose={onClose}
      size={'4xl'}>
      <Stack spacing={8}>
        <CitySelectForm />
      </Stack>
    </PopModal>
  )
}
