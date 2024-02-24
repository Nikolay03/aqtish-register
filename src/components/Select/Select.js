import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactSelect from 'react-select'

import useSelectStyles from './useSelectStyles'
import useSelectTheme from './useSelectTheme'

import { useTranslate } from '~/utils/translate'

function getMenuPortalTarget () {
  if (typeof document !== 'undefined') return document.body
  return null
}

function Select (props) {
  const { innerRef, options, onMenuOpen, onMenuClose, onChange, ...restProps } = props
  const { isLoading, isInvalid, placeholder, size, variant, ...selectProps } = restProps

  const { t } = useTranslate()
  const [openMenu, setOpenMenu] = useState(false)
  const styles = useSelectStyles({ isInvalid, size, variant })
  const getTheme = useSelectTheme({ size, variant })
  function noOptionsMessage ({ inputValue }) {
    if (inputValue) {
      return t('select_not_found_message_with_text', {
        text: inputValue
      })
    }
    return t('select_not_found_message')
  }

  function loadingMessage () {
    return t('select_loading_message')
  }

  function handleMenuOpen () {
    setOpenMenu(true)
    if (typeof onMenuOpen === 'function') {
      onMenuOpen()
    }
  }

  function handleMenuClose (event) {
    setOpenMenu(false)
    if (typeof onMenuClose === 'function') {
      onMenuClose()
    }
  }

  function onChangeSelect (option, action) {
    if (typeof onChange === 'function') {
      onChange(option)
    }
  }

  const menuIsOpen = isLoading ? false : openMenu
  const formedPlaceholder = placeholder || null
  return (
    <ReactSelect
      inputRef={innerRef}
      type={'select'}
      options={options}
      styles={styles}
      theme={getTheme}
      blurInputOnSelect={true}
      isLoading={isLoading}
      menuIsOpen={menuIsOpen}
      menuPortalTarget={getMenuPortalTarget()}
      placeholder={formedPlaceholder}
      openMenuOnFocus={true}
      noOptionsMessage={noOptionsMessage}
      loadingMessage={loadingMessage}
      onMenuOpen={handleMenuOpen}
      onMenuClose={handleMenuClose}
      onChange={onChangeSelect}
      {...selectProps}
    />
  )
}

Select.propTypes = {
  innerRef: PropTypes.func,
  isLoading: PropTypes.bool,
  options: PropTypes.array,
  onMenuOpen: PropTypes.func,
  onMenuClose: PropTypes.func,
  onChange: PropTypes.func
}

Select.defaultProps = {
  size: 'md',
  variant: 'outline'
}

export default Select
