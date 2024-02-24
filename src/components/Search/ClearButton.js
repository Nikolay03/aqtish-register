import React from 'react'
import { X } from 'react-feather'
import { Icon, IconButton } from '@chakra-ui/react'

export default function ClearButton (props) {
  return (
    <IconButton
      aria-label={'Clear'}
      colorScheme={'gray'}
      icon={<Icon as={X} boxSize={5} />}
      size={'sm'}
      h={8}
      minW={'unset'}
      w={8}
      variant={'ghost'}
      {...props}
    />
  )
}
