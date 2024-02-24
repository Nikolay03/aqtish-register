import React from 'react'
import { Image as ImageIcon } from 'react-feather'
import { Center, CircularProgress, Icon } from '@chakra-ui/react'

import { useCrop } from './ImageUploadProvider'

export default function ImageUploadPlaceholder () {
  const { state: { isLoading, progress } } = useCrop()

  return (
    <Center h={'full'}>
      <CircularProgress
        color={'primary.500'}
        display={isLoading ? 'block' : 'none'}
        trackColor={'gray.100'}
        value={progress}
      />
      <Icon
        as={ImageIcon}
        boxSize={7}
        color={'gray.500'}
        display={isLoading ? 'none' : 'block'}
      />
    </Center>
  )
}
