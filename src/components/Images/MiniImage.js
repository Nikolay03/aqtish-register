import React from 'react'
import { Box } from '@chakra-ui/react'

function MiniImage (props) {
  return (
    <Box
      w={'min'}
      borderRadius={'12px'}
      {...props}
    />
  )
}

MiniImage.propTypes = {
}

MiniImage.defaultProps = {
}

export default MiniImage
