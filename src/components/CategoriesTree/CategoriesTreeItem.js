import { Button, Circle, Flex, Highlight, Icon, Text, useToken } from '@chakra-ui/react'
import React from 'react'
import { ArrowRightCircle, ChevronRight } from 'react-feather'

import hexToRgba from '~/utils/hexToRgba'

export default function CategoriesTreeItem (props) {
  const { children, count, isActive, textProps, ...restProps } = props

  const [primaryColor] = useToken('colors', ['primary.500'])

  return (
    <Flex
      px={4}
      py={1}
      minH={'45px'}
      cursor={'pointer'}
      justify={'space-between'} align={'center'}
      {...restProps}
    >
      <Text color={'secondary.300'} fontSize={'xl'} fontWeight={'600'} {...textProps}>
        {children}
      </Text>
      {count && <ChevronRight
        color={hexToRgba(primaryColor, '0.15')}
        fontSize={'xs'}
        size={'22px'} />}
    </Flex>
  )
}
