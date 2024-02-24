import React from 'react'

import { HookForm, SelectFieldStatic } from '~/components/HookForm'

const FooterChangeCountry = () => {
  return (
    <HookForm onSubmit={() => null} defaultValues={{
      country: { id: 1, name: 'США' }
    }}>
      <SelectFieldStatic
        name={'country'}
        list={[{ id: 1, name: 'США' }]}
        placeholder={'Страна'}
        size={'sm'}
      />
    </HookForm>
  )
}

export default FooterChangeCountry
