import React from 'react'
import PropTypes from 'prop-types'

import BaseLayout from './BaseLayout'

function DetailLayout ({ children }) {
  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  )
}

DetailLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default DetailLayout
