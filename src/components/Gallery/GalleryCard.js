import React from 'react'
import PropTypes from 'prop-types'
import { prop } from 'ramda'
import { Box, Stack, useDisclosure } from '@chakra-ui/react'
import { Youtube, ZoomIn } from 'react-feather'

import { Image } from '~/components/Images'
import { ImageModal, VideoModal } from '~/components/Modal'

function PhotoZoom ({ video, ...props }) {
  return (
    <Box
      cursor={'pointer'}
      pos={'absolute'}
      top={0}
      left={0}
      right={0}
      bottom={0}
      transition={'all 200ms'}
      zIndex={1}
      _hover={{
        bgColor: 'blackAlpha.500',
        '& div': {
          opacity: 1
        }
      }}
      {...props}>
      <Box
        color={'white'}
        pos={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        transition={'inherit'}
        opacity={0}
        zIndex={2}
      >
        {video
          ? (
            <Youtube
              size={45}
            />
          )
          : (
            <ZoomIn
              size={45}
            />
          )}
      </Box>
    </Box>
  )
}

function GalleryCard (props) {
  const { photoSrc, withOpen = true, video, fullWidth, styles } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const description = prop('description', props)

  return (
    <Stack spacing={3} h={'100%'}>
      <Image
        alt={description}
        bgColor={'none'}
        border={'1px solid'}
        borderColor={'primary.300'}
        borderRadius={'12px'}
        w={fullWidth ? '100%' : { base: '100%', md: '223px' }}
        h={fullWidth ? '100%' : { base: '113px', md: '213px' }}
        src={photoSrc}
        {...styles}
      >
        {withOpen && <PhotoZoom video={video} onClick={onOpen} />}
      </Image>
      {video
        ? (
          <VideoModal
            title={description}
            src={video}
            isOpen={isOpen}
            onClose={onClose}
          />
        )
        : (
          <ImageModal
            title={description}
            src={photoSrc}
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
    </Stack>
  )
}

GalleryCard.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string,
  withOpen: PropTypes.bool
}

export default GalleryCard
