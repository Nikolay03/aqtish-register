import React from 'react'
import PropTypes from 'prop-types'
import {
  InputGroup as ChakraInputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'

function InputGroup (props) {
  const { children, leftElement, rightElement, elementProps } = props

  const elementStyles = {
    h: 'full'
  }

  return (
    <ChakraInputGroup>
      {leftElement && (
        <InputLeftElement {...elementProps} {...elementStyles}>
          {leftElement}
        </InputLeftElement>
      )}

      {children}

      {rightElement && (
        <InputRightElement {...elementProps} {...elementStyles}>
          {rightElement}
        </InputRightElement>
      )}
    </ChakraInputGroup>
  )
}

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
  leftElement: PropTypes.node,
  rightElement: PropTypes.node,
  elementProps: PropTypes.object
}

export default InputGroup
