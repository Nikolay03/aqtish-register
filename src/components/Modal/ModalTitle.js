import React from 'react'

import { SubTitle } from '~/components/Titles'

export default function ModalTitle (props) {
  return (
    <SubTitle
      as={'h3'}
      fontWeight={'bold'}
      textAlign={'center'}
      {...props}
    />
  )
}
