import React from 'react'
import { ChevronRight } from 'react-feather'
import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react'

function Breadcrumb (props) {
  return (
    <ChakraBreadcrumb
      color={'secondary.100'}
      fontSize={'sm'}
      lineHeight={'normal'}
      alignItems={'center'}
      sx={{
        '& ol': {
          display: 'flex',
          alignItems: 'center'
        }
      }}
      mb={{ base: 6, md: 12 }}
      separator={<ChevronRight size={14} />}
      spacing={2}
      overflow={'hidden'}
      whiteSpace={'nowrap'}
      {...props}
    />
  )
}

Breadcrumb.propTypes = {}

export default Breadcrumb
