import React from 'react'
import PropTypes from 'prop-types'
import { useController, useFormContext } from 'react-hook-form'
import { Textarea as ChakraTextarea } from '@chakra-ui/react'

import FormControl from '../FormControl'

function Textarea (props) {
  const { name, label, isRequired, rules, ...restProps } = props

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
      isRequired={isRequired}
      label={label}>
      <ChakraTextarea
        ref={ref}
        {...inputProps}
        {...restProps}
      />
    </FormControl>
  )
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  rules: PropTypes.object
}

export default Textarea
