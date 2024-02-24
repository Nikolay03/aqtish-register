import React from 'react'
import PropTypes from 'prop-types'
import { useController, useFormContext } from 'react-hook-form'
import { CheckboxGroup as ChakraCheckboxGroup } from '@chakra-ui/react'

import FormControl from '../FormControl'

function CheckboxGroup (props) {
  const { name, children, label, isRequired, ...restProps } = props

  const { control } = useFormContext()

  const { field } = useController({
    name,
    control,
    defaultValue: []
  })

  const { ref, ...inputProps } = field

  return (
    <FormControl
      id={name}
      label={label}
      isRequired={isRequired}>
      <ChakraCheckboxGroup {...inputProps} {...restProps}>
        {children}
      </ChakraCheckboxGroup>
    </FormControl>
  )
}

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  isRequired: PropTypes.bool
}

export default CheckboxGroup
