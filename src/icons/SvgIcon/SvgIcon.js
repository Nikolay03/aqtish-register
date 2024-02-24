import React from 'react'
import styled from '@emotion/styled'

const Svg = styled.svg`
  transition: fill 300ms;
`

const SvgIcon = ({
  children,
  fontSize = '22px',
  viewBox = '0 0 24 24',
  height = '1.1em',
  width = '1.1em',
  xmlns = 'http://www.w3.org/2000/svg',
  fill,
  ...props
}) => {
  return (
    <Svg fill={fill || '#fff'} fontSize={fontSize} viewBox={viewBox} height={height} width={width} xmlns={xmlns} {...props}>
      {children}
    </Svg>
  )
}

export default SvgIcon
