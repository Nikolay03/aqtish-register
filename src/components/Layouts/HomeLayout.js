import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'

import BaseLayout from './BaseLayout'

function HomeLayout ({ paddingTop = true, children, ...props }) {
  return (
    <BaseLayout paddingTop={paddingTop} {...props}>
      <Box pt={0} pb={0}>
        {children}
      </Box>
    </BaseLayout>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default HomeLayout
