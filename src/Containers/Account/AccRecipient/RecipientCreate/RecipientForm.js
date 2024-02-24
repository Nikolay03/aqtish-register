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

export default function RecipientForm () {
  const { t } = useTranslate()

  const { user } = useAuth()

  const defaultValues = {
  }

  return (
    <HookForm defaultValues={defaultValues} onSubmit={() => ''}>
      <AccountContainer>
        <Stack mb={6} mt={6} spacing={6}>
          <Box>
            <SubTitle color={'secondary.200'} mb={6}>Персональные данные</SubTitle>
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
                isRequired={true}
                size={'sm'}
                rules={{ required: true }}
              />
            </SimpleGrid>
          </Box>
          <Divider orientation={'horizontal'} />
          <Box>
            <SubTitle color={'secondary.200'} mb={6}>Паспорт</SubTitle>
            <Grid
              gap={5}
              mb={5}
              gridTemplateColumns={{ base: '1fr', lg: '0.2fr 0.4fr 0.4fr' }}
            >
              <GridItem>
                <Input
                  name={'firstName'}
                  label={t('input_index_label')}
                  isRequired={true}
                  size={'sm'}
                  rules={{ required: true }}
                />
              </GridItem>
              <GridItem>
                <Input
                  name={'lastName'}
                  label={t('input_passport_number_label')}
                  isRequired={true}
                  size={'sm'}
                  rules={{ required: true }}
                />
              </GridItem>
              <GridItem>
                <Input
                  name={'lastName'}
                  label={t('input_date_issue_label')}
                  isRequired={true}
                  size={'sm'}
                  rules={{ required: true }}
                />
              </GridItem>
            </Grid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
              <Input
                name={'firstName'}
                label={t('input_pnfl_label')}
                isRequired={true}
                size={'sm'}
                rules={{ required: true }}
              />
              <Input
                name={'lastName'}
                label={t('input_issued_whom_label')}
                isRequired={true}
                size={'sm'}
                rules={{ required: true }}
              />
              <Input
                name={'lastName'}
                label={t('input_phone_label')}
                isRequired={true}
                size={'sm'}
                rules={{ required: true }}
              />
            </SimpleGrid>
          </Box>
        </Stack>

        <AccountSaveButton
          justifySelf={{ base: 'unset', md: 'baseline' }}
        />
      </AccountContainer>
    </HookForm>
  )
}
