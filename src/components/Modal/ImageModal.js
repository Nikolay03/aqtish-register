import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Img,
  // eslint-disable-next-line import/named
  Modal, ModalOverlay, ModalContent,
  useBoolean
} from '@chakra-ui/react'

import ModalCloseButton from './ModalCloseButton'

function ImageModal (props) {
  const [imgLoaded, setImgLoaded] = useBoolean()

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
      size={'3xl'}
      {...restProps}>
      <ModalOverlay />
      <ModalContent>
        <Box
          bgGradient={'linear(to-t, transparent, blackAlpha.600)'}
          borderRadius={'inherit'}
          h={'50%'}
          pos={'absolute'}
          top={0}
          left={0}
          right={0}
          zIndex={1}
        />

        <ModalCloseButton
          color={{ base: 'white', md: 'whiteAlpha.700' }}
          onClick={onClose}
          zIndex={2}
          _hover={{ color: 'whiteAlpha.800' }}
        />

        <Box
          borderRadius={'custom'}
          pos={'relative'}>
          <Box borderRadius={'inherit'} overflow={'hidden'}>
            <Img
              alt={title}
              src={src}
              w={'100%'}
              minH={imgLoaded ? '0' : { base: '200px', md: '300px' }}
              transition={'all 300ms'}
              onLoad={() => {
                setImgLoaded.on()
              }}
            />
          </Box>
          <Box
            bgGradient={'linear(to-b, transparent, blackAlpha.600)'}
            borderRadius={'inherit'}
            h={'50%'}
            pos={'absolute'}
            bottom={0}
            left={0}
            right={0}
          />
        </Box>
      </ModalContent>
    </Modal>
  )
}

ImageModal.propTypes = {
  src: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ImageModal
