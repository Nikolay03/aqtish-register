import React from 'react'
import { Button, SimpleGrid, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { useSubmitContact } from '~/hooks/form'
import {
  HookForm,
  Input,
  useFieldRules,
  Textarea
} from '~/components/HookForm'
import { useToast } from '~/hooks'
import { ROOT_URL } from '~/constants/routes'

export default function ContactHookForm () {
  const { onSubmit, isLoading } = useSubmitContact()
  const toast = useToast()
  const { query, ...router } = useRouter()

  const { emailRules } = useFieldRules()

  const handleSubmit = (values) => {
    return onSubmit(values).then((res) => {
      toast({
        title: 'Успех',
        status: 'success'
      })
      router.replace(ROOT_URL)
      return Promise.resolve(res)
    }).catch((er) => {
      toast({
        title: 'Ошибка',
        status: 'error'
      })
      return Promise.reject(er)
    })
  }

  return (
    <HookForm
      onSubmit={handleSubmit}
      render={({ onSubmitForm }) => {
        return (
          <form onSubmit={onSubmitForm}>
            <VStack spacing={{ base: 4, md: 6 }}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }} w={'100%'}>
                <Input
                  name={'firstName'}
                  label={'First name'}
                  placeholder={'First name'}
                  rules={{ required: true }}
                />
                <Input
                  name={'lastName'}
                  label={'Last name'}
                  placeholder={'Last name'}
                  rules={{ required: true }}
                />
              </SimpleGrid>
              <Input
                name={'email'}
                label={'Email'}
                placeholder={'Email'}
                rules={emailRules}
              />
              <Textarea
                name={'message'}
                label={'Message'}
                rules={{ required: true }}
              />

              <Button
                isFullWidth={true}
                size={'lg'}
                w={'100%'}
                isLoading={isLoading}
                type={'submit'}>
                SEND MESSAGE
              </Button>
            </VStack>
          </form>
        )
      }}
    />
  )
}
