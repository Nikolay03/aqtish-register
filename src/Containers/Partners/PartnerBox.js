import React from 'react'
import PropTypes from 'prop-types'
import { path } from 'ramda'

import { Image } from '~/components/Images'

function PartnerBox (props) {
  const { data, length, ...restProps } = props

  const name = path(['image', 'name'], data)
  const image = path(['image', 'file'], data)

  const imageWidth = length === 1 ? '90vw' : '150px'
  const imageMaxWidth = length === 1 ? '600px' : '150px'
  const imageHeight = length === 1 ? '85px' : '50px'
  return (
    <Image
      alt={name}
      borderRadius={'custom'}
      mx={{ lg: 6, xl: 10 }}
      my={3}
      h={imageHeight}
      minW={imageWidth}
      maxW={imageMaxWidth}
      objectFit={'contain'}
      w={imageWidth}
      src={image}
      {...restProps}
    />
  )
}

PartnerBox.propTypes = {
  length: PropTypes.number,
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.object
  })
}

export default PartnerBox
