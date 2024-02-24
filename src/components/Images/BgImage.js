import React from 'react'
import { Box } from '@chakra-ui/react'

function BgImage (props) {
  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
      {...props}
    />
  )
}

BgImage.propTypes = {
}

BgImage.defaultProps = {
}

export default BgImage
