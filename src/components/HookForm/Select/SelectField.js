import React from 'react'

import {
  defaultGetText,
  defaultGetValue,
  searchFieldPropTypes
} from './utils'
import { useSearchField } from './useSearchField'
import SelectFieldBase from './SelectFieldBase'

function SelectField (props) {
  const { api, params, itemText, pageSize, ...restProps } = props

  const { getOption, getOptions } = useSearchField({ api, params, pageSize })

  return (
    <SelectFieldBase
      getText={defaultGetText(itemText)}
      getValue={defaultGetValue(['id'])}
      getOptions={getOptions}
      getOption={getOption}
      {...restProps}
    />
  )
}

SelectField.propTypes = {
  ...searchFieldPropTypes
}

SelectField.defaultProps = {
  itemText: ['name'],
  pageSize: 100
}

export default SelectField
