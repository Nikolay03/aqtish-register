import React from 'react'
import PropTypes from 'prop-types'
import {
  FormControl as ChakraFormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react'

import useFieldError from './useFieldError'

function FormControl (props) {
  const {
    id,
    children,
    error,
    isInvalid,
    withMessage = true,
    isRequired,
    label
  } = props

  const { getErrorMessage } = useFieldError()

  const errorMessage = getErrorMessage(error)

  return (
    <ChakraFormControl id={id} isRequired={isRequired} isInvalid={isInvalid}>
      {label && (
        <FormLabel>{label}</FormLabel>
      )}

      {typeof children === 'function' ? children(isInvalid) : children}

      {withMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </ChakraFormControl>
  )
}

FormControl.propTypes = {
  id: PropTypes.string.isRequired,
  error: PropTypes.object,
  isInvalid: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ]).isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string
}

export default FormControl
