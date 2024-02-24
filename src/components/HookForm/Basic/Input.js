import React from 'react'
import PropTypes from 'prop-types'
import { useController, useFormContext } from 'react-hook-form'
import { Input as ChakraInput } from '@chakra-ui/react'

import FormControl from '../FormControl'

import InputGroup from './InputGroup'

function Input (props) {
  const {
    name,
    defaultValue,
    label,
    isRequired,
    leftElement,
    withMessage,
    rightElement,
    elementProps,
    rules,
    ...restProps
  } = props

  const { control } = useFormContext()

  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue
  })

  const { ref, ...inputProps } = field
  const { invalid, error } = fieldState

  return (
    <FormControl
      id={name}
      error={error}
      isInvalid={invalid}
      isRequired={isRequired}
      withMessage={withMessage}
      label={label}>
      <InputGroup
        leftElement={leftElement}
        rightElement={rightElement}
        elementProps={elementProps}>
        <ChakraInput
          ref={ref}
          {...inputProps}
          {...restProps}
        />
      </InputGroup>
    </FormControl>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  rules: PropTypes.object,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  leftElement: PropTypes.node,
  rightElement: PropTypes.node,
  elementProps: PropTypes.object
}

Input.defaultProps = {
  defaultValue: ''
}

export default Input
