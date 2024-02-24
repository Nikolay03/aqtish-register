import { path } from 'ramda'
import { useTheme } from '@chakra-ui/react'

import useInputSizes from './useInputSizes'

import hexToRgba from '~/utils/hexToRgba'

export default function useSelectStyles ({ isInvalid, size, variant }) {
  const { colors, ...theme } = useTheme()
  const inputSizes = useInputSizes()
  const transition = 'all 200ms'

  const control = (provided, state) => {
    const variants = {
      outline: {
        bgColor: state.theme.colors.neutral0,
        bgColorHover: state.theme.colors.neutral0,
        bgColorFocus: state.theme.colors.neutral0,
        borderColorHover: hexToRgba(colors.palette.gray, 0.5)
      },
      filled: {
        bgColor: hexToRgba(colors.palette.lightGray, '0.5'),
        bgColorHover: hexToRgba(colors.palette.lightGray, '0.75'),
        bgColorFocus: state.theme.colors.neutral0,
        borderColorHover: 'transparent'
      }
    }

    const bgColor = variants[variant].bgColor
    const bgColorHover = variants[variant].bgColorHover
    const bgColorFocus = variants[variant].bgColorFocus
    const borderColorHover = variants[variant].borderColorHover

    return {
      ...provided,
      backgroundColor: state.isFocused ? bgColorFocus : bgColor,
      borderColor: isInvalid
        ? state.theme.colors.danger
        : state.isFocused
          ? state.theme.colors.primary
          : colors.palette.lightGray,
      boxShadow: isInvalid
        ? `0 0 0 1px ${state.theme.colors.danger}`
        : state.isFocused
          ? `0 0 0 1px ${state.theme.colors.primary}`
          : null,
      borderRadius: state.theme.borderRadius,
      color: colors.palette.darkGreen,
      transition,
      '&:hover': {
        backgroundColor: state.isFocused ? bgColorFocus : bgColorHover,
        borderColor: isInvalid
          ? state.theme.colors.danger
          : state.isFocused
            ? state.theme.colors.primary
            : borderColorHover
      }
    }
  }

  const clearIndicator = (provided, state) => ({
    ...provided,
    color: state.theme.colors.neutral50,
    '&:hover': {
      color: state.theme.colors.neutral40
    }
  })

  const dropdownIndicator = (provided, state) => {
    const sidePaddingValue = path([size, 'px'], inputSizes)
    const sidePaddingFormed = theme.space[sidePaddingValue]
    const padding = `8px ${sidePaddingFormed} 8px 8px`

    return {
      ...provided,
      alignItems: 'center',
      color: state.isFocused
        ? isInvalid
          ? state.theme.colors.danger
          : state.theme.colors.primary
        : colors.palette.gray,
      padding,
      pointerEvents: 'none'
    }
  }

  const indicatorSeparator = () => ({})

  const placeholder = (provided, state) => ({
    ...provided,
    color: state.theme.colors.neutral50,
    marginLeft: 0,
    marginRight: 0
  })

  const input = provided => ({
    ...provided,
    color: 'inherit',
    '& input': {
      fontWeight: 'inherit'
    }
  })

  const menu = (provided, state) => {
    const backgroundColor = state.theme.colors.neutral0
    const borderColor = state.theme.colors.neutral20

    return {
      ...provided,
      backgroundColor,
      borderColor,
      borderWidth: 1,
      boxShadow: theme.shadows.md,
      borderRadius: state.theme.borderRadius,
      minWidth: '300px'
    }
  }

  const menuList = provided => ({
    ...provided,
    padding: theme.space[2]
  })

  const option = (provided, state) => {
    const backgroundColor = colors.transparent
    const backgroundColorSelected = state.theme.colors.neutral30
    const backgroundColorActive = state.theme.colors.neutral20
    const backgroundColorHover = state.theme.colors.neutral10

    return {
      ...provided,
      backgroundColor: state.isSelected ? backgroundColorSelected : backgroundColor,
      borderRadius: state.theme.borderRadius,
      color: colors.palette.darkGreen,
      cursor: 'pointer',
      transition,
      '&:active': {
        backgroundColor: backgroundColorActive
      },
      ':focus': {
        backgroundColor: backgroundColorHover
      },
      '&:hover:not(:active)': {
        backgroundColor: state.isSelected ? backgroundColorSelected : backgroundColorHover
      }
    }
  }

  const singleValue = provided => ({
    ...provided,
    fontSize: 'inherit',
    color: 'inherit'
  })

  const valueContainer = (provided, state) => {
    const paddingValue = path([size, 'px'], inputSizes)

    const singleValueSidePadding = `calc(${theme.space[paddingValue]} - 2px)`
    const isMultiWithValues = state.hasValue && state.isMulti

    return {
      ...provided,
      padding: isMultiWithValues ? theme.space[1] : `2px ${singleValueSidePadding}`
    }
  }

  return {
    control,
    clearIndicator,
    dropdownIndicator,
    indicatorSeparator,
    placeholder,
    input,
    menu,
    menuList,
    option,
    singleValue,
    valueContainer
  }
}
