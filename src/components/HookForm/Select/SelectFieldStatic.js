import React from 'react'

import {
  defaultGetText,
  defaultGetValue,
  searchFieldStaticPropTypes
} from './utils'
import { useStaticSearchField } from './useSearchField'
import SelectFieldBase from './SelectFieldBase'

function SelectFieldStatic (props) {
  const { list, itemText } = props

  const {
    getStaticOptions,
    getStaticOption,
    filterOption
  } = useStaticSearchField({ list })
  return (
    <SelectFieldBase
      getText={defaultGetText(itemText)}
      getValue={defaultGetValue(['id'])}
      getOptions={() => getStaticOptions()}
      getOption={id => getStaticOption(id)}
      filterOption={filterOption}
      isSearchable={false}
      isStatic={true}
      {...props}
    />
  )
}

SelectFieldStatic.propTypes = {
  ...searchFieldStaticPropTypes
}

SelectFieldStatic.defaultProps = {
  itemText: ['name']
}

export default SelectFieldStatic
