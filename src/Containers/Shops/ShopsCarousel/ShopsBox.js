import React from 'react'
import PropTypes from 'prop-types'
import { path } from 'ramda'
import { sprintf } from 'sprintf-js'

import { Image } from '~/components/Images'
import Link from '~/components/Link'
import { SHOP_DETAIL_URL } from '~/constants/routes'

function ShopsBox (props) {
  const { data, length, ...restProps } = props

  const name = path(['logo', 'name'], data)
  const image = path(['logo', 'file'], data)
  const alias = path(['alias'], data)
  const id = path(['id'], data)

  const imageWidth = length === 1 ? '90vw' : '150px'
  const imageMaxWidth = length === 1 ? '600px' : '150px'
  const imageHeight = length === 1 ? '85px' : '50px'
  const detailUrl = sprintf(SHOP_DETAIL_URL, id)
  return (
    <Link href={detailUrl}>
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
    </Link>
  )
}

ShopsBox.propTypes = {
  length: PropTypes.number,
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.object
  })
}

export default ShopsBox
