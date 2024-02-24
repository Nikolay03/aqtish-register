import React from 'react'
import { Button, Flex } from '@chakra-ui/react'

import { useTranslate } from '~/utils/translate'
import { HookForm, Input } from '~/components/HookForm'
import { useCreate } from '~/hooks/crud'
import * as API from '~/constants/api'
import { useToast } from '~/hooks'

export default function SubscribeForm () {
  const { t } = useTranslate()
  const toast = useToast()

  const subscription = useCreate(API.SUBSCRIPTION)

  function onSubmit (values) {
    return subscription.create(values)
      .then(() => {
        toast({
          title: t('documents_form_submit_success_title'),
          description: t('documents_form_submit_success_message'),
          status: 'success'
        })
      })
  }

  return (
    <HookForm onSubmit={onSubmit}>
      <Flex>
        <Input
          name={'email'}
          size={{ base: 'sm', md: 'md' }}
          variant={'filled'}
          placeholder={'Enter your email'}
        />
        <Button
          minW={'auto'}
          ml={4}
          size={{ base: 'md', md: 'lg' }}
          isFullWidth={true}
          isLoading={subscription.isLoading}
          type={'submit'}>
          JOIN NOW
        </Button>
      </Flex>
    </HookForm>
  )
}
