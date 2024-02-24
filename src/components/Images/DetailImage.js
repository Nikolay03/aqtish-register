import React from 'react'

import Image from './Image'

function DetailImage (props) {
  const { src, alt, height, ...otherProps } = props

  return (
    <Image
      alt={alt}
      src={src}
      bgColor={'gray.200'}
      h={height}
      pos={'relative'}
      overflow={'hidden'}
      borderRadius={'2xl'}
      mb={{ base: 6, lg: 12 }}
      {...otherProps}
    />
  )
}

DetailImage.defaultProps = {
  height: '230px'
}

export default DetailImage
