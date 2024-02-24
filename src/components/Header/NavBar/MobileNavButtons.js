import React from 'react'
import { ArrowRight } from 'react-feather'
import { Box, Flex, Icon, IconButton } from '@chakra-ui/react'

function Line (props) {
  return (
    <Box
      borderRadius={'sm'}
      h={'2px'}
      bgColor={'secondary.300'}
      {...props}
    />
  )
}

function HamburgerIcon () {
  return (
    <Flex
      align={'flex-end'}
      direction={'column'}
      justify={'space-between'}
      h={4}
      w={6}>
      <Line w={'full'} />
      <Line w={5} />
      <Line w={4} />
    </Flex>
  )
}

export function OpenMenuButton (props) {
  return (
    <IconButton
      aria-label={'Open nav'}
      colorScheme={'blue'}
      icon={<HamburgerIcon />}
      minW={12}
      variant={'ghost'}
      {...props}
    />
  )
}

export function CloseMenuButton (props) {
  return (
    <IconButton
      aria-label={'Close nav'}
      colorScheme={'gray'}
      icon={(
        <Icon
          as={ArrowRight}
          color={'secondary.300'}
          boxSize={7}
        />
      )}
      minW={12}
      variant={'ghost'}
      {...props}
    />
  )
}
