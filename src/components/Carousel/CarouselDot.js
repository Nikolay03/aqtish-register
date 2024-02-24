import React from 'react'
import PropTypes from 'prop-types'
import { Circle } from '@chakra-ui/react'

import hexToRgba from '~/utils/hexToRgba'

function CarouselDot (props) {
  const { onClick, active } = props

  const gray = hexToRgba('#546266', '0.3')

  return (
    <Circle
      border={'1px solid'}
      borderColor={active ? 'secondary.300' : gray}
      cursor={'pointer'}
      display={{ base: 'none', md: 'flex' }}
      size={'16px'}
      mx={1}
      mb={4}
      onClick={onClick}
    >
      {active && <Circle
        bg={'secondary.300'}
        size={'8px'}
      />}
    </Circle>
  )
}

CarouselDot.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool
}

export default CarouselDot
