import React from 'react'
import { Button, Stack, useDisclosure } from '@chakra-ui/react'
import { Navigation as NavigationIcon } from 'react-feather'

import CitySelectModal from '../../CitySelect/CitySelectModal'

import Languages from '~/components/Languages/Languages'

export default function Navigation () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Stack
        as={'nav'}
        direction={'row'}
        align={'center'}
        display={{ base: 'none', lg: 'flex' }}
        spacing={{ lg: 5, xl: 8 }}>

        <Languages />
        <Button leftIcon={<NavigationIcon size={16} />} size={'sm'} variant={'outline'} type={'button'} onClick={onOpen}>Ташкент</Button>
      </Stack>
      <CitySelectModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}
