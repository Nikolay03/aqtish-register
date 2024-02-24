import React from 'react'
import PropTypes from 'prop-types'
import { Circle } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { ChevronLeft } from 'react-feather'

import hexToRgba from '~/utils/hexToRgba'

const CircleStyled = styled(Circle)`
  position: absolute;
`
function CarouselArrow (props) {
  const { onClick, ...rest } = props

  const white = hexToRgba('#FFFFFF', '0.7')

  return (
    <CircleStyled
      bgColor={white}
      cursor={'pointer'}
      display={'flex'}
      mx={'6px'}
      size={'30px'}
      onClick={onClick}
      {...rest}
    >
      <ChevronLeft />
    </CircleStyled>
  )
}

CarouselArrow.propTypes = {
  onClick: PropTypes.func
}

export default CarouselArrow
