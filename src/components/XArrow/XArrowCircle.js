import React from 'react'
import { Circle, VisuallyHidden } from '@chakra-ui/react'

const CircleUi = (props) => {
  return (
    <Circle
      size={'40px'}
      w={'16px'}
      zIndex={2}
      h={'16px'}
      bg={'secondary.500'}
      border={'2px solid'}
      borderColor={'primary.300'}
      {...props}
    />
  )
}

const XArrowCircle = ({ isHidden, ...props }) => {
  if (isHidden) {
    return (
      <VisuallyHidden {...props}>
        <CircleUi />
      </VisuallyHidden>
    )
  }
  return (
    <CircleUi {...props} />
  )
}

export default XArrowCircle
