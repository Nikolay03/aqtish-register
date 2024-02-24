import React from 'react'
import { path } from 'ramda'

import Image from '../../components/Images/Image'

import MiniImage from '~/components/Images/MiniImage'

const CountryFlag = ({ data }) => {
  const flag = path(['country', 'flag', 'file'], data)
  return (
    <MiniImage>
      <Image
        bg={'transparent'}
        src={flag}
        alt={name}
        h={'24px'}
        w={'34px'}
      />
    </MiniImage>
  )
}

export default CountryFlag
