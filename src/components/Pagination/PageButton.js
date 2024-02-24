import React from 'react'
import { IconButton } from '@chakra-ui/react'

function PageButton (props) {
  const { children, isActive, ...restProps } = props

  return (
    <IconButton
      borderRadius={'10px'}
      fontSize={'md'}
      icon={children}
      isActive={isActive}
      variant={'pagination'}
      {...restProps}
    />
  )
}

PageButton.defaultProps = {
  isActive: false
}

export default PageButton
