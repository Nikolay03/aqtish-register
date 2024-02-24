import React from 'react'
import { XCircle } from 'react-feather'
import { Icon, IconButton } from '@chakra-ui/react'

export default function ModalCloseButton (props) {
  return (
    <IconButton
      aria-label={'Close modal'}
      borderRadius={'full'}
      color={{ base: 'white', md: 'palette.gray' }}
      icon={(
        <Icon
          as={XCircle}
          boxSize={{ base: 6, md: 9 }}
        />
      )}
      h={9}
      minW={'unset'}
      w={9}
      pos={'absolute'}
      top={{ base: '-12px', md: 8 }}
      right={{ base: 0, md: 8 }}
      transform={{ base: 'translate(0, -100%)', md: 'none' }}
      variant={'unstyled'}
      _hover={{ bg: 'palette.lightGray' }}
      {...props}
    />
  )
}
