import React from 'react'
import PropTypes from 'prop-types'
import { BreadcrumbLink as ChakraBreadcrumbLink } from '@chakra-ui/react'
import Link from 'next/link'

function BreadcrumbLink (props) {
  const { href, ...restProps } = props

  return (
    <ChakraBreadcrumbLink
      as={Link}
      href={href}
      color={'secondary.100'}
      {...restProps}
    />
  )
}

BreadcrumbLink.propTypes = {
  href: PropTypes.string.isRequired
}

export default BreadcrumbLink
