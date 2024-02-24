import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import 'react-datepicker/dist/react-datepicker.min.css'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
import { useController, useFormContext } from 'react-hook-form'
import styled from '@emotion/styled'
import { Box, Input } from '@chakra-ui/react'

import FormControl from '../../FormControl'

import { calendarContainer, dayClassName, useCustomHeader } from './utils'

registerLocale('ru', ru)

const DatePickerWrapper = styled(Box)`
  & .react-datepicker-wrapper {
    display: block;
  }
  
  & .datepicker_calendar {
    font-family: inherit;
  }
`

function CustomInput (props, ref) {
  return (
    <Input {...props} ref={ref} autoComplete={'off'} />
  )
}

const CustomInputRef = forwardRef(CustomInput)

function DatePicker (props) {
  const { name, label, isRequired, rules, size, variant } = props

  const { control } = useFormContext()

  const renderCustomHeader = useCustomHeader()

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
      isInvalid={invalid}
      isRequired={isRequired}
      label={label}
      error={error}>
      <DatePickerWrapper>
        <ReactDatePicker
          {...inputProps}
          calendarClassName={'datepicker_calendar'}
          calendarContainer={calendarContainer}
          customInput={(
            <CustomInputRef
              size={size}
              variant={variant}
            />
          )}
          dayClassName={dayClassName}
          dateFormat={'d MMMM, yyyy'}
          locale={'ru'}
          placeholderText={''}
          portalId={'datepicker-portal'}
          renderCustomHeader={renderCustomHeader}
          selected={inputProps.value}
        />
      </DatePickerWrapper>
    </FormControl>
  )
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string
}

CustomInput.propTypes = {
  innerRef: PropTypes.func
}

export default DatePicker
