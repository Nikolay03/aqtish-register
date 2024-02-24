import React from 'react'
import { Button } from '@chakra-ui/react'

import { HookForm, Input } from '~/components/HookForm'

const FooterSubscription = () => {
  return (
    <HookForm
      onSubmit={() => null}
      render={({ onSubmitForm }) => {
        return (
          <form onSubmit={onSubmitForm}>
            <Input
              size={'sm'}
              name={'firstName'}
              placeholder={'Введите ваш e-mail'}
              rules={{ required: true }}
              isRequired={true}
            />
            <Button minW={'100%'} mt={4}>
              Подписывайтесь
            </Button>
          </form>
        )
      }}
    />
  )
}

export default FooterSubscription
