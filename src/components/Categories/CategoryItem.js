import { Button, Circle, useToken } from '@chakra-ui/react'
import React from 'react'

import hexToRgba from '~/utils/hexToRgba'

export default function CategoryItem (props) {
  const { children, count, isActive, ...restProps } = props

  const [primaryColor] = useToken('colors', ['primary.500'])

  const countCircle = !!count && (
    <Circle
      bgColor={hexToRgba(primaryColor, '0.15')}
      color={primaryColor}
      fontSize={'xs'}
      size={'22px'}>
      {count}
    </Circle>
  )

  return (
    <Button
      bgColor={isActive ? 'white' : 'transparent'}
      colorScheme={'gray'}
      minH={'45px'}
      h={'auto'}
      width={'100%'}
      justifyContent={'start'}
      px={4}
      py={1}
      pointerEvents={isActive ? 'none' : 'unset'}
      rightIcon={countCircle}
      textAlign={'unset'}
      whiteSpace={'unset'}
      _hover={{ bgColor: 'gray.200' }}
      {...restProps}>
      {children}
    </Button>
  )
}
