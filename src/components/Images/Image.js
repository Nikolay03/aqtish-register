import React from 'react'
import PropTypes from 'prop-types'
import NextImage from 'next/image'
import { Box } from '@chakra-ui/react'

function Image (props) {
  const {
    children,
    src,
    alt,
    objectFit,
    objectPosition,
    quality,
    ...restProps
  } = props

  return (
    <Box pos={'relative'} overflow={'hidden'} {...restProps}>
      {src && (
        <NextImage
          alt={alt}
          src={src}
          layout={'fill'}
          objectFit={objectFit}
          objectPosition={objectPosition}
          quality={quality}
        />
      )}
      {children}
    </Box>
  )
}

Image.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  objectFit: PropTypes.string,
  objectPosition: PropTypes.string,
  quality: PropTypes.number
}

Image.defaultProps = {
  objectFit: 'cover',
  objectPosition: 'center'
}

export default Image
