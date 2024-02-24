import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

const Overflow = styled(Box)`
  overflow-x: auto;
  overflow-y: hidden;
`

const OverflowDefault = styled(Overflow)`
  & th:first-of-type, & td:first-of-type {
    padding-left: unset;
  }
  & th:last-child, & td:last-child {
    padding-right: unset;
  }
  & tbody tr:last-child td {
    border-bottom: none;
    padding-bottom: unset;
  }
`

const OverflowClickable = styled(Overflow)`
  & tbody tr:last-child td {
    border-bottom: none;
  }
  & tbody tr {
    cursor: pointer;
    transition: background-color 200ms;
    &:hover {
      background-color: ${(props) => props.theme.colors.primary[200]};
    }
  }
`

export default function TableOverflow (props) {
  const { children, isClickable, ...restProps } = props

  if (isClickable) {
    return (
      <OverflowClickable>
        {children}
      </OverflowClickable>
    )
  }

  return (
    <OverflowDefault {...restProps}>
      {children}
    </OverflowDefault>
  )
}
