import React, { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { find, prop, propEq, is, unionWith, eqBy } from 'ramda'
import { useController, useFormContext } from 'react-hook-form'

import FormControl from '../FormControl'

import { useTranslate } from '~/utils/translate'
import { useDebounce } from '~/hooks'
import Select from '~/components/Select'

function reducer (state, action) {
  return { ...state, ...action }
}

const initialState = {
  options: [],
  isDirty: false,
  isLoading: false,
  query: ''
}

const getIdFromValue = inputValue => {
  if (is(Object, inputValue)) {
    return prop('id', inputValue)
  }
  return inputValue
}

const getSelectedOption = (options, value, isStatic) => {
  const optionId = isStatic
    ? prop('id', value) || value
    : parseInt(prop('id', value) || value)
  const option = find(propEq('id', optionId))(options)
  return option || ''
}

const onFetchData = (props, state, dispatch) => {
  const { getOptions, getValue, getText } = props

  dispatch({ isLoading: true, isDirty: true })
  getOptions(state.query)
    .then(data => {
      const options = data.map(item => {
        const id = getValue(item)
        const name = getText(item)
        return { ...item, id, name }
      })

      dispatch({ options, isLoading: false })
    })
}

function SearchFieldBase (props) {
  const {
    name,
    parent,
    label,
    rules,
    getOptions,
    getOption,
    getValue,
    getText,
    isRequired,
    isStatic,
    isMulti,
    ...restProps
  } = props

  const { t } = useTranslate()
  const [state, dispatch] = useReducer(reducer, initialState)

  const { control } = useFormContext()
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue: ''
  })
  const { ref, value, ...restField } = field
  const { error, invalid } = fieldState

  const selectedOption = getSelectedOption(state.options, value, isStatic)
  const inputValueId = getIdFromValue(value)
  const debouncedQuery = useDebounce(state.query, 500)

  const onMenuOpen = () => {
    if (!state.isDirty) {
      onFetchData(props, state, dispatch)
    }
  }

  useEffect(() => {
    if (parent) {
      onFetchData(props, state, dispatch)
    }
  }, [parent])

  useEffect(() => {
    if (debouncedQuery) {
      onFetchData(props, state, dispatch)
    }
  }, [debouncedQuery])

  useEffect(() => {
    if (inputValueId) {
      dispatch({ isLoading: true })
      getOption(inputValueId)
        .then(item => {
          const option = {
            id: getValue(item),
            name: getText(item)
          }
          const options = unionWith(
            eqBy(prop('id')),
            state.options,
            [option]
          )

          dispatch({ options, isLoading: false })
        })
    }
  }, [inputValueId])

  const onInputChange = (query, { action }) => {
    if (action === 'input-change') {
      if (!state.isDirty) {
        dispatch({ isDirty: true })
      }
      dispatch({ query })
    }
  }

  function getOptionLabel (option) {
    if (isStatic) {
      return prop('name', option)
    }
    return prop('name', option)
  }

  const selectDefaultProps = {
    ...restProps,
    options: state.options,
    isLoading: state.isLoading,
    getOptionLabel,
    getOptionValue: prop('id'),
    onMenuOpen,
    onInputChange
  }

  return (
    <FormControl
      id={name}
      error={error}
      isInvalid={invalid}
      isRequired={isRequired}
      label={label}>
      <Select
        innerRef={ref}
        inputId={name}
        isInvalid={invalid}
        value={selectedOption}
        {...selectDefaultProps}
        {...restField}
      />
    </FormControl>
  )
}

SearchFieldBase.propTypes = {
  name: PropTypes.string.isRequired,
  getOptions: PropTypes.func.isRequired,
  getOption: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired,
  getText: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  isStatic: PropTypes.bool,
  isMulti: PropTypes.bool,
  label: PropTypes.string,
  parent: PropTypes.any,
  rules: PropTypes.object
}

export default SearchFieldBase
