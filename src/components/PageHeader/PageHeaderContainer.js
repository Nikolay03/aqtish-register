import React from 'react'
import PropTypes from 'prop-types'
import { Box, useToken } from '@chakra-ui/react'

import hexToRgba from '~/utils/hexToRgba'

function PageHeaderContainer (props) {
  const { children } = props

  const greenColor = useToken('colors', 'palette.green')
  const bgColor = hexToRgba(greenColor, '0.08')

  return (
    <Box
      bgColor={bgColor}
      pt={{ base: 10, md: 6 }}
      pb={{ base: 10, md: 20 }}>
      {children}
    </Box>
  )
}

PageHeaderContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageHeaderContainer
