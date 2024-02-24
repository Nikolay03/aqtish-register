import React from 'react'
import PropTypes from 'prop-types'
import { useController, useFormContext } from 'react-hook-form'
import { NumberInput as ChakraNumberInput, NumberInputField } from '@chakra-ui/react'

import FormControl from '../FormControl'

function NumberInput (props) {
  const {
    name,
    rules,
    label,
    isDisabled,
    withMessage,
    isRequired,
    size,
    variant,
    ...restProps
  } = props

  const { control } = useFormContext()

  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue: ''
  })

  const { ref, ...inputProps } = field
  const { invalid, error } = fieldState

  return (
    <FormControl
      id={name}
      error={error}
      isInvalid={invalid}
      withMessage={withMessage}
      isRequired={isRequired}
      label={label}>
      <ChakraNumberInput
        {...inputProps}
        isDisabled={isDisabled}
        size={size}
        variant={variant}>
        <NumberInputField
          ref={ref}
          inputMode={'numeric'}
          {...restProps}
        />
      </ChakraNumberInput>
    </FormControl>
  )
}

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string
}

export default NumberInput
