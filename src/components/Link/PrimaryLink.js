import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'

function PrimaryLink (props) {
  const { children, href, ...restProps } = props

  return (
    <Link
      href={href}
      colorScheme={'primary'}
      variant={'primary'}
      {...restProps}>
      {children}
    </Link>
  )
}

PrimaryLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
}

export default PrimaryLink
