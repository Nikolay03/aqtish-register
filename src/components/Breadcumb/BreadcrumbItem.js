import React from 'react'
import PropTypes from 'prop-types'
import { BreadcrumbItem as ChakraBreadcrumbItem } from '@chakra-ui/react'

function BreadcrumbItem (props) {
  return (
    <ChakraBreadcrumbItem
      {...props}
    />
  )
}

BreadcrumbItem.propTypes = {
  isCurrentPage: PropTypes.bool,
  isLastChild: PropTypes.bool
}

export default BreadcrumbItem
