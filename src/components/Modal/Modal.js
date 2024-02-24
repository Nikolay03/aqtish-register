import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line import/named
import { Modal as ChakraModal, ModalOverlay, ModalContent, ModalHeader, ModalBody } from '@chakra-ui/react'

import ModalCloseButton from './ModalCloseButton'

function Modal (props) {
  const {
    title,
    isOpen,
    onClose,
    children,
    ...restProps
  } = props

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      preserveScrollBarGap={true}
      motionPreset={'slideInBottom'}
      size={'xl'}
      {...restProps}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton onClick={onClose} />

        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal
