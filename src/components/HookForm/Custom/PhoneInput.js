import React from 'react'
import PropTypes from 'prop-types'
import { useController, useFormContext } from 'react-hook-form'
import { Input } from '@chakra-ui/react'

import FormControl from '../FormControl'

import { phoneNumberParse } from '~/utils/fieldParsers'

const phoneDefaultValue = '+998 '

function PhoneInput (props) {
  const { name, label, isRequired, rules, ...restProps } = props

  const { register, control, setValue } = useFormContext()

  const input = register(name, rules)

  const { fieldState } = useController({
    name,
    control,
    defaultValue: ''
  })

  const { invalid, error } = fieldState

  return (
    <FormControl
      id={name}
      label={label}
      error={error}
      isInvalid={invalid}
      isRequired={isRequired}>
      <Input
        {...input}
        {...restProps}
        type={'tel'}
        onFocus={event => {
          if (!event.target.value) {
            setValue(name, phoneDefaultValue)
          }
        }}
        onBlur={event => {
          if (event.target.value === phoneDefaultValue) {
            setValue(name, '')
          }
        }}
        onChange={event => {
          const value = phoneNumberParse(event.target.value)
          setValue(name, value)
        }}
      />
    </FormControl>
  )
}

PhoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  rules: PropTypes.object
}

export default PhoneInput
