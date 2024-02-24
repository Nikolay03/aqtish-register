import React from 'react'
import styled from '@emotion/styled'
import { path } from 'ramda'

import LifeClock from '~/components/LifeClock/LifeClock'
import turkey from '~/Containers/Countries/icons/turkey.svg'

const CountryImage = styled.div`
  height: 200px;
  background-image: ${({ file }) => `url(${file})`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  `

const CounryBox = ({ data }) => {
  const mapImage = path(['mapImage', 'file'], data)

  return (
    <CountryImage file={mapImage}>
      <LifeClock
      />
    </CountryImage>
  )
}

export default CounryBox
