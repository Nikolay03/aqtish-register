import React from 'react'
import { SimpleGrid, Stack } from '@chakra-ui/react'

import { useTranslate } from '~/utils/translate'
import {
  HookForm,
  Input,
  PhoneInput,
  SelectFieldStatic
} from '~/components/HookForm'
import { useAuth } from '~/providers/AuthProvider'
import { AccountContainer, AccountSaveButton } from '~/Containers/Account'

export default function AccPersonalForm () {
  const { t } = useTranslate()

  const { user } = useAuth()

  const defaultValues = {
    ...user
  }

  return (
    <HookForm defaultValues={defaultValues} onSubmit={() => ''}>
      <AccountContainer>
        <Stack mb={6} spacing={6}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <Input
              name={'firstName'}
              label={t('input_first_name_label')}
              isRequired={true}
              size={'sm'}
              rules={{ required: true }}
            />
            <Input
              name={'lastName'}
              label={t('input_last_name_label')}
              isRequired={true}
              size={'sm'}
              rules={{ required: true }}
            />
            <Input
              name={'patronymicName'}
              label={t('input_patronymic_name_label')}
              size={'sm'}
            />
            <PhoneInput
              name={'phoneNumber'}
              label={t('input_phone_label')}
              size={'sm'}
            />
            <PhoneInput
              name={'phoneNumber'}
              label={t('input_email_label')}
              size={'sm'}
            />
            <SelectFieldStatic
              name={'country'}
              list={[{ id: 1, name: 'США' }]}
              label={t('input_country_label')}
              size={'sm'}
            />
          </SimpleGrid>
        </Stack>

        <AccountSaveButton
          justifySelf={{ base: 'unset', md: 'baseline' }}
        />
      </AccountContainer>
    </HookForm>
  )
}
