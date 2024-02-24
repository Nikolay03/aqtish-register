import React from 'react'
import {
  // eslint-disable-next-line import/named
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
  useToken
} from '@chakra-ui/react'

import ModalTitle from './ModalTitle'

import hexToRgba from '~/utils/hexToRgba'

export default function PopModal (props) {
  const {
    title,
    isOpen,
    onClose,
    children,
    ...restProps
  } = props

  const [gray500] = useToken('colors', ['gray.500'])

  const closeButtonColor = hexToRgba(gray500, '0.5')

  const horizontalPadding = { base: 6, sm: 8, md: 12 }
  const verticalPadding = { base: 6, sm: 8, md: 14 }

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      preserveScrollBarGap={true}
      motionPreset={'slideInBottom'}
      size={'lg'}
      {...restProps}>
      <ModalOverlay />
      <ModalContent>
        {title && (
          <ModalHeader
            px={horizontalPadding}
            pt={verticalPadding}
            pb={0}
            maxW={{ base: '85%', md: 'unset' }}
            mx={'auto'}>
            <ModalTitle mb={0}>{title}</ModalTitle>
          </ModalHeader>
        )}
        <ModalCloseButton
          borderColor={closeButtonColor}
          borderWidth={1}
          color={closeButtonColor}
          fontSize={'10px'}
          h={7}
          w={7}
          borderRadius={'lg'}
          top={5}
          right={5}
          _focus={{ boxShadow: 'none' }}
        />

        <ModalBody
          px={horizontalPadding}
          pt={title ? 6 : verticalPadding}
          pb={verticalPadding}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
