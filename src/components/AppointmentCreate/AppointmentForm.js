import React from 'react'
import { SimpleGrid, Stack, Box, Grid, Divider, GridItem } from '@chakra-ui/react'

import { useTranslate } from '~/utils/translate'
import {
  HookForm,
  Input
} from '~/components/HookForm'
import { useAuth } from '~/providers/AuthProvider'
import { AccountContainer, AccountSaveButton } from '~/Containers/Account'
import { SubTitle } from '~/components/Titles'

export default function AppointmentForm () {
  const { t } = useTranslate()

  const { user } = useAuth()

  const defaultValues = {
  }

  return (
    <HookForm defaultValues={defaultValues} onSubmit={() => ''}>
      <AccountContainer>
        <Stack mb={6} mt={6} spacing={6}>
          <Box>
            <SimpleGrid spacing={5}>
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
            </SimpleGrid>
          </Box>
          <Divider orientation={'horizontal'} />
          <Box>
            <Input
              name={'lastName'}
              label={t('input_phone_label')}
              isRequired={true}
              size={'sm'}
              rules={{ required: true }}
            />
          </Box>
        </Stack>

        <AccountSaveButton
          justifySelf={{ base: 'unset', md: 'baseline' }}
        />
      </AccountContainer>
    </HookForm>
  )
}
