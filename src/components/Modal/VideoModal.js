import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  // eslint-disable-next-line import/named
  Modal, ModalOverlay, ModalContent
} from '@chakra-ui/react'

import ModalCloseButton from './ModalCloseButton'

function VideoModal (props) {
  const {
    title,
    isOpen,
    onClose,
    src,
    ...restProps
  } = props
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      preserveScrollBarGap={true}
      motionPreset={'slideInBottom'}
      size={{ base: 'md', lg: '5xl' }}
      {...restProps}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton
          color={{ base: 'white', md: 'whiteAlpha.700' }}
          onClick={onClose}
          zIndex={2}
          top={{ base: '3px', md: '-40px' }}
          right={{ base: '-5px', md: '-40px' }}
          _hover={{ color: 'whiteAlpha.800' }}
        />

        <Box
          borderRadius={'custom'}
          minH={{ base: '200px', md: '300px' }}
        >
          <Box
            borderRadius={'inherit'} overflow={'hidden'}
            pos={'relative'}
            pb={'56.25%'}
            height={'0'}
            sx={{
              '& iframe': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }
            }}
          >
            <iframe
              width={'100%'}
              height={''}
              src={src}
              frameBorder={'0'}
              allowFullScreen={true}
            />
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  )
}

VideoModal.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default VideoModal
