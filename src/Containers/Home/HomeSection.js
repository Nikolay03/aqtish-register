import React from 'react'
import PropTypes from 'prop-types'
import { Box, useToken } from '@chakra-ui/react'

import hexToRgba from '~/utils/hexToRgba'
import Container from '~/components/Container'

function HomeSection (props) {
  const { children, isColored, isFullWidth, ...otherProps } = props

  const lightGray = useToken('colors', 'palette.lightGray')

  const sectionBgColor = isColored ? hexToRgba(lightGray, '0.3') : 'transparent'

  const boxProps = {
    bgColor: sectionBgColor,
    py: { base: 10, md: 20 }
  }

  if (isFullWidth) {
    return (
      <Box as={'section'} {...boxProps} {...otherProps}>
        <Container>
          {children}
        </Container>
      </Box>
    )
  }

  return (
    <Container as={'section'}>
      <Box borderRadius={'custom'} px={{ base: 6, md: 14 }} {...boxProps}>
        {children}
      </Box>
    </Container>
  )
}

HomeSection.propTypes = {
  children: PropTypes.node.isRequired,
  isColored: PropTypes.bool,
  isFullWidth: PropTypes.bool
}

HomeSection.defaultProps = {
  isFullWidth: true
}

export default HomeSection
