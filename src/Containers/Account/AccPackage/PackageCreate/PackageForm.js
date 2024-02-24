import React from 'react'
import {
  Box, Button, Divider, Grid, GridItem, HStack, SimpleGrid, Stack, useDisclosure
} from '@chakra-ui/react'

import TabTitleWrap from '~/components/Titles/TabTitleWrap'
import { useTranslate } from '~/utils/translate'
import {
  HookForm,
  Input
} from '~/components/HookForm'
import { useAuth } from '~/providers/AuthProvider'
import { AccountContainer, AccountSaveButton } from '~/Containers/Account'
import { SubTitle } from '~/components/Titles'
import { RecipientCreateModal } from '~/Containers/Account/AccRecipient/RecipientCreate'
import { RecipientTableModal } from '~/Containers/Account/AccRecipient/RecipientTable'
import PackageProductCreate from '~/Containers/Account/AccPackage/PackageCreate/PackageProductCreate'

export default function PackageForm () {
  const { t } = useTranslate()

  const { user } = useAuth()

  const defaultValues = {
    ...user
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenTable, onOpen: onOpenTable, onClose: onCloseTable } = useDisclosure()
  return (
    <>
      <HookForm defaultValues={defaultValues} onSubmit={() => ''}>
        <AccountContainer>
          <Stack mb={6} mt={6} spacing={6}>
            <Box>
              <TabTitleWrap mb={6}>
                <SubTitle color={'secondary.200'} mb={null}>Получатель</SubTitle>
                <HStack>
                  <Button size={'sm'} variant={'outline'} type={'button'} onClick={onOpen}>Добавить получателя</Button>
                  <Button
                    size={'sm'}
                    variant={'outline'}
                    type={'button'}
                    onClick={onOpenTable}
                  >
                    Выбрать получателя
                  </Button>
                </HStack>
              </TabTitleWrap>
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
                <Grid
                  gap={5}
                  mb={5}
                  gridTemplateColumns={{ base: '1fr', lg: '0.3fr 0.7fr' }}
                >
                  <GridItem>
                    <Input
                      name={'ss'}
                      label={t('input_index_label')}
                      isRequired={true}
                      size={'sm'}
                      rules={{ required: true }}
                    />
                  </GridItem>
                  <GridItem>
                    <Input
                      name={'ss'}
                      label={t('input_passport_number_label')}
                      isRequired={true}
                      size={'sm'}
                      rules={{ required: true }}
                    />
                  </GridItem>
                </Grid>
              </SimpleGrid>
            </Box>
            <Box>
              <TabTitleWrap mb={6}>
                <SubTitle color={'secondary.200'} mb={null}>Предметы</SubTitle>
              </TabTitleWrap>
              <PackageProductCreate />
            </Box>
          </Stack>

          <AccountSaveButton
            justifySelf={{ base: 'unset', md: 'baseline' }}
          />
        </AccountContainer>
        <RecipientTableModal
          isOpen={isOpenTable}
          onClose={onCloseTable}
        />
      </HookForm>
      <RecipientCreateModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}
